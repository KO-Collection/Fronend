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
import {getAllColorProduct, getAllProduct, getAllSizeProduct, getAllTypeProduct} from "../../service/ProductService";
import ProductCard from "../home/ProductCard";

const Product = () => {
    const [color, setColor] = useState([]);
    const [chooseColor, setChooseColor] = useState([]);
    const [time, setTime] = useState("");
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(20000000);
    const [product, setProduct] = useState([]);
    // const [colorChoose, setColorChoose] = useState([]);
    const [size, setSize] = useState([]);
    const [sizeChoose, setSizeChoose] = useState();
    const [type, setType] = useState([]);
    const [typeChoose, setTypeChoose] = useState([]);
    const [cartUpdated, setCartUpdated] = useState(false);

    const getProductList = async (time, color, min, max, type) => {
        const result = await getAllProduct(time, color, min, max, type);
        if (result.status === 200) {
            setProduct(result.data);
        }
        else if (result.status === 204){
            setProduct([]);
        }
    }

    const handleDataByLoadCart = (data) => {
        setCartUpdated(prevState => !prevState);
    }
    const getColorList = async () => {
        const result = await getAllColorProduct();
        setColor(result.data);
    }
    const getSizeList = async () => {
        const result = await getAllSizeProduct();
        setSize(result.data);
    }
    const getTypeList = async () => {
        const result = await getAllTypeProduct();
        setType(result.data);
    }
    const getPrice = async (min,max) => {
        setMin(min);
        setMax(max);
    }

    const handleCheckboxClick = (itemName) => {
        setTypeChoose(prevTypeChoose => {
            if (prevTypeChoose.includes(itemName)) {
                return prevTypeChoose.filter(type => type !== itemName);
            } else {
                return [...prevTypeChoose, itemName];
            }
        });

    };
    const handleCheckboxClickColor = (itemName) => {
        setChooseColor(prevTypeChoose => {
            if (prevTypeChoose.includes(itemName)) {
                return prevTypeChoose.filter(type => type !== itemName);
            } else {
                return [...prevTypeChoose, itemName];
            }
        });

    };

    useEffect(() => {
        getTypeList();
        getColorList();
        getSizeList();
        getProductList(time, chooseColor, min, max, typeChoose);
    }, [time,min,max,typeChoose,chooseColor])

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
            <Header cartUpdated={cartUpdated}/>
            <Advertisement/>
            {product ?
                <div className="ml-3 mr-3">
                    <section className="section" id="products">
                        <div className="container mb-5">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-heading">
                                        <h2>Danh sách sản phẩm</h2>
                                        <span>Sự hài lòng của bạn là niềm tự của chúng tôi </span>
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
                                                {type && type.map((item) => (
                                                    <div id="checklist">
                                                        <input defaultChecked="" defaultValue={1} name="r"
                                                               type="checkbox"
                                                               id={item.nameType}
                                                               onClick={() => handleCheckboxClick(item.nameType)}
                                                        />
                                                        <label htmlFor={item.nameType}>{item.nameType}</label>
                                                    </div>
                                                ))}

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
                                                    <div id="checklist">
                                                        <input defaultChecked="" defaultValue={1} name="r"
                                                               type="checkbox"
                                                               id={item.nameSize}/>
                                                        <label htmlFor={item.nameSize}>{item.nameSize}</label>
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
                                                    <input className="radio-input" name="radio-group" id="800" type="radio" onClick={()=> getPrice(0,800000)} />
                                                    <label className="radio-label" htmlFor="800">
                                                        <span className="radio-inner-circle" />
                                                        0-800.000
                                                    </label>
                                                    <input className="radio-input" name="radio-group" id="900" type="radio" onClick={()=> getPrice(800000,1000000)}/>
                                                    <label className="radio-label" htmlFor="900">
                                                        <span className="radio-inner-circle" />
                                                        800.000 - 1.000.000
                                                    </label>
                                                    <input className="radio-input" name="radio-group" id="1000.0" type="radio" onClick={()=> getPrice(1000000,1500000)}/>
                                                    <label className="radio-label" htmlFor="1000.0">
                                                        <span className="radio-inner-circle" />
                                                        Trên 1000000
                                                    </label>

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
                                                {/*<div className="d-flex">*/}
                                                {/*    <div style={{*/}
                                                {/*        width: "37.5px",*/}
                                                {/*        height: "37.5px",*/}
                                                {/*        background: "red",*/}
                                                {/*        borderRadius: "50%"*/}
                                                {/*    }}>*/}
                                                {/*    </div>*/}

                                                {/*</div>*/}
                                                {color && color.map((item) => (
                                                    <div id="checklist">
                                                        <input defaultChecked=""  name="r"
                                                               type="checkbox"
                                                               id={item.nameColor}
                                                               onClick={() => handleCheckboxClickColor(item.nameColor)}
                                                        />
                                                        <label htmlFor={item.nameColor}>{item.nameColor}</label>
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
                                            <Typography>Xu hướng</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <div className="radio-group">
                                                    <input className="radio-input" name="radio-group" id="radio1" type="radio" onClick={()=> setTime("2020")} />
                                                    <label className="radio-label" htmlFor="radio1">
                                                        <span className="radio-inner-circle" />
                                                        2020
                                                    </label>
                                                    <input className="radio-input" name="radio-group" id="radio2" type="radio" onClick={()=> setTime("2021")}/>
                                                    <label className="radio-label" htmlFor="radio2">
                                                        <span className="radio-inner-circle" />
                                                        2021
                                                    </label>
                                                    <input className="radio-input" name="radio-group" id="radio3" type="radio" onClick={()=> setTime("2022")}/>
                                                    <label className="radio-label" htmlFor="radio3">
                                                        <span className="radio-inner-circle" />
                                                        2022
                                                    </label>
                                                    <input className="radio-input" name="radio-group" id="radio4" type="radio" onClick={()=> setTime("2023")} />
                                                    <label className="radio-label" htmlFor="radio4">
                                                        <span className="radio-inner-circle" />
                                                        2023
                                                    </label>
                                                </div>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                            <div className="row col-9">
                                {product.length > 0 ? product.map((item) => {
                                    return (
                                        <div className="col-4">
                                            <ProductCard product={item} handleData={handleDataByLoadCart}/>
                                        </div>
                                    )
                                }) : <h1 className='no-products-found'>Không có sản phẩm nào phù hợp</h1>}
                            </div>
                        </div>
                    </section>

                </div> : <div>Không tìm thấy sản phẩm</div>}
            <Footer/>
        </>
    );
}
export default Product;