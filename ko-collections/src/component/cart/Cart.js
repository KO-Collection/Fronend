import React, {useState} from "react";
import Header from "../header/Header";
import Advertisement from "../silde/Advertisement";
import './cart.css';
import './form-order-cart.css';
import Footer from "../footer/Footer";

const Cart = () => {
    const [height,setHeight]= useState("500px");
    return (
        <>
            <Header/>
            <Advertisement/>
<div className="row mr-1 ml-1" >
    <div className="col-9 d-flex justify-content-center" id="cart">
        <div>
            <div style={{marginBottom: "3%"}}>
                <h2>GIỎ HÀNG</h2>
            </div>
            <table className="table">
                <tbody>
                <tr>
                    <th style={{width: "20%"}}/>
                    <th style={{width: "40%"}}>Sản phẩm</th>
                    <th style={{width: "10%"}}>Giá</th>
                    <th style={{width: "10%"}} className="justify-content-end">Số lượng</th>
                    <th style={{width: "10%",paddingLeft:"5%"}}>Tổng tiền</th>
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
                                <h6>75.000.000</h6>
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
                                <h6>75.000.000</h6>
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

                </tbody>
            </table>
        </div>

    </div>
    <div className="col-1">
        <div className="sticky" style={{height: height}}>
            <form className="plan-chooser">
                <div className="header">
                    <span className="title"> Phiếu thanh toán</span>
                    {/*<p className="desc">Amet minim mollit non deserunt ullamco est sit .</p>*/}
                </div>
                <div className="plan-option">
                    <input defaultValue="monthly" id="monthly" name="plan" type="radio" />
                    <label htmlFor="monthly">
                        <div className="plan-info">
                            <span className="plan-cost">175.000.000 đ</span>
                            <span className="plan-name">Tổng tiền</span>
                        </div>
                    </label>
                </div>
                <div className="plan-option">
                    <input defaultValue="annual" id="annual" name="plan" type="radio" />
                    <label htmlFor="annual">
                        <div className="plan-info">
                            <span className="plan-cost">175.000.000 đ</span>
                            <span className="plan-name">Tạm tính</span>
                        </div>
                        <span className="reduction"> Giảm 20% </span>
                    </label>
                </div>
                <a href="#" title="" className="choose-btn">
                    {" "}
                    Thanh toán{" "}
                </a>
            </form>
        </div>
    </div>
</div>

             <div className="mr-5 ml-5 mt-5 row" >
                 <div className="col-3">
                 </div>
                 <div className="col-6">
                     <div className="d-flex justify-content-center mr-3 ml-3">
                         <section className="container shadow">
                             <header>Thông tin đặt hàng</header>
                             <form className="form" action="#">
                                 <div className="input-box">
                                     <label>Họ và tên</label>
                                     <input required="" placeholder="Đàm Thoại Tin" type="text" />
                                 </div>
                                 <div className="column">
                                     <div className="input-box">
                                         <label>Số điện thoại</label>
                                         <input required="" placeholder="0975380649" type="telephone" />
                                     </div>
                                 </div>
                                 <div className="column">
                                     <div className="input-box">
                                         <label>Email</label>
                                         <input required="" placeholder="damthoaitin@gmail.com" type="email" />
                                     </div>
                                 </div>
                                 <div className="input-box address">
                                     <label>Địa chỉ</label>
                                     <input required="" placeholder="16 Mỹ Khê 6 Phước Mỹ Sơn Trà Đà Nẵng" type="text" />
                                 </div>
                                 <button>Cập nhật</button>
                             </form>
                         </section>

                     </div>

                 </div>

                 <div className="col-3">
                     {/*<div className="d-flex justify-content-end " style={{marginTop:"3%"}}>*/}
                     {/*    <h5 style={{marginRight: "3%"}}>Tổng tiền</h5>*/}
                     {/*    <h6 style={{fontSize: 20, fontWeight: 700, color: "#aaa"}}>150.0000.000</h6>*/}

                     {/*</div>*/}
                     {/*<div className="d-flex justify-content-end mt-3">*/}
                     {/*    <button*/}
                     {/*        style={{*/}
                     {/*            borderRadius: 20,*/}
                     {/*            wight: "120px",*/}
                     {/*            fontWeight: "bold",*/}
                     {/*            padding: "10px 30px",*/}
                     {/*            background: "palevioletred",*/}
                     {/*            color: "white",*/}
                     {/*            border: "white"*/}
                     {/*        }}*/}
                     {/*    >*/}
                     {/*        Thanh toán*/}
                     {/*    </button>*/}
                     {/*</div>*/}


                 </div>

             </div>
            <Footer/>
        </>
    );
}
export default Cart;