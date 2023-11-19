import React, {useEffect, useState} from 'react';
import '../../assets/css/templatemo-hexashop.css';
import '../../assets/css/owl-carousel.css';
import './product_card.css';
import './page.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {Link, useNavigate} from "react-router-dom";
import {FreeMode, Pagination, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Header from "../header/Header";
import Silde from "../silde/Silde";
import Footer from "../footer/Footer";
import {getBestSeller, getProductNew} from "../../service/HomeService";
import * as appUserService from "../../service/AutheService";
import {toast} from "react-toastify";
import {createCart, getAllCartService} from "../../service/CartService";

const Home = () => {
    const navigate = useNavigate();
    const [bestsellers, setBestsellers] = useState([]);
    const [newProduct, setNewProduct] = useState([]);
    const [userName, setUsername] = useState("");
    const [cartUpdated, setCartUpdated] = useState(false);

    const getBestsellersOnHome = async () => {
        const data = await getBestSeller();
        setBestsellers(data);
    }
    const getNewProductOnHome = async () => {
        const data = await getProductNew();
        setNewProduct(data);
    }
    const getProductDetail = (id) => {
        navigate(`/detail/${id}`);
    }
    const addCart = async (id) => {
        const response = appUserService.infoAppUserByJwtToken();
        if (response === undefined) {
            navigate("/login");
        } else {
            const name = response.sub;
            const result = await createCart(name, id, 1);
            toast.success(result.data);
        }
        setCartUpdated(prevState => !prevState);
    }
    useEffect(() => {
        getBestsellersOnHome();
        getNewProductOnHome();
    }, [])
    useEffect(() => {
        document.title = 'Ko Collection - Trang chủ'
    }, [])

    return (
        <>
            <Header cartUpdated={cartUpdated} />
            <Silde/>
            <div name="products">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="women-item-carousel">
                                <section className="section" id="women">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="section-heading">
                                                    <h2>SẢN PHẨM MỚI</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="women-item-carousel">
                                                    <div className="owl-women-item owl-carousel d-flex">

                                                        <Swiper
                                                            slidesPerView={3}
                                                            spaceBetween={30}
                                                            freeMode={true}
                                                            autoplay={{
                                                                delay: 3000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            pagination={{
                                                                clickable: true,
                                                            }}
                                                            modules={[FreeMode, Pagination, Autoplay]}
                                                            className="mySwiper"
                                                        >
                                                            {newProduct && newProduct.map((item) => {
                                                                return (<SwiperSlide>
                                                                        <div className="item">
                                                                            <div className="thumb">
                                                                                <div className="hover-content">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <a onClick={() => getProductDetail(item.idProduct)}
                                                                                            >
                                                                                                <i className="fa fa-eye"/>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                onClick={() => addCart(item.idProduct)}
                                                                                            >
                                                                                                <i className="fa fa-shopping-cart"/>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <img style={{
                                                                                    height: "520px",
                                                                                    wight: "80%"
                                                                                }}
                                                                                     srcSet={item.img}
                                                                                     alt=""/>
                                                                            </div>
                                                                            <div className="down-content">
                                                                                <h4>{item.nameProduct}</h4>
                                                                                <span>{item.price}</span>
                                                                            </div>
                                                                        </div>
                                                                    </SwiperSlide>
                                                                )
                                                            })}
                                                        </Swiper>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div name="products">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="women-item-carousel">
                                <section className="section" id="women">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="section-heading">
                                                    <h2>SẢN PHẨM BÁN CHẠY</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="women-item-carousel">
                                                    <div className="owl-women-item owl-carousel d-flex">

                                                        <Swiper
                                                            slidesPerView={3}
                                                            spaceBetween={30}
                                                            freeMode={true}
                                                            autoplay={{
                                                                delay: 3000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            pagination={{
                                                                clickable: true,
                                                            }}
                                                            modules={[FreeMode, Pagination, Autoplay]}
                                                            className="mySwiper"
                                                        >
                                                            {bestsellers && bestsellers.map((item) => {
                                                                return (<SwiperSlide>
                                                                        <div className="item">
                                                                            <div className="thumb">
                                                                                <div className="hover-content">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <Link to="/detail">
                                                                                                <i className="fa fa-eye"/>
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                onClick={() => addCart(item.idProduct)}
                                                                                            >
                                                                                                <i className="fa fa-shopping-cart"/>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <img style={{
                                                                                    height: "520px",
                                                                                    wight: "80%"
                                                                                }}
                                                                                     srcSet={item.img}
                                                                                     alt=""/>
                                                                            </div>
                                                                            <div className="down-content">
                                                                                <h4>{item.nameProduct}</h4>
                                                                                <span>{item.price}</span>
                                                                            </div>
                                                                        </div>
                                                                    </SwiperSlide>
                                                                )
                                                            })}
                                                        </Swiper>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    );
}
export default Home;
