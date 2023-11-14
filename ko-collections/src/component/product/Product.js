import React, {useEffect,useState} from "react";
import Header from "../header/Header";
import Advertisement from "../silde/Advertisement";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {createSvgIcon} from '@mui/material/utils';
import Footer from "../footer/Footer";
import {Link, useParams} from "react-router-dom";
import {getSearchHome} from "../../service/HomeService";

const Product = () => {


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
            <Advertisement/>
            <div className="ml-3 mr-3">
                <section className="section" id="products">
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h2>Our Latest Products</h2>
                                    <span>Check out all of our products.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<PlusIcon/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Size</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<PlusIcon/>}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Giá</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<PlusIcon/>}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Màu sắc</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                        </div>
                        <div className="row col-9">
                            <div className="col-lg-4">
                                <div className="item mx-auto" style={{wight: "90%"}}>
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
                                            src="https://product.hstatic.net/1000184601/product/women_trang_dam_nu_hoa_nhi_summer_wdr_2034_couple_tx_f0cdfd8591e345ee800dd19b375fbf9b_2048x2048.jpg"
                                            alt=""/>
                                    </div>
                                    <div className="down-content">
                                        <h4>Classic Spring</h4>
                                        <span>$120.00</span>
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
                            </div>
                            <div className="col-lg-4">
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
                                            src="https://product.hstatic.net/1000184601/product/women_vang_dam_nu_hoa_nhi_summer_wdr_2034_couple_tx_06daa37863f0456eb007e6a2f1615dff_2048x2048.jpg"
                                            alt=""/>
                                    </div>
                                    <div className="down-content">
                                        <h4>Air Force 1 X</h4>
                                        <span>$90.00</span>
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
                            </div>
                            <div className="col-lg-4">
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
                                                    <a href="">
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
                                        <img style={{height: "438px"}}
                                             src="https://product.hstatic.net/1000184601/product/women_xanh-nhat_2_8e674079328c448b9c275017332217d0_2048x2048.jpg"
                                             alt=""/>
                                    </div>
                                    <div className="down-content">
                                        <h4>Love Nana ‘20</h4>
                                        <span>$150.00</span>
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
                            </div>
                            <div className="col-lg-4">
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
                                            src="https://product.hstatic.net/1000184601/product/women_xam-dom-melange__3__4bbad06f81404c51a0f86f81cf601458_2048x2048.jpg"
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
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer/>
        </>
    );
}
export default Product;