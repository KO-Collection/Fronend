import React from "react";
import Header from "../header/Header";
import Advertisement from "../silde/Advertisement";
import './cart.css';

const Cart = () => {
    return (
        <>
            <Header/>
            <Advertisement/>
            <div className="mx-auto " style={{width: "85%"}} id="cart">
                <div style={{marginBottom: "3%"}}>
                    <h2>GIỎ HÀNG</h2>
                </div>
                <table className="table">
                    <tbody>
                    <tr>
                        <th style={{width: "20%"}}/>
                        <th style={{width: "20%"}}>Sản phẩm</th>
                        <th style={{width: "20%"}}>Giá</th>
                        <th style={{width: "20%"}} className="justify-content-end">Số lượng</th>
                        <th style={{width: "20%",paddingLeft:"10%"}}>Tổng tiền</th>
                    </tr>
                    <tr>
                        <td className="d-flex  py-3">
                            <img
                                style={{width: 160, height: 240}}
                                src="https://anh.24h.com.vn/upload/3-2016/images/2016-09-30/1475226698-thuong-hieu-hk-fashion-huong-toi-nu-cong-so-viet-hk-fashion--1-.jpg"
                                alt="áaa"
                            />
                        </td>
                        <td className="">
                            <div className="quantity-content">
                                <div className="left-content">
                                    <h6>New Green Jacket</h6>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="quantity-content">
                                <div className="left-content">
                                    <h6>$79</h6>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="quantity-content">
                                <div className="left-content">
                                    <div className="quantity buttons_added d-flex ">
                                        <input type="button" defaultValue="<" className="minus"/>
                                        <input
                                            type="number"
                                            step={1}
                                            min={1}
                                            max=""
                                            name="quantity"
                                            defaultValue={1}
                                            title="Qty"
                                            className="input-text qty text"
                                            size={4}
                                            pattern=""
                                            inputMode=""
                                        />
                                        <input type="button" defaultValue=">" className="plus"/>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="quantity-content">
                                <div className="right-content" style={{paddingLeft:"30%"}}>
                                    <h6>75.000.000</h6>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="d-flex  py-3">
                            <img
                                style={{width: 160, height: 240}}
                                src="https://product.hstatic.net/200000182297/product/ak068421612353060201p1399dt_q068521722353160274p799dt_6__afd2e392e5a44211a252cd718017acdc_master.jpg"
                                alt="áaa"
                            />
                        </td>
                        <td className="">
                            <div className="quantity-content">
                                <div className="left-content">
                                    <h6>New Green Jacket</h6>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="quantity-content">
                                <div className="left-content">
                                    <h6>$79</h6>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="quantity-content">
                                <div className="left-content">
                                    <div className="quantity buttons_added d-flex ">
                                        <input type="button" defaultValue="<" className="minus"/>
                                        <input
                                            type="number"
                                            step={1}
                                            min={1}
                                            max=""
                                            name="quantity"
                                            defaultValue={1}
                                            title="Qty"
                                            className="input-text qty text"
                                            size={4}
                                            pattern=""
                                            inputMode=""
                                        />
                                        <input type="button" defaultValue=">" className="plus"/>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="quantity-content float-end">
                                <div className="right-content">
                                    <h6>75.000.000</h6>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="d-flex justify-content-end " style={{marginTop:"3%"}}>
                    <h5 style={{marginRight: "3%"}}>Tổng tiền</h5>
                    <h6 style={{fontSize: 20, fontWeight: 700, color: "#aaa"}}>150.0000.000</h6>

                </div>
                <div className="d-flex justify-content-end mt-3">
                    <button
                        style={{
                            borderRadius: 20,
                            marginRight: "0.5rem",
                            fontWeight: "bold",
                            padding: "10px 30px",
                            background: "palevioletred",
                            color: "white",
                            border: "white"
                        }}
                    >
                        Cập nhật
                    </button>
                    <button
                        style={{
                            borderRadius: 20,
                            fontWeight: "bold",
                            padding: "10px 30px",
                            background: "palevioletred",
                            color: "white",
                            border: "white"
                        }}
                    >
                        Thanh toán
                    </button>
                </div>

            </div>

        </>
    );
}
export default Cart;