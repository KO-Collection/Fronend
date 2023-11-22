import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as appUserService from "../../service/AutheService";
import {createCart} from "../../service/CartService";
import {toast} from "react-toastify";
import {getSizeProduct} from "../../service/ProductService";
import Swal from "sweetalert2";

const ProductCard = ({product, handleData}) => {
    const navigate = useNavigate();
    const [size, setSize] = useState([]);
    const [sizePay, setSizePay] = useState({
        id: null,
        name: ""
    });
    const getProductDetail = (id) => {
        navigate(`/detail/${id}`);
    }
    const getSize = async (value) => {
        const result = await getSizeProduct(value);
        console.log(result);
        setSize(result.data);
    }
    const addCart = async (id) => {
        if (sizePay.id !== null){
            const response = appUserService.infoAppUserByJwtToken();
            if (response === undefined) {
                navigate("/login");
            } else {
                const name = response.sub;
                const result = await createCart(name, id, sizePay.id,1);
                toast.success(result.data);
            }
            handleData(true);
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
        getSize(product.idProduct);
    }, [])
    return (
        <>
            <div className="item">
                <div className="thumb">
                    <div className="hover-content">
                        <ul>
                            <li>
                                <a  onClick={() => getProductDetail(product.idProduct)}>
                                    <i className="fa fa-eye"/>
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => addCart(product.idProduct)}
                                >
                                    <i className="fa fa-shopping-cart"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img style={{
                        height: "520px",
                        wight: "80%"
                    }}
                         srcSet={product.img}
                         alt=""/>
                </div>
                <div className="down-content">
                    <h4>{product.nameProduct}</h4>
                    <div className="d-flex justify-content-center">
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
                    <div>{(product.price).toLocaleString("vi-VN")} đ</div>
                </div>
            </div>

        </>
    );
}
export default ProductCard;