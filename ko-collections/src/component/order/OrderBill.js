import React, {useEffect, useState} from "react";
import Header from "../header/Header";
import Advertisement from "../silde/Advertisement";
import Footer from "../footer/Footer";
import * as appUserService from "../../service/AutheService";
import {createCart, getAllCartService} from "../../service/CartService";
import {Link, useNavigate} from "react-router-dom";
import './order-desiger.css';
const OrderBill = () => {
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const navigate = useNavigate();
    const [pay,setPay] = useState(false);

    const getAllCart = async () => {
        const response = appUserService.infoAppUserByJwtToken();
        if (response === undefined) {
            navigate("/login");
        }else {
            const result = await getAllCartService(response.sub);
            setCart(result)
        }
    }


    useEffect(() => {
        getAllCart();
    }, [])
    useEffect(() => {
        const calculatedTotalAmount = cart.reduce((total, item) => {
            return total + item.price * item.quantityOrder;
        }, 0);

        setTotalAmount(calculatedTotalAmount);
    }, [cart]);

    return (
        <>
            <Header/>
                 <div className="row mx-auto" style={{width:"70%",marginTop:"4%"}}>
                     <div className="col-6 ">
                         { (!pay)  ? (
                             <div id="bill" className="products">
                             <h2>KO Collection</h2>
                             <div className="d-flex justify-content-center ">
                                 <section className="container ">
                                     <h4>Thông tin thanh toán</h4>
                                     <form className="form" action="#">
                                         <div className="input-box">
                                             <label>Họ và tên</label>
                                             <input required="" placeholder="Đàm Thoại Tin" type="text"/>
                                         </div>
                                         <div className="column">
                                             <div className="input-box">
                                                 <label>Số điện thoại</label>
                                                 <input required="" placeholder="0975380649" type="telephone"/>
                                             </div>
                                         </div>
                                         <div className="column">
                                             <div className="input-box">
                                                 <label>Email</label>
                                                 <input required="" placeholder="damthoaitin@gmail.com" type="email"/>
                                             </div>
                                         </div>
                                         <div className="input-box address">
                                             <label>Địa chỉ</label>
                                             <input required="" placeholder="16 Mỹ Khê 6 Phước Mỹ Sơn Trà Đà Nẵng" type="text"/>
                                         </div>
                                         <div className=" d-flex justify-content-end">
                                             <button className="w-50" onClick={()=>setPay(true)}>Phương thức thanh toán</button>
                                         </div>
                                     </form>
                                 </section>

                             </div>

                         </div>):(
                             <div id="bill" className="products">
                                 <h2>KO Collection</h2>
                                 <div className="d-flex justify-content-center ">
                                     <section className="container ">
                                         <h4>Phương thức thanh toán</h4>
                                         <form className="form" action="#">
                                             <div className="">
                                                 {/*<label>Họ và tên</label>*/}
                                                 <input required="" placeholder="Đàm Thoại Tin" type="radio" id="paypal"/>
                                                 <label className="form-check-label" htmlFor="paypal">
                                                     <img
                                                         style={{height: "40px", width: "40px"}}
                                                         src="https://play-lh.googleusercontent.com/bDCkDV64ZPT38q44KBEWgicFt2gDHdYPgCHbA3knlieeYpNqbliEqBI90Wr6Tu8YOw"
                                                         alt=""/>
                                                          Paypal
                                                 </label>

                                             </div>
                                             <div className=" d-flex justify-content-end">
                                                 <button className="w-50" >Thanh toán</button>
                                             </div>
                                         </form>
                                     </section>

                                 </div>

                             </div>
                         )}


                     </div>
                     <div className="col-6">

                     </div>
                 </div>
            {/*<Footer/>*/}
        </>
    );
}
export default OrderBill;