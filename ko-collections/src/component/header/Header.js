import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './logo_ko.css';
import {TextField} from "@mui/material";
import './modal_search.css'
import * as appUserService from '../../service/AutheService';
const Header = () => {
    const [show, setShow] = useState(false);
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [userName, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getUsername = async () => {
        const response = await appUserService.infoAppUserByJwtToken();
        setUsername(response);
    };
    return (
        <>
            <header className="header-area header-sticky shadow">
                <div className="ml-5 mr-3" >
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav ">
                                {/*<Link to="/home" className="logo" style={{marginTop: "1%", color: "black"}}>*/}
                                {/*    <h2 style={{color: "white", fontWeight: "bold"}}>KO Collection</h2>*/}
                                {/*</Link>*/}
                                <Link className="fancy"  to="/home">
                                    <span className="top-key"></span>
                                    <span className="text">KO Collection</span>
                                    <span className="bottom-key-1"></span>
                                    <span className="bottom-key-2"></span>
                                </Link>
                                <ul className="nav text-light" style={{marginTop: "1%"}}>
                                    <li className="scroll-to-section">
                                        <Link to="/home" className="active">
                                            Trang chủ
                                        </Link>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:;">Sản phẩm</a>
                                        <ul>
                                            <li>
                                                <Link to="/product">Áo ấm</Link>
                                            </li>
                                            <li>
                                                <Link to="/product">Đầm</Link>
                                            </li>
                                            <li>
                                                <Link to="/product">Chân váy</Link>
                                            </li>
                                            <li>
                                                <Link to="/product">Áo sơ mi</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="scroll-to-section">
                                        <Link to="/product">Sản phẩm mới</Link>
                                    </li>
                                    <li className="scroll-to-section">
                                        <a onClick={handleShow}>
                                            Tìm kiếm
                                        </a>
                                    </li>
                                    <li className="scroll-to-section">
                                        <Link to="/cart"><span className="fa fa-shopping-cart"></span> Giỏ hàng</Link>
                                    </li>
                                    <li className="scroll-to-section">
                                        <Link to="/login"><span className="fa fa-user"></span> Đăng nhập</Link>
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/*<Modal.Title>Modal heading</Modal.Title>*/}
                    <div className="search">
                        <div className="search-box">
                            <div className="search-field">
                                <input placeholder="Search..." className="input" type="text" />
                                <div className="search-box-icon">
                                    <button className="btn-icon-content">
                                        <i className="search-icon">
                                            <svg
                                                xmlns="://www.w3.org/2000/svg"
                                                version="1.1"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                                    fill="#fff"
                                                />
                                            </svg>
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Header>
                {/*<Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>*/}
                {/*<Modal.Footer>*/}
                {/*    <Button variant="secondary" onClick={handleClose}>*/}
                {/*        Close*/}
                {/*    </Button>*/}
                {/*    <Button variant="primary" onClick={handleClose}>*/}
                {/*        Save Changes*/}
                {/*    </Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        </>
    )
        ;
};
export default Header;
