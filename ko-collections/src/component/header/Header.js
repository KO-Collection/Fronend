import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import './logo_ko.css';
import './modal_search.css'
import * as appUserService from '../../service/AutheService';
import {collapseToast, toast} from "react-toastify";
import {getAllCartService} from "../../service/CartService";

const Header = ({cartUpdated}) => {
    const [nameTarget, setNameTarget] = useState('');
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [userName, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cartLenght, setCartLenght] = useState(0);
    const getUsername = async () => {
        const response = await appUserService.infoAppUserByJwtToken();
        setUsername(response);
    };
    const getAllCart = async () => {
        const response = appUserService.infoAppUserByJwtToken();
        if (response === undefined) {
            setCartLenght(0);
        } else {
            const result = await getAllCartService(response.sub);
            setCartLenght(result.length);
        }
    };
    useEffect(() => {
        getUsername();
    }, []);
    useEffect(() => {
        getAllCart();
    }, [cartUpdated]);
    const handleOnKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (nameTarget.trim() !== '') {
                navigate(`/search/${nameTarget}`);
            }
        }
    }
    // const handleSearch = () => {
    //     if (nameTarget.trim() !== '') {
    //         navigate(`/search/${nameTarget}`);
    //     }
    //
    // }
    const handleListenInput = (event) => {
        setNameTarget(event.target.value);
    }
    const handleLogOut = () => {
        localStorage.removeItem("JWT");
        setJwtToken(undefined);
        setUsername(undefined);
        navigate("/home/1");
        toast.success("Đăng xuất thành công");
        window.location.reload();
    };

    return (
        <>
            <header className="header-area header-sticky shadow">
                <div className="ml-5 mr-4">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav ">
                                <Link className="fancy" to="/home/1">
                                    <span className="top-key"></span>
                                    <span className="text">KO Collection</span>
                                    <span className="bottom-key-1"></span>
                                    <span className="bottom-key-2"></span>
                                </Link>

                                <ul className="nav text-light" style={{marginTop: "0.5%"}}>
                                    <li className="scroll-to-section">
                                        <Link to="/home/1">Trang chủ</Link>
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
                                        <div className="input-container">
                                            <input type="text" name="text" className="input" placeholder="Tìm kiếm..."
                                                   id="inputSearch"
                                                   onKeyDown={handleOnKeyDown}
                                                   onChange={handleListenInput}/>
                                            <span className="icon">
    <svg
        width="19px"
        height="19px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0}/>
      <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
          <path
              opacity={1}
              d="M14 5H20"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
          />
          {" "}
          <path
              opacity={1}
              d="M14 8H17"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
          />
          {" "}
          <path
              d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
          />
          {" "}
          <path
              opacity={1}
              d="M22 22L20 20"
              stroke="#000"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
          />
          {" "}
      </g>
    </svg>
  </span>
                                        </div>

                                    </li>
                                    <li className="scroll-to-section">
                                        <Link to="/cart"><span className="fa fa-shopping-cart"></span>({cartLenght}) Giỏ
                                            hàng</Link>
                                    </li>
                                    <li className="scroll-to-section">
                                        {JwtToken ? (
                                            <li className="submenu">
                                                <Link href="javascript:;"><span
                                                    className="fa fa-user"></span> {userName.sub}</Link>
                                                <ul>
                                                    <li>
                                                        <Link to="/view">Thông tin</Link>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => {
                                                            handleLogOut();
                                                        }}>Đăng xuất</a>
                                                    </li>

                                                </ul>
                                            </li>
                                        ) : (<Link to="/login"><span className="fa fa-user"></span> Đăng nhập</Link>)}
                                    </li>
                                </ul>
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
                                <input placeholder="Search..." className="input" type="text"/>
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
