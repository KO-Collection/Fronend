import React from 'react';
import '../../assets/css/templatemo-hexashop.css';
import '../../assets/css/owl-carousel.css';
import './product_card.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {FreeMode, Pagination, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Header from "../header/Header";
import Silde from "../silde/Silde";
import { Link, Element } from 'react-scroll';
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <>
            {/*<div className="header" >*/}
            {/*    <div className="scrolling-text">*/}
            {/*        This is the scrolling text in the header.*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Header/>
            <Silde/>

            <div name="products">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="women-item-carousel">
                                {/* Your Swiper component */}
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
                                                                delay: 2000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            pagination={{
                                                                clickable: true,
                                                            }}
                                                            modules={[FreeMode, Pagination, Autoplay]}
                                                            className="mySwiper"
                                                        >
                                                            <SwiperSlide>
                                                                <div className="item">
                                                                    <div className="thumb">
                                                                        <div className="hover-content">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-eye"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-star"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-shopping-cart"/>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <img style={{height: "520px", wight: "80%"}}
                                                                             src="https://anh.24h.com.vn/upload/3-2016/images/2016-09-30/1475226698-thuong-hieu-hk-fashion-huong-toi-nu-cong-so-viet-hk-fashion--1-.jpg"
                                                                             alt=""/>
                                                                    </div>
                                                                    <div className="down-content">
                                                                        <h4>New Green Jacket</h4>
                                                                        <span>$75.00</span>
                                                                        <ul className="stars">
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className="item">
                                                                    <div className="thumb">
                                                                        <div className="hover-content">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-eye"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-star"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-shopping-cart"/>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <img style={{height: "520px", wight: "80%"}}
                                                                             src="https://product.hstatic.net/200000182297/product/3_9f907c8afd6b409aac5a8cfcba158728_1024x1024.jpg"
                                                                             alt=""/>
                                                                    </div>
                                                                    <div className="down-content">
                                                                        <h4>New Green Jacket</h4>
                                                                        <span>$75.00</span>
                                                                        <ul className="stars">
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className="item">
                                                                    <div className="thumb">
                                                                        <div className="hover-content">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-eye"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-star"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-shopping-cart"/>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <img style={{height: "520px", wight: "80%"}}
                                                                             src="https://product.hstatic.net/200000182297/product/ak198821312352110401p999dt_q198921722322110401p899dt_3__0d87e33192ff4c73ba52cc04d950d24c_1024x1024.jpg"
                                                                             alt=""/>
                                                                    </div>
                                                                    <div className="down-content">
                                                                        <h4>New Green Jacket</h4>
                                                                        <span>$75.00</span>
                                                                        <ul className="stars">
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className="item">
                                                                    <div className="thumb">
                                                                        <div className="hover-content">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-eye"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-star"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-shopping-cart"/>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <img style={{height: "520px", wight: "80%"}}
                                                                             src="https://product.hstatic.net/200000182297/product/3_2d827e79df734a30887fb1aaaad71685_1024x1024.jpg"
                                                                             alt=""/>
                                                                    </div>
                                                                    <div className="down-content">
                                                                        <h4>New Green Jacket</h4>
                                                                        <span>$75.00</span>
                                                                        <ul className="stars">
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className="item">
                                                                    <div className="thumb">
                                                                        <div className="hover-content">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-eye"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-star"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-shopping-cart"/>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <img style={{height: "520px", wight: "80%"}}
                                                                             src="https://anh.24h.com.vn/upload/3-2016/images/2016-09-30/1475226698-thuong-hieu-hk-fashion-huong-toi-nu-cong-so-viet-hk-fashion--1-.jpg"
                                                                             alt=""/>
                                                                    </div>
                                                                    <div className="down-content">
                                                                        <h4>New Green Jacket</h4>
                                                                        <span>$75.00</span>
                                                                        <ul className="stars">
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>

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
                                                                delay: 2000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            pagination={{
                                                                clickable: true,
                                                            }}
                                                            modules={[FreeMode, Pagination, Autoplay]}
                                                            className="mySwiper"
                                                        >
                                                            <SwiperSlide>
                                                                <div className="item">
                                                                    <div className="thumb">
                                                                        <div className="hover-content">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-eye"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-star"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-shopping-cart"/>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <img style={{height: "520px", wight: "80%"}}
                                                                             src="https://anh.24h.com.vn/upload/3-2016/images/2016-09-30/1475226698-thuong-hieu-hk-fashion-huong-toi-nu-cong-so-viet-hk-fashion--1-.jpg"
                                                                             alt=""/>
                                                                    </div>
                                                                    <div className="down-content">
                                                                        <h4>New Green Jacket</h4>
                                                                        <span>$75.00</span>
                                                                        <ul className="stars">
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className="item">
                                                                    <div className="thumb">
                                                                        <div className="hover-content">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-eye"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-star"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-shopping-cart"/>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <img style={{height: "520px", wight: "80%"}}
                                                                             src="https://product.hstatic.net/200000182297/product/3_9f907c8afd6b409aac5a8cfcba158728_1024x1024.jpg"
                                                                             alt=""/>
                                                                    </div>
                                                                    <div className="down-content">
                                                                        <h4>New Green Jacket</h4>
                                                                        <span>$75.00</span>
                                                                        <ul className="stars">
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className="item">
                                                                    <div className="thumb">
                                                                        <div className="hover-content">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-eye"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-star"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-shopping-cart"/>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <img style={{height: "520px", wight: "80%"}}
                                                                             src="https://product.hstatic.net/200000182297/product/ak198821312352110401p999dt_q198921722322110401p899dt_3__0d87e33192ff4c73ba52cc04d950d24c_1024x1024.jpg"
                                                                             alt=""/>
                                                                    </div>
                                                                    <div className="down-content">
                                                                        <h4>New Green Jacket</h4>
                                                                        <span>$75.00</span>
                                                                        <ul className="stars">
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className="item">
                                                                    <div className="thumb">
                                                                        <div className="hover-content">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-eye"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-star"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-shopping-cart"/>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <img style={{height: "520px", wight: "80%"}}
                                                                             src="https://product.hstatic.net/200000182297/product/3_2d827e79df734a30887fb1aaaad71685_1024x1024.jpg"
                                                                             alt=""/>
                                                                    </div>
                                                                    <div className="down-content">
                                                                        <h4>New Green Jacket</h4>
                                                                        <span>$75.00</span>
                                                                        <ul className="stars">
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className="item">
                                                                    <div className="thumb">
                                                                        <div className="hover-content">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-eye"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-star"/>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">
                                                                                        <i className="fa fa-shopping-cart"/>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <img style={{height: "520px", wight: "80%"}}
                                                                             src="https://anh.24h.com.vn/upload/3-2016/images/2016-09-30/1475226698-thuong-hieu-hk-fashion-huong-toi-nu-cong-so-viet-hk-fashion--1-.jpg"
                                                                             alt=""/>
                                                                    </div>
                                                                    <div className="down-content">
                                                                        <h4>New Green Jacket</h4>
                                                                        <span>$75.00</span>
                                                                        <ul className="stars">
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa fa-star"/>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>

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
