import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import './decription.css';
import {FreeMode, Pagination, Autoplay} from 'swiper/modules';
// Install modules
import Header from "../header/Header";
import Advertisement from "../silde/Advertisement";
import Footer from "../footer/Footer";
import {getImgProduct, getProductDetail} from "../../service/ProductService";
import {useParams} from "react-router-dom";

function ProductDetail() {
    const [product, setProduct] = useState({});
    const [color, setColor] = useState("");
    const [img, setImg] = useState([]);
    const [imgChoose, setImgChoose] = useState("");

    const param = useParams();
    const getProduct = async (id) => {
        const result = await getProductDetail(id);
        const resultImg = await getImgProduct(id);
        // setImgChoose(result.data.Array[0]);
        setImgChoose(
            resultImg.data[0]
        )
        setImg(resultImg.data);
        setProduct(result.data);
        setColor(result.data.colorProduct.colorName)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true, // Hiển thị slide trục dọc
        verticalSwiping: true, // Cho phép kéo slide theo trục dọc
    };
    useEffect(() => {
        getProduct(param.id);

    }, [param])
    return (
        <>
            <Header/>
            <Advertisement/>
            <div className="section mx-auto" style={{width: "90%"}} id="product">
                <div className="row mx-auto">
                    <div className="col-lg-3">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            direction="vertical"
                            pagination={{clickable: true}}
                            style={{height: '850px', marginLeft: "90px"}}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            navigation={{   // Thiết lập navigation
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"

                        >
                            {img && img.map((item) => {
                                return (
                                    <SwiperSlide>

                                        <img style={{height: "280px", width: "190px"}}
                                             src={item}
                                             onClick={() => setImgChoose(item)}
                                             alt=""/>
                                    </SwiperSlide>

                                )
                            })}
                        </Swiper>

                    </div>
                    <div className="col-lg-6">
                        <div className="">
                            <img style={{height: "850px",}}
                                 defaultValue={img[0]}
                                 src={imgChoose}
                                 alt=""/>
                            {/*<img src="assets/images/single-product-02.jpg" alt="" />*/}
                        </div>
                    </div>
                    <div className="col-lg-3">
                        {/*<div className="">*/}
                        {/*    <h3>Thông tin sản phẩm</h3>*/}
                        {/*    <div style={{marginTop: "10%"}}>*/}
                        {/*        <h5>Tên sản phẩm:</h5><span>{product.productName}</span>*/}
                        {/*        <h5>Mô tả:</h5>*/}
                        {/*        <span>{product.descriptionProduct}</span>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                        <div className="pack_card ">
                            <div className="banner">
                                <span className="banner_tag">Thông tin sản phẩm</span>
                            </div>
                            <div className="pack_name">{product.productName}</div>
                            {/*<p className="description">*/}
                            {/*    Avanced feaures for Individuals and organizations*/}
                            {/*</p>*/}
                            <div className="lists">
                                <div className="list">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        {product.descriptionProduct}
                                    </span>
                                </div>
                                <div className="list">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>10 GB bandwidth per month</span>
                                </div>
                                <div className="list">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>10.000 tasks per month</span>
                                </div>
                                <div className="list">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>Email support</span>
                                </div>
                                <div className="list">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>100 Webhooks</span>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="price_container">
                                    {/*<span className="devise"></span>*/}
                                    <span className="price">{product.price}</span>
                                    <span className="date">/VNĐ</span>
                                </div>
                                <button className="btn-drcrip">
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
                {/*</div>*/}
            </div>

            <Footer/>
        </>
    );
}

export default ProductDetail;
