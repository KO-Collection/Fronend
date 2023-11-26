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
import {getProductDetail} from "../../service/ProductService";
import {getUserDetail, updateUser} from "../../service/UserService";
import {differenceInYears, isAfter, parseISO} from "date-fns";
import {Form, Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import XRegExp from "xregexp";

const Cart = () => {
    const [account, setAccount] = useState();
    const [cart, setCart] = useState([]);
    const [orderProduct, setOrderProduct] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [userName, setUsername] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);
    const [formOrder, setFormOrder] = useState(false);
    const [cartUpdated, setCartUpdated] = useState(false);
    const navigate = useNavigate();
    const sumPay = totalAmount / 20000;
    const getUsers = async () => {
        const response = appUserService.infoAppUserByJwtToken();
        if (response !== undefined){
            const name = response.sub;
            const user = await getUserDetail(name);
            setAccount(user);}
    }
    const handleSubmit = async (value, setErrors) => {
        try {
            const response = appUserService.infoAppUserByJwtToken();
            if (response !== undefined) {
                const name = response.sub;
                const result = await updateUser(value, name);
                Swal.fire(
                    "Cập nhật thành công !",
                    "Tài khoản " + name + " đã được cập nhật!",
                    "success"
                );
                getUsers();
            }
        } catch (err) {
            if (err.response.data) {
                setErrors(err.response.data);
            }
            if (err.response.status === 406) {
                setErrors(err.response.data);
            }
        }
    };

    const deleteProduct = async (product,size) => {
        const response = appUserService.infoAppUserByJwtToken();
        const name = response.sub;

        const result = await deleteCart(name, product,size);
        setCartUpdated(prevState => !prevState);
        getAllCart();
    }
    const getQuantityProduct = async (id) => {
        const result = await getProductDetail(id);
        // console.log(result.data.quantity);
        let quantity = result.data.quantity;
        return quantity;
    }
    const deleteForPay = async (product,size) => {
        const response = appUserService.infoAppUserByJwtToken();
        const name = response.sub;
        const result = await deleteCart(name, product,size);
        // getAllCart();
    }
    //----Chọn product tính tiền-----

    // Hàm xử lý sự kiện khi checkbox được bấm
    const handleCheckboxChange = (item) => {
        const isSelected = isProductSelected(item.idProduct, item.idSizeProduct);
        if (isSelected) {
            const updatedSelectedIds = selectedIds.filter(selectedItem => !(selectedItem.idProduct === item.idProduct && selectedItem.idSizeProduct === item.idSizeProduct));
            setSelectedIds(updatedSelectedIds);
        } else {
            setSelectedIds([...selectedIds, item]);
        }
    };
    const isProductSelected = (productId,productSize) => {
        return selectedIds.some(item => item.idProduct === productId && item.idSizeProduct === productSize);
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
            let idSize = selectedIds[i].idSizeProduct;
            let quantity = selectedIds[i].quantityOrder;
            let price = selectedIds[i].price * selectedIds[i].quantityOrder;
            const resultOrderdetaill= await orderService.createOrderDetail(idProduct,quantity,price,value,idSize);
            deleteForPay(idProduct,idSize);
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
            navigate("/home/1");
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
    const addCart = async (id,idSize) => {
        const response = appUserService.infoAppUserByJwtToken();

        const name = response.sub;
        const result = await createCart(name, id,idSize, 1);
        // if (result.status === 201){
        //     setBtnNext(false);
        // }
        // else if (result.status === 200){
        //     setBtnNext(true);
        // }

        getAllCart();
    }
    const prevCart = async (id,idSize) => {
        const response = appUserService.infoAppUserByJwtToken();
        const name = response.sub;
        const result = await createCart(name, id,idSize,-1);
        getAllCart();
    }
    const [height, setHeight] = useState("100%");

    useEffect(() => {
        // getUsername();
        getAllCart();
        getUsers();
    }, [])
    useEffect(() => {
        const calculatedTotalAmount = selectedIds.reduce((total, item) => {
            return total + item.price * item.quantityOrder;
        }, 0);

        setTotalAmount(calculatedTotalAmount);
    }, [selectedIds]);

    return (
        <>
            <Header cartUpdated={cartUpdated}/>
            <Advertisement/>
            <div className="row mx-auto" style={{width: "95%"}}>
                <div className="col-8 d-flex justify-content-center" id="cart">
                    <div>
                        <div style={{marginBottom: "3%", wight: "100%"}}>
                            <h2>GIỎ HÀNG</h2>
                        </div>
                        {cart && cart.length !== 0 ?
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
                                                           id={`cb${item.idProduct}${item.idSizeProduct}`}
                                                           onChange={() => handleCheckboxChange(item)}
                                                    />
                                                    <label
                                                        htmlFor={`cb${item.idProduct}${item.idSizeProduct}`}
                                                        data-tg-on={isProductSelected(item.idProduct,item.idSizeProduct) && "Đặt"}
                                                        data-tg-off={!isProductSelected(item.idProduct,item.idSizeProduct) && "Chưa"}
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
                                                        <div>Kích cỡ: {item.sizeProduct}</div>
                                                        <div>Màu sắc: {item.colorName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="quantity-content">
                                                    <div className="left-content" style={{paddingTop: "10%"}}>
                                                        <div className="quantity buttons_added d-flex ">
                                                            <input type="button" defaultValue="<" className="minus"
                                                                   onClick={() => prevCart(item.idProduct,item.idSizeProduct)}
                                                                   disabled={isProductSelected(item.idProduct,item.idSizeProduct) ||  item.quantityOrder < 2}
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
                                                                   onClick={() => addCart(item.idProduct,item.idSizeProduct)}
                                                                   disabled={isProductSelected(item.idProduct,item.idSizeProduct) || (item.quantityOrder >= getQuantityProduct(item.idProduct))}
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
                                                {!isProductSelected(item.idProduct,item.idSizeProduct) && (
                                                        <div className="quantity-content">
                                                            <div className="right-content" style={{ paddingLeft: "30%" }}>
                                                                <a onClick={() => deleteProduct(item.idProduct,item.idSizeProduct)}>
                                                                    <span className="fa fa-trash" style={{ fontSize: "20px" }}></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                )}
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
                                {totalAmount > 0 &&(!formOrder) && <a onClick={() => setFormOrder(true)} title="" className="choose-btn">
                                    {" "}
                                    Thanh toán{" "}
                                </a>}

                            </form>
                            {totalAmount > 0 && formOrder &&
                                <Formik  enableReinitialize
                                         initialValues={{
                                             ...account,
                                         }}
                                         validationSchema={Yup.object({
                                             nameCustomer: Yup.string()
                                                 .max(50, "Tên khách hàng tối đa 50 ký tự")
                                                 .min(3, "Tên khách hàng tối thiểu 3 ký tự").required("Không bỏ trống trường này").matches(XRegExp('^\\p{Lu}\\p{Ll}*([\\s]\\p{Lu}\\p{Ll}*)*$'), "Nhập sai định dạng vd:Nguyen Van An "),
                                             address: Yup.string()
                                                 .required("Không bỏ trống trường này.")
                                                 .max(100, "Địa chỉ tối đa 100 ký tự ").min(5, "Địa chỉ tối thiểu 5 ký tự."),
                                             phoneNumber: Yup.string()
                                                 .required("Không bỏ trống trường này")
                                                 .max(11, "Số điện thoại tối đa 11 ký tự.")
                                                 .min(10, "Số điện tối thiểu 10 ký tự.").matches(/^(0[3|5|7|8|9])([0-9]{8})\b$/
                                                     , "Nhập sai định dạng vd: 0339779768"),
                                             userEmail: Yup.string()
                                                 .required("Không bỏ trống trường này").min(12, "Email tối thiểu 12 ký tự")
                                                 .matches(
                                                     /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                                                     "Nhập sai định dạng vd:nguyenvanan@gmail.com"
                                                 ).max(30, "Email tối đa 30 ký tự"),
                                         })}
                                         onSubmit={(values, {setErrors}) => handleSubmit(values, setErrors)}>
                                    {({isValid, dirty}) => (
                                        <Form className="plan-chooser shadow" style={{marginTop: "3%"}}>
                                        <div className="header">
                                            <span className="title"> Thông tin đặt hàng</span>
                                        </div>
                                        <div style={{marginTop: "3%"}}>
                                            <span>Tên khách hàng</span>
                                            <Field className="form-control"
                                                   name="nameCustomer" type="text"/>
                                            <ErrorMessage
                                                className="text-danger"
                                                name="nameCustomer"
                                                component="small"
                                            />
                                        </div>
                                        <div style={{marginTop: "3%"}}>
                                            <span>Email</span>
                                            <Field className="form-control" id="monthly"
                                                   name="userEmail" type="email"/>
                                            <ErrorMessage
                                                className="text-danger"
                                                name="userEmail"
                                                component="small"
                                            />
                                        </div>
                                        <div style={{marginTop: "3%"}}>
                                            <span>Số điện thoại</span>
                                            <Field className="form-control"
                                                   name="phoneNumber" type="text"/>
                                            <ErrorMessage
                                                className="text-danger"
                                                name="phoneNumber"
                                                component="small"
                                            />
                                        </div>
                                        <div style={{marginTop: "3%", marginBottom: "3%"}}>
                                            <span>Địa chỉ</span>
                                            <Field type="textarea" className="form-control" style={{height: "100px"}} name="address"/>
                                            <ErrorMessage
                                                className="text-danger"
                                                name="address"
                                                component="small"
                                            />
                                        </div>
                                            {isValid && dirty && (
                                                <div style={{marginTop: "5%", marginBottom: "5%"}}
                                                     className="d-flex justify-content-center">
                                                    <button className="btn btn-dark w-50" type={"submit"}>Cập nhật</button>
                                                </div>)}
                                        <PayPalScriptProvider
                                            options={{"client-id": "ATVLu4Mi0WmojMeUtCh-wTtCBb37GExzwi18B7kLRGSX9bUvnLq92Rnm02UnBCRPu_KGIgnkFOCOP94E"}}>
                                            <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError}/>
                                        </PayPalScriptProvider>
                                    </Form>)}
                                </Formik>

                            }

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