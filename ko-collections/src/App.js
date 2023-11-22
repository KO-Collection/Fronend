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
import OrderBill from "./component/order/OrderBill";
import ViewUser from "./component/login/ViewUser";
import InformationUser from "./component/login/InfomationUser";

function App() {
    return (
        <>
            <Routes>
                <Route path="/home/:id" element={<Home/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/signup" element={<SignupForm/>}/>
                <Route path="/detail/:id" element={<ProductDetail/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/order" element={<OrderBill/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/view" element={<ViewUser/>}/>
                <Route path="/search/:search" element={<SearchHome/>}/>
            </Routes>
            <ToastContainer></ToastContainer>

        </>
    );
}

export default App;
