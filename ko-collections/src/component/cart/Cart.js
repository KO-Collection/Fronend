import React, {useEffect, useState} from "react";
import Header from "../header/Header";
import Advertisement from "../silde/Advertisement";
import './cart.css';
import './form-order-cart.css';
import './checkbox.css';
import Footer from "../footer/Footer";
import * as appUserService from "../../service/AutheService";
import * as orderService from "../../service/OrderService";
import {createCart, deleteCart, getAllCartService} from "../../service/CartService";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import Swal from "sweetalert2";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [orderProduct, setOrderProduct] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [userName, setUsername] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);
    const [formOrder, setFormOrder] = useState(false);
    const navigate = useNavigate();
    const sumPay = totalAmount / 20000;

    const deleteProduct = async (product) => {
        const response = appUserService.infoAppUserByJwtToken();
        const name = response.sub;

        const result = await deleteCart(name, product);
        getAllCart();
    }
    const deleteForPay = async (product) => {
        const response = appUserService.infoAppUserByJwtToken();
        const name = response.sub;

        const result = await deleteCart(name, product);
        // getAllCart();
    }
    //----Chọn product tính tiền-----

    // Hàm xử lý sự kiện khi checkbox được bấm
    const handleCheckboxChange = (item) => {
        const isSelected = selectedIds.includes(item);
        if (isSelected) {
            const updatedSelectedIds = selectedIds.filter(selectedItem => selectedItem.idProduct !== item.idProduct);
            setSelectedIds(updatedSelectedIds);
        } else {
            setSelectedIds([...selectedIds, item]);
        }
    };
    const isProductSelected = (productId) => {
        return selectedIds.some(item => item.idProduct === productId);
    };

    // -----Thanh toán paypal-----//
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: sumPay,
                        currency_code: 'USD', // Đặt lại thành 'USD' nếu bạn sử dụng môi trường sandbox
                    },
                },
            ],
        })
    }
    const handleOrderDetail = async (value) => {
        for (let i = 0; i < selectedIds.length; i++) {
            let idProduct = selectedIds[i].idProduct;
            let quantity = selectedIds[i].quantityOrder;
            let price = selectedIds[i].price * selectedIds[i].quantityOrder;
            const resultOrderdetaill= await orderService.createOrderDetail(idProduct,quantity,price,value);
            deleteForPay(idProduct);
        }
    }
    const onApprove = async (data, actions) => {
        console.log('Payment was approved!');
        try {
            const response = appUserService.infoAppUserByJwtToken();
            const name = response.sub;
            const resultOrder = await orderService.createOrder(name);
            const idOrder = resultOrder.data;
            handleOrderDetail(idOrder);
            Swal.fire({
                icon: 'success',
                title: 'Thanh toán thành công!',
                showConfirmButton: false,
            });
            navigate("/home");
        } catch (error) {
            console.error('Error handling payment success:', error);
            // console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")

        }
    };
    const onError = (err) => {
        console.error('Payment failed:', err);
        console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
    };
    // const getUsername =  () => {
    //     setUsername(response.sub);
    //     console.log(response.sub);
    //     console.log(userName);
    // };
    const getAllCart = async () => {
        const response = appUserService.infoAppUserByJwtToken();
        if (response === undefined) {
            navigate("/login");
        } else {
            const result = await getAllCartService(response.sub);
            setCart(result);
            console.log(result);
        }
    }
    const addCart = async (id) => {

        const response = appUserService.infoAppUserByJwtToken();

        const name = response.sub;
        const result = await createCart(name, id, 1);
        getAllCart();
    }
    const prevCart = async (id) => {
        const response = appUserService.infoAppUserByJwtToken();
        const name = response.sub;
        const result = await createCart(name, id, -1);
        getAllCart();
    }
    const [height, setHeight] = useState("100%");

    useEffect(() => {
        // getUsername();
        getAllCart();
    }, [])
    useEffect(() => {
        const calculatedTotalAmount = selectedIds.reduce((total, item) => {
            return total + item.price * item.quantityOrder;
        }, 0);

        setTotalAmount(calculatedTotalAmount);
    }, [selectedIds]);

    return (
        <>
            <Header/>
            <Advertisement/>
            <div className="row mx-auto" style={{width: "95%"}}>
                <div className="col-8 d-flex justify-content-center" id="cart">
                    <div>
                        <div style={{marginBottom: "3%", wight: "100%"}}>
                            <h2>GIỎ HÀNG</h2>
                        </div>
                        {cart ?
                            <table className="table" id="product">
                                <tbody>
                                <tr>
                                    <th style={{width: "5%"}}/>
                                    <th style={{width: "10%"}}/>
                                    <th style={{width: "40%"}}>Sản phẩm</th>
                                    <th style={{width: "5%"}} className="justify-content-end">Số lượng</th>
                                    <th style={{width: "20%"}}>Tiền</th>
                                    <th style={{width: "10%", paddingLeft: "50px"}}>Xóa</th>
                                </tr>
                                {cart.map((item) => (
                                        <tr>
                                            <td>
                                                <div className="checkbox-wrapper-10">
                                                    <input defaultChecked="" type="checkbox"
                                                           className="tgl tgl-flip"
                                                           id={`cb${item.idProduct}`}
                                                           onChange={() => handleCheckboxChange(item)}
                                                    />
                                                    <label
                                                        htmlFor={`cb${item.idProduct}`}
                                                        data-tg-on={isProductSelected(item.idProduct) && "Đặt"}
                                                        data-tg-off="Chưa!"
                                                        className="tgl-btn"
                                                    />
                                                </div>
                                            </td>
                                            <td className="d-flex  py-3">
                                                <img
                                                    style={{width: 100, height: 140}}
                                                    src={item.img}
                                                    alt="áaa"
                                                />
                                            </td>
                                            <td className="">
                                                <div className="quantity-content">
                                                    <div className="left-content">
                                                        <h6>{item.nameProduct}</h6>
                                                        <div>Kích cỡ</div>
                                                        <div>Màu sắc</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="quantity-content">
                                                    <div className="left-content" style={{paddingTop: "10%"}}>
                                                        <div className="quantity buttons_added d-flex ">
                                                            <input type="button" defaultValue="<" className="minus"
                                                                   onClick={() => prevCart(item.idProduct)}
                                                                   disabled={isProductSelected(item.idProduct)}
                                                            />
                                                            <input
                                                                type="number"
                                                                max=""
                                                                name="quantity"
                                                                // defaultValue={item.quantityOrder}
                                                                value={item.quantityOrder}
                                                                title="Qty"
                                                                className="input-text qty text"
                                                                pattern=""
                                                                inputMode=""
                                                                disabled
                                                            />
                                                            <input type="button" defaultValue=">" className="plus"
                                                                   onClick={() => addCart(item.idProduct)}
                                                                   disabled={isProductSelected(item.idProduct)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="quantity-content">
                                                    <div className="right-content"
                                                         style={{paddingTop: "5%"}}>
                                                        <h6>{(item.price * item.quantityOrder).toLocaleString("vi-VN")} đ</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="quantity-content">
                                                    <div className="right-content" style={{paddingLeft: "30%"}}>
                                                        <a onClick={() => deleteProduct(item.idProduct)}>
                                                            <span className="fa fa-trash" style={{fontSize: "20px"}}></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )}

                                </tbody>
                            </table> : <div>Chưa có sản phẩm nào trong giỏ hàng</div>}
                    </div>

                </div>
                <div className="col-3 " style={{marginTop: "5%", marginLeft: "3%"}}>
                    <div className=" " style={{height: height}}>
                        <div className="sticky-1">
                            <form className="plan-chooser shadow">
                                <div className="header">
                                    <h4>Hóa đơn</h4>
                                </div>
                                <div className="plan-option">
                                    <input defaultValue="monthly" id="monthly" name="plan" type="radio"/>
                                    <label htmlFor="monthly">
                                        <div className="plan-info">
                                            <span className="plan-cost">{(totalAmount).toLocaleString("vi-VN")} đ</span>
                                            <span className="plan-name">Tổng tiền</span>
                                        </div>
                                    </label>
                                </div>
                                <div className="plan-option">
                                    <input defaultValue="annual" id="annual" name="plan" type="radio"/>
                                    <label htmlFor="annual">
                                        <div className="plan-info">
                                            <span className="plan-cost">{(totalAmount).toLocaleString("vi-VN")} đ</span>
                                            <span className="plan-name">Tạm tính</span>
                                        </div>
                                        <span className="reduction"> Giảm 20% </span>
                                    </label>
                                </div>
                                {(!formOrder) && <a onClick={() => setFormOrder(true)} title="" className="choose-btn">
                                    {" "}
                                    Thanh toán{" "}
                                </a>}

                            </form>
                            {formOrder && <form className="plan-chooser shadow" style={{marginTop: "3%"}}>
                                <div className="header">
                                    <span className="title"> Thông tin đặt hàng</span>
                                    {/*<p className="desc">Amet minim mollit non deserunt ullamco est sit .</p>*/}
                                </div>
                                <div style={{marginTop: "3%"}}>
                                    <span>Tên khách hàng</span>
                                    <input className="form-control" defaultValue="Đàm Thoại Tin" id="monthly"
                                           name="plan" type="text"/>
                                </div>
                                <div style={{marginTop: "3%"}}>
                                    <span>Email</span>
                                    <input className="form-control" defaultValue="Đàm Thoại Tin" id="monthly"
                                           name="plan" type="email"/>
                                </div>
                                <div style={{marginTop: "3%"}}>
                                    <span>Số điện thoại</span>
                                    <input className="form-control" defaultValue="Đàm Thoại Tin" id="monthly"
                                           name="plan" type="email"/>
                                </div>
                                <div style={{marginTop: "3%", marginBottom: "3%"}}>
                                    <span>Địa chỉ</span>
                                    <input className="form-control" defaultValue="Đàm Thoại Tin" id="monthly"
                                           name="plan" type="text"/>
                                </div>

                                <PayPalScriptProvider
                                    options={{"client-id": "ATVLu4Mi0WmojMeUtCh-wTtCBb37GExzwi18B7kLRGSX9bUvnLq92Rnm02UnBCRPu_KGIgnkFOCOP94E"}}>
                                    <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError}/>
                                </PayPalScriptProvider>
                            </form>}

                        </div>


                    </div>
                </div>
            </div>

            <div className="mr-5 ml-5 mt-5 row">
                <div className="col-3">
                </div>
                <div className="col-6">

                </div>

                <div className="col-3">

                </div>


            </div>
            <Footer/>
        </>
    );
}
export default Cart;