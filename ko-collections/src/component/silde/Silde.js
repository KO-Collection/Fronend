import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from 'swiper/modules';

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const Silde = () => {
    return (
        <>
            <div className="main-banner" id="top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-content">
                                <div className="thumb">
                                    <div className="inner-content ">
                                        <h4>We Are KO Collection</h4>
                                        <span>Cam kết mang đến sự hài lòng và những sản phẩm mới nhất đến với khách hàng.</span>
                                        <div className="main-border-button">
                                            <a href="#">Xem thêm !</a>
                                        </div>
                                    </div>
                                    <img style={{height: "600px"}}
                                         src="https://kenh14cdn.com/203336854389633024/2023/3/21/photo-9-16793746334661354079248.jpg"
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <Swiper
                                                spaceBetween={30}
                                                centeredSlides={true}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                // pagination={{
                                                //     clickable: true,
                                                // }}
                                                navigation={true}
                                                modules={[Autoplay, Pagination, Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <div className="thumb ">
                                                        <div className="inner-content">
                                                        </div>
                                                        <div className="hover-content ">
                                                            <div className="inner">
                                                                <h4>Sản phẩm mới</h4>
                                                                <p>
                                                                </p>
                                                                <div className="main-border-button">
                                                                    <a href="#">Xem ngay</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <img style={{height: "287px"}}
                                                             src="https://theme.hstatic.net/200000182297/1000887316/14/home_new_banner_2.jpg?v=894"/>

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="thumb ">
                                                        <div className="inner-content">
                                                        </div>
                                                        <div className="hover-content ">
                                                            <div className="inner">
                                                                <h4>Sản phẩm mới</h4>
                                                                <p>
                                                                </p>
                                                                <div className="main-border-button">
                                                                    <a href="#">Xem ngay</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <img style={{height: "287px"}}
                                                             src="https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/bltc729e0d1dc8b1e06/63cad16d446ecf3973074c8a/Untitled_design_-_2023-01-20T113740.994.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale"/>

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="thumb ">
                                                        <div className="inner-content">
                                                        </div>
                                                        <div className="hover-content ">
                                                            <div className="inner">
                                                                <h4>Sản phẩm mới</h4>
                                                                <p>
                                                                </p>
                                                                <div className="main-border-button">
                                                                    <a href="#">Xem ngay</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <img style={{height: "287px"}} src="https://www.acfc.com.vn/acfc_wp/wp-content/uploads/2021/09/phong-cach-street-style-1.jpg"/>

                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <Swiper
                                                spaceBetween={30}
                                                centeredSlides={true}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                navigation={true}
                                                modules={[Autoplay, Pagination, Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                            <div className="thumb">
                                                <div className="inner-content">
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Sản phẩm nổi bật</h4>
                                                        <p>
                                                        </p>
                                                        <div className="main-border-button">
                                                            <a href="#">Xem ngay</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img style={{height: "287px"}}
                                                     src="https://theme.hstatic.net/200000182297/1000887316/14/home_new_banner_1.jpg?v=894"/>
                                            </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="thumb">
                                                        <div className="inner-content">
                                                        </div>
                                                        <div className="hover-content">
                                                            <div className="inner">
                                                                <h4>Sản phẩm nổi bật</h4>
                                                                <p>
                                                                </p>
                                                                <div className="main-border-button">
                                                                    <a href="#">Xem ngay</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img style={{height: "287px"}}
                                                             src="https://file.hstatic.net/1000184601/article/phoi-do-style-han-quoc-nu_0758ce94213f4c1a81a00119064e08f9.jpg"/>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Sản phẩm</h4>
                                                        <p>

                                                        </p>
                                                        <div className="main-border-button">
                                                            <a href="#">Xem ngay</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img style={{height: "287px"}}
                                                     src="https://alexa.vn/wp-content/uploads/2022/04/thoi-trang-cong-so.jpg"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Xu hướng</h4>
                                                        <p>

                                                        </p>
                                                        <div className="main-border-button">
                                                            <a href="#">Xem ngay</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img style={{height: "287px"}}
                                                     src="https://thieuhoa.com.vn/wp-content/uploads/2023/03/TvbJDPkrRIPKeRzgSbcz9UlnRZZxSbHlTGFnoSWw.webp"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Silde;
