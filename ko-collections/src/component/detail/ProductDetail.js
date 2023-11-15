import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
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
    useEffect(() => {
        getProduct(param.id);

    }, [param])
    return (
        <>
            <Header/>
            <Advertisement/>
            <section className="section" id="product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div >
                                {img.length > 0 ? img.map((item) => {
                                       return(
                                    <img style={{height:"200px",wight:"290px"}}
                                     src={item}
                                         onClick={()=>setImgChoose(item)}
                                     alt=""/>);
                                }) : <div></div>}

                                {/*<img src="assets/images/single-product-02.jpg" alt="" />*/}
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="left-images">
                                <img style={{height: "800px"}}
                                     defaultValue={img[0]}
                                     src={imgChoose}
                                     alt=""/>
                                {/*<img src="assets/images/single-product-02.jpg" alt="" />*/}
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="right-content">
                                <h4>{product.productName}</h4>
                                {/*<span className="price">{product.price}</span>*/}
                                <span>{product.descriptionProduct}</span>
                                <div className="quote">
                                    {/*<i className="fa fa-quote-left"></i>*/}
                                    <p>Màu sắc: {color}</p>
                                    {/*<p>Nguồn gốc: {product.origin.originName}</p>*/}
                                </div>
                                <div className="quantity-content">
                                    <div className="left-content">
                                        <h6>Chọn số lượng</h6>
                                    </div>
                                    <div className="right-content">
                                        <div className="quantity buttons_added">
                                            <input type="button" value="-" className="minus"/>
                                            <input
                                                type="number"
                                                step="1"
                                                min="1"
                                                max=""
                                                name="quantity"
                                                value="1"
                                                title="Qty"
                                                className="input-text qty text"
                                                size="4"
                                                pattern=""
                                                inputmode=""
                                            />
                                            <input type="button" value="+" className="plus"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="total">
                                    <h4>{product.price}</h4>
                                    <br/>
                                    <div className="main-border-button ">
                                        <a href="#">Thêm vào giỏ hàng</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default ProductDetail;
