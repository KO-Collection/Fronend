import React, {useEffect, useState} from "react";
import * as appUserService from "../../service/AutheService";
import {getAllOrder} from "../../service/OrderService";
import ModalDetailOrder from "./ModalDetailOrder";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

const HistoryOrder = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState();
    const [listOrder, setListOrder] = useState([]);
    const [dayOrder, setDayOrder] = useState();
    const [showDetail, setShowDetail] = useState(false);
 const getDetail = (value) => {
   setDayOrder(value);
   setShowDetail(true);
 }
    const getHistoryOrder = async (page) => {
        const response = appUserService.infoAppUserByJwtToken();
        if (response !== undefined){
        const user = response.sub;
        const result = await getAllOrder(user, page);
        if (result?.status === 200) {
            setListOrder(result?.data.content);
            setTotalPage(result?.data.totalPages);
        } else {
            setListOrder([]);
        }
    }
 }
    const nextPage = () => {
        if (page + 1 < totalPage) {
            setPage((pre) => pre + 1)
        }
    }
    const previousPage = () => {
        if (page > 0) {
            setPage((pre) => pre - 1)
        }
    }
    useEffect(() => {
        getHistoryOrder(page);
    }, [page])
    return (
        <>
            {showDetail && dayOrder ?
                <div className="shadow mx-auto" style={{padding: "20px"}}>
                    <ModalDetailOrder dayOrder={dayOrder}/>
                    <a className="d-flex justify-content-center" href={"#"} onClick={()=>setShowDetail(false)}>Trở về</a>
                </div>

                : <div className="shadow mx-auto" style={{padding: "20px"}}>
                    <div className="d-flex justify-content-center">
                        <h2>Lịch sử mua hàng</h2>
                    </div>
                    <table className="table table-striped-columns" style={{width: "800px"}}>
                        <tr>
                            <th>STT</th>
                            <th>Ngày giờ</th>
                            <th style={{marginLeft: "10px"}}>Số lần mua</th>
                            <th style={{marginLeft: "10px"}}>Số lượng mua</th>
                            <th>Đã chi</th>
                        </tr>
                        {listOrder.map((item, index) => (
                            <tr>
                                <td> {(index + 1) + page * 5}</td>
                                <td onClick={() => {
                                            getDetail(item.timeOrder)
                                }}><a style={{color:"black"}} href={"#"}>
                                    {item.dayOrder} {item.timeOrder}</a>
                                </td>
                                <td align={"center"}>{item.numberOrder}</td>
                                <td align={"center"}>{item.quantityOrder}</td>
                                <td>{(item.totalMoney).toLocaleString("vi-VN")} đ</td>
                            </tr>
                        ))}

                    </table>
                    <div className="d-flex justify-content-end">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <button className={`page-link ${page <= 0 ? "disabled" : ""}`}
                                            onClick={() => previousPage()}
                                    >Trước
                                    </button>
                                </li>
                                <li className="page-item">
                                    <div className="page-link "
                                    >{page + 1} / {totalPage}</div>
                                </li>
                                <li className="page-item">
                                    <button className={`page-link ${page >= totalPage - 1 ? "disabled" : ""}`}
                                            onClick={() => nextPage()}>Sau
                                    </button>

                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            }


        </>
    );
}
export default HistoryOrder;