import React, {useEffect, useState} from "react";
import Header from "../header/Header";
import Advertisement from "../silde/Advertisement";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {createSvgIcon} from '@mui/material/utils';
import Footer from "../footer/Footer";
import {Link, useParams} from "react-router-dom";
import './productSearch.css';
import {getSearchHome} from "../../service/HomeService";
import {getAllColorProduct, getAllSizeProduct, getAllTypeProduct} from "../../service/ProductService";

const Product = () => {
    const [color, setColor] = useState([]);
    const [colorChoose, setColorChoose] = useState();
    const [size, setSize] = useState([]);
    const [sizeChoose, setSizeChoose] = useState();
    const [type, setType] = useState([]);
    const [typeChoose, setTypeChoose] = useState();
    const getColorList = async () => {
        const result = await getAllColorProduct();
        setColor(result.data);

        for (let i = 0; i < result.data.length; i++) {

        }
    }
    const getSizeList = async () => {
        const result = await getAllSizeProduct();
        setSize(result.data);
    }
    const getTypeList = async () => {
        const result = await getAllTypeProduct();
        setType(result.data);
    }
    useEffect(() => {
        getTypeList();
        getColorList();
        getSizeList();
    }, [])

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
                                        <Typography>Loại sản phẩm</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div className="radio-group">
                                                {type && type.map((item) => (
                                                    <div key={item}>
                                                    </div>
                                                ))}


                                                {/*  */}
                                                {/*<input className="radio-input" name="radio-group" id="radio2"*/}
                                                {/*       type="radio"/>*/}
                                                {/*<label className="radio-label" htmlFor="radio2">*/}
                                                {/*    <span className="radio-inner-circle"/>*/}
                                                {/*    500k- 800k*/}
                                                {/*</label>*/}
                                                {/*<input className="radio-input" name="radio-group" id="radio3"*/}
                                                {/*       type="radio"/>*/}
                                                {/*<label className="radio-label" htmlFor="radio3">*/}
                                                {/*    <span className="radio-inner-circle"/>*/}
                                                {/*    Trên 800k*/}
                                                {/*</label>*/}
                                            </div>

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<PlusIcon/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Kích cỡ</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {size && size.map((item) => (
                                                <div key={item}>

                                                </div>
                                            ))}
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
                                            <div className="radio-group">
                                            </div>
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
                                            <div className="d-flex">
                                                <div style={{
                                                    width: "37.5px",
                                                    height: "37.5px",
                                                    background: "red",
                                                    borderRadius: "50%"
                                                }}>
                                                </div>

                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                        </div>
                        <div className="row col-9">
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
                        </div>
                    </div>
                </section>

            </div>
            <Footer/>
        </>
    );
}
export default Product;