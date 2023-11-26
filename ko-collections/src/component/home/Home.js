import React, {useEffect, useState} from 'react';
import '../../assets/css/templatemo-hexashop.css';
import '../../assets/css/owl-carousel.css';
import './product_card.css';
import './page.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {Link, useNavigate, useParams} from "react-router-dom";
import {FreeMode, Pagination, Autoplay,Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Header from "../header/Header";
import Silde from "../silde/Silde";
import Footer from "../footer/Footer";
import {getBestSeller, getProductNew} from "../../service/HomeService";
import * as appUserService from "../../service/AutheService";
import {toast} from "react-toastify";
import {createCart, getAllCartService} from "../../service/CartService";
import {getSizeProduct} from "../../service/ProductService";
import ProductCard from "./ProductCard";

const Home = () => {
    const navigate = useNavigate();
    const [bestsellers, setBestsellers] = useState([]);
    const [newProduct, setNewProduct] = useState([]);
    const [userName, setUsername] = useState("");
    const [cartUpdated, setCartUpdated] = useState(false);
    const param = useParams();
    const getBestsellersOnHome = async (id) => {
        if (id === 1 ){
            setCartUpdated(prevState => !prevState);
        }
        const data = await getBestSeller();
        setBestsellers(data);
        setCartUpdated(prevState => !prevState);
    }
    const getNewProductOnHome = async () => {
        const data = await getProductNew();
        setNewProduct(data);
        setCartUpdated(prevState => !prevState);
    }
    const getProductDetail = (id) => {
        navigate(`/detail/${id}`);
    }
    const getSize = async (value) => {
      const result = await getSizeProduct(value);
      return result.data;
    }
    const handleDataByLoadCart = (data) => {
        setCartUpdated(prevState => !prevState);
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
    }, [param.id])
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
                                                            // centeredSlides={true}
                                                            // freeMode={true}
                                                            autoplay={{
                                                                delay: 5000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            pagination={{
                                                                clickable: true,
                                                            }}
                                                            navigation={true}
                                                            modules={[FreeMode, Pagination, Autoplay,Navigation]}
                                                            className="mySwiper"
                                                        >
                                                            {newProduct && newProduct.map((item) => {
                                                                return (<SwiperSlide>
                                                                       <ProductCard product={item} handleData={handleDataByLoadCart} />
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
                                            <div className="col-lg-12" >
                                                <div className="women-item-carousel">
                                                    <div className="owl-women-item owl-carousel d-flex">

                                                        <Swiper
                                                            slidesPerView={3}
                                                            spaceBetween={30}
                                                            // centeredSlides={true}
                                                            // freeMode={true}
                                                            autoplay={{
                                                                delay: 5000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            pagination={{
                                                                clickable: true,
                                                            }}
                                                            navigation={true}
                                                            modules={[FreeMode, Pagination, Autoplay,Navigation]}
                                                            className="mySwiper"
                                                        >
                                                            {bestsellers && bestsellers.map((item) => {
                                                                return (<SwiperSlide>
                                                                        <ProductCard product={item} handleData={handleDataByLoadCart} />
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
