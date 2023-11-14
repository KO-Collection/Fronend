import logo from './logo.svg';
import './App.css';
import Home from "./component/home/Home";
import LoginForm from "./component/login/LoginForm";
import {Route, Routes} from "react-router-dom";
import ProductDetail from "./component/detail/ProductDetail";
import Cart from "./component/cart/Cart";
import Product from "./component/product/Product";
import SignupForm from "./component/login/SignupForm";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import React from "react";
import SearchHome from "./component/home/SearchHome";

function App() {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/signup" element={<SignupForm/>}/>
                <Route path="/detail" element={<ProductDetail/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/search/:search" element={<SearchHome/>}/>
            </Routes>
            <ToastContainer></ToastContainer>

        </>
    );
}

export default App;
