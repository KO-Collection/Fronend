import React, {useEffect, useState} from 'react';
import * as appUserService from "../../service/AutheService";
import {getAllOrder, getAllOrderDetail} from "../../service/OrderService";

const ModalDetailOrder = ({dayOrder}) => {
    const [page,setPage]=useState(0);
    const [totalPage, setTotalPage] = useState();
    const [listOrderDetail,setListOrderDetail] = useState([]);
    const getHistoryOrderDetail = async (page,time) => {
        const response = appUserService.infoAppUserByJwtToken();
        const user = response.sub;
        const result = await getAllOrderDetail(user,page,time);
        if (result?.status === 200) {
            // setTotalPage(result?.data.content);
            setTotalPage(result?.data.totalPages);
            setListOrderDetail(result.data.content)
        } else {
            listOrderDetail([]);
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
        getHistoryOrderDetail(page,dayOrder);
        console.log(dayOrder);
    }, [page,dayOrder])

    return (
       <>
               <div className="d-flex justify-content-center">
                   <h2>Chi tiết lịch sử mua hàng {dayOrder}</h2>
               </div>
               <table className="table table-striped-columns" style={{width:"800px"}}>
                   <tr>
                       <th>STT</th>
                       <th>Giờ</th>
                       <th style={{marginLeft:"10px"}}>Tên sản phẩm</th>
                       <th style={{marginLeft:"10px"}}>Kích cỡ</th>
                       <th style={{marginLeft:"10px"}}>Màu sắc</th>
                       <th style={{marginLeft:"10px"}}>Số lượng mua</th>
                       <th>Đã chi</th>
                   </tr>
                   {listOrderDetail.map((item, index) => (
                       <tr>
                           <td> {(index + 1) + page * 5}</td>
                           <td >{item.timeOrder}</td>
                           <td >{item.nameProduct}</td>
                           <td >{item.nameSize}</td>
                           <td >{item.color}</td>
                           <td >{item.quantity}</td>
                           <td>{(item.totalMoney).toLocaleString("vi-VN")} đ</td>
                       </tr>
                   ))}

               </table>
               <div className="d-flex justify-content-end">
                   <nav aria-label="Page navigation example">
                       <ul className="pagination">
                           <li className="page-item">
                               <button className={`page-link ${page <= 0 ? "disabled" : ""}`} onClick={() => previousPage()}
                               >Trước
                               </button>
                           </li>
                           <li className="page-item">
                               <div className="page-link "
                               >{page + 1} / {totalPage}</div>
                           </li>
                           <li className="page-item">
                               <button className={`page-link ${page >= totalPage - 1 ? "disabled" : ""}`} onClick={() => nextPage()} >Sau
                               </button>

                           </li>
                       </ul>
                   </nav>
               </div>
    </>
    );
}
export default ModalDetailOrder;