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
import {getImgProduct, getProductDetail, getSizeProduct} from "../../service/ProductService";
import {useNavigate, useParams} from "react-router-dom";
import * as appUserService from "../../service/AutheService";
import {createCart} from "../../service/CartService";
import {toast} from "react-toastify";
import Swal from "sweetalert2";

function ProductDetail() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [color, setColor] = useState("");
    const [img, setImg] = useState([]);
    const [imgChoose, setImgChoose] = useState("");
    const [size, setSize] = useState([]);
    const [cartUpdated, setCartUpdated] = useState(false);

    const [sizePay, setSizePay] = useState({
        id: null,
        name: ""
    });
    const getSize = async (value) => {
        const result = await getSizeProduct(value);
        setSize(result.data);
    }
    const param = useParams();
    const getProduct = async (id) => {
        const result = await getProductDetail(id);
        const resultImg = await getImgProduct(id);
        setImgChoose(
            resultImg.data[0]
        )
        setImg(resultImg.data);
        setProduct({...result.data, price: result.data.price.toLocaleString("vi-VN")});
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
    const addCart = async (id) => {
        if (sizePay.id !== null){
            const response = appUserService.infoAppUserByJwtToken();
            if (response === undefined) {
                navigate("/login");
            } else {
                const name = response.sub;
                console.log(product)
                const result = await createCart(name, id, sizePay.id,1);
                toast.success(result.data);
            }
            setCartUpdated(prevState => !prevState);
        }else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Thao tác thất bại',
                text: 'Vui lòng chọn size trước khi bấm',
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    useEffect(() => {
        getProduct(param.id);
        getSize(param.id);
    }, [param])
    if (!product) {
        return null;
    }
    return (
        <>
            <Header cartUpdated={cartUpdated}/>
            <Advertisement/>
            <div className="section mx-auto" style={{width: "90%"}} id="product">
                <div className="row mx-auto">
                    <div className="col-lg-3 border-dark" >
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            direction="vertical"
                            pagination={{clickable: true}}
                            style={{height: '850px', marginLeft: "90px"}}
                            autoplay={{
                                delay: 3000,
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
                                        Mã sản phẩm: {product.code}
                                    </span>
                                </div>

                                <div style={{marginTop:"10%"}} className="list">
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
                                <div style={{marginTop:"10%"}} className="list">
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
                                    <span>Màu sắc: {color}</span>
                                </div>
                                <div style={{marginTop:"5%"}} className="list">
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
                                    </svg>{
                                    product.origin && <span>Xuất xứ: {product.origin.originName}</span>
                                }

                                </div>
                                <div style={{marginTop:"5%"}} className="list">
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
                                    {
                                        product.typeProduct &&
                                        <span>Loại sản phẩm: {product.typeProduct.typeProductName}</span>
                                    }

                                </div>
                                <div style={{marginTop:"5%"}} className="list">
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
                                    <span>Giá sản phẩm:</span>
                                </div>
                                <div style={{marginTop:"5%"}} className="list">
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
                                    <span>Kích thước sản phẩm:</span>
                                </div>

                                <div style={{marginTop:"5%"}} className="d-flex justify-content-center">
                                        {size.map((values, index) => (
                                            <button onClick={() => {
                                                if (sizePay.id === null || sizePay.id !== values?.id) {
                                                    setSizePay({
                                                        id: values?.id,
                                                        name: values?.name
                                                    });
                                                }
                                            }} key={index}
                                                    className={sizePay.id === values.id ? "btn btn-primary" : "btn btn-outline-primary"}
                                                    style={{marginRight: "3%"}}>{values.name}</button>
                                        ))}
                                </div>

                            </div>
                            <div className="bottom" style={{marginTop:"5%"}}>
                                <div className="price_container">
                                    {/*<span className="devise"></span>*/}
                                    <span className="price">{product.price}</span>
                                    <span className="date">/VNĐ</span>
                                </div>
                                <button className="btn-drcrip" onClick={()=> addCart(product.productId)}>
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
