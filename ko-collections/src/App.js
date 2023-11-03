import logo from './logo.svg';
import './App.css';
import Home from "./component/home/Home";
import LoginForm from "./component/login/LoginForm";
import {Route, Routes} from "react-router-dom";
import ProductDetail from "./component/detail/ProductDetail";
import Cart from "./component/cart/Cart";

function App() {
    return (
        <>

            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/detail" element={<ProductDetail/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </>
    );
}

export default App;
