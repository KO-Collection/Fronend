import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import './aa.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import InformationUser from "./InfomationUser";
import HistoryOrder from "./HistoryOrder";

const ViewUser = () => {
    const [showInformation, setShowInformation] = useState(true);
    const [showOrder, setShowOrder] = useState(false);
    const handleShowUser = () => {
        setShowInformation(true);
        setShowOrder(false);
    };
    const handleShowOrder = () => {
        setShowInformation(false);
        setShowOrder(true);
    };


    return (
        <>
            <Header/>
            <div className="row mx-auto" style={{width: "90%", marginTop: "5%"}}>
                <div className="col-md-4" id="viewUser">
                    <div className="card shadow">
                        <div className="image">
                            <img src="https://cdn-icons-png.flaticon.com/512/5687/5687398.png"/>
                        </div>
                        <div className="d-flex justify-content-center pt-3">
                            <h5>Đàm Thoại Tin</h5>
                        </div>
                        <div className="d-flex justify-content-center pt-3">
                            <h5>0</h5>
                        </div>
                        <div className="d-flex justify-content-center pt-3">
                            <h6>Điểm thành viên</h6>
                        </div>
                        <div className="nd" style={{marginLeft: "10%"}}>
                             <span
                                 className="fa fa-user"></span>
                            <a className="action" href="#" onClick={handleShowUser}>
                                Chỉnh sửa thông tin cá nhân
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                        <div className="nd" style={{marginBottom: "10%", marginLeft: "10%"}}>
                            <span
                                className="fa fa-clock-o"></span>
                            <a className="action" href="#"  onClick={handleShowOrder}>
                                Lịch sử mua hàng
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    {showInformation && (
                        <div id="updateUser" className="d-flex justify-content-center">
                            <InformationUser/>
                        </div>)}
                    {showOrder && (
                        <div  className="d-flex justify-content-center">
                            <HistoryOrder/>
                        </div>)}
                </div>
            </div>
            <Footer/>
        </>

    );
}
export default ViewUser;