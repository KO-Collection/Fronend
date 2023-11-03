import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header-area header-sticky shadow">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav ">
                            {/* ***** Logo Start ***** */}
                            <a href="index.html" className="logo" style={{ marginTop: "1%", color: "black" }}>
                               <h2 style={{color:"white",fontWeight:"bold"}}>KO Collection</h2>
                            </a>
                            <ul className="nav text-light" style={{marginTop:"1%"}}>
                                <li className="scroll-to-section">
                                    <a href="#top" className="active">
                                        Home
                                    </a>
                                </li>
                                <li className="scroll-to-section">
                                    <a href="#men">Sản phẩm mới</a>
                                </li>

                                <li className="submenu">
                                    <a href="javascript:;">Sản phẩm</a>
                                    <ul>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="products.html">Products</a>
                                        </li>
                                        <li>
                                            <a href="single-product.html">Single Product</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:;">Tìm kiếm</a>
                                    <ul>
                                        <li>
                                            <div className="d-flex" style={{wight:"100px"}}>
                                                <input className="form-control w-75"/>
                                                <button className="btn btn-outline-primary">Tìm</button>
                                            </div>

                                        </li>
                                    </ul>
                                </li>
                                <li className="scroll-to-section">
                                    <Link to="/login">Đăng nhập</Link>
                                </li>
                            </ul>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    );
};
export default Header;
