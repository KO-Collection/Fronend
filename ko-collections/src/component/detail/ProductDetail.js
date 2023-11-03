import React from 'react';
import Header from "../header/Header";
import Advertisement from "../silde/Advertisement";

function ProductDetail() {
    return (
        <>
            <Header/>
         <Advertisement/>
        <section className="section" id="product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="left-images">
                            <img  src="https://anh.24h.com.vn/upload/3-2016/images/2016-09-30/1475226698-thuong-hieu-hk-fashion-huong-toi-nu-cong-so-viet-hk-fashion--1-.jpg" alt="" />
                            {/*<img src="assets/images/single-product-02.jpg" alt="" />*/}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="right-content">
                            <h4>New Green Jacket</h4>
                            <span className="price">$75.00</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                            <div className="quote">
                                <i className="fa fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                            </div>
                            <div className="quantity-content">
                                <div className="left-content">
                                    <h6>No. of Orders</h6>
                                </div>
                                <div className="right-content">
                                    <div className="quantity buttons_added">
                                        <input type="button" value="-" className="minus" />
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
                                        <input type="button" value="+" className="plus" />
                                    </div>
                                </div>
                            </div>
                            <div className="total">
                                <h4>Total: $210.00</h4>
                                <div className="main-border-button">
                                    <a href="#">Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default ProductDetail;
