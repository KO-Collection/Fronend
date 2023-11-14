import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {createSvgIcon} from "@mui/material/utils";
import {getSearchHome} from "../../service/HomeService";
import Swal from "sweetalert2";

const SearchHome = () => {
    const [searchName, setSearchName] = useState("");
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState();
    const param = useParams();
    const getProductList = async (searchName,page) => {
        const result = await getSearchHome(searchName, page);
        console.log(result)
        if (result.status === 200) {
            setProducts(result.data.content);
            setTotalPage(result.data.totalPages);
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
        document.title = 'Ko Collection - Tìm kiếm sản phẩm'
    }, [])
    useEffect(() => {
        setSearchName(param.search);
    }, [param])
    useEffect(() => {
        getProductList(param.search,page);
    }, [page])
    useEffect(() => {
        // setPage(0);
        getProductList(param.search,0);
        setPage(0);
    }, [param])
    const PlusIcon = createSvgIcon(
        // credit: plus icon from https://heroicons.com/
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>,
        'Plus',
    );
    return (
        <>
            <Header/>
            {products ?
                <div className="container-lg">
                <section className="section" id="products">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h2>Kết quả tìm kiếm: </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="row col-12">
                            {products.length > 0 ? products.map((item) => {
                                return (
                                    <div className="col-lg-3">
                                        <div className="item mx-auto" style={{wight: "80%"}}>
                                            <div className="thumb">
                                                <div className="hover-content">
                                                    <ul>
                                                        <li>
                                                            <Link to="/detail">
                                                                <i className="fa fa-eye"/>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <a href="single-product.html">
                                                                <i className="fa fa-star"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <Link to="/cart">
                                                                <i className="fa fa-shopping-cart"/>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <img
                                                    src={item.img}
                                                    alt=""/>
                                            </div>
                                            <div className="down-content">
                                                <h4>{item.nameProduct}</h4>
                                                <span>{item.price}</span>
                                                <ul className="stars">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : <h1 className='no-products-found'>Không có sản phẩm nào phù hợp</h1>}

                        </div>
                    </div>
                </section>
                <div>
                    <ul className="wrapper">
                        <li className="icon black" onClick={()=> previousPage()}>
                            <span className="tooltip">Trang trước</span>
                            <span>
      <svg
          viewBox="0 0 16 16"
          className="bi bi-chevron-double-left"
          fill="currentColor"
          height={16}
          width={16}
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            fillRule="evenodd"
        />
        <path
            d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            fillRule="evenodd"
        />
      </svg>
    </span>
                        </li>
                        <li className="icon black" >
                            <span className="tooltip">Trang hiện tại</span>
                            <span>{page+1}
    </span>
                        </li>
                        <li className="icon black">
                            <span className="tooltip">Tổng số trang</span>
                            <span>{totalPage}
    </span>
                        </li>
                        <li className="icon black" onClick={()=> nextPage()}>
                            <span className="tooltip">Trang sau</span>
                            <span>
      <svg
          viewBox="0 0 16 16"
          className="bi bi-chevron-double-right"
          fill="currentColor"
          height={16}
          width={16}
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
            fillRule="evenodd"
        />
        <path
            d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
            fillRule="evenodd"
        />
      </svg>
    </span>
                        </li>
                    </ul>

                </div>
            </div> :<div>Không tìm thấy sản phẩm</div> }
            <Footer/>
        </>
    );
}
export default SearchHome;