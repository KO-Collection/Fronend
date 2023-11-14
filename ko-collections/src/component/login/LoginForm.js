import React, {useState} from 'react';
import './login.css';
import {Field, Form, Formik, ErrorMessage} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {sginupUser, signinUser} from "../../service/UserService";
import {toast} from "react-toastify";
import Swal from "sweetalert2";

function LoginForm() {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const handleSubmit = async (value, setErrors) => {
        try {
            const result = await signinUser(value);
            localStorage.setItem("JWT",result.data.token);
            toast.success("Đăng nhập thành công");
            navigate("/home");
        } catch (err) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Đăng nhập thất bại',
                text: err.response.data.message+"." ,
                showConfirmButton: false,
                timer: 1500
            });
        }

        }

    return (
        <>
            <Formik initialValues={{
                userName: "",
                userPassWord: "",
            }}
                    onSubmit={(values, {setErrors}) => {
                        handleSubmit(values, setErrors);
                    }}
            >
                <div className="bg-img">
                    <div className="content">
                        <header>Đăng nhập</header>
                        <Form>
                            <div className="field">
                                <span className="fa fa-user"></span>
                                <Field type="text" required placeholder="Tên tài khoản" name="userName"/>
                            </div>
                            <div className="field space">
                                <span className="fa fa-lock"></span>
                                <Field
                                    type={passwordVisible ? "text" : "password"}
                                    className="pass-key"
                                    required
                                    placeholder="Password"
                                    name="userPassWord"
                                />
                                <span className="show" onClick={togglePasswordVisibility}>
              {passwordVisible ? "Ẩn" : "Hiện"}
            </span>
                            </div>
                            <div className="pass">
                                <a href="#">Quên mật khẩu</a>
                            </div>
                            <div className="field">
                                <input type="submit" value="Đăng nhập"/>
                            </div>
                        </Form>
                        <div className="login">Đăng nhập khác</div>
                        <div className="links">
                            <div className="facebook">
                                {/*<i className=" fa-facebook-f">*/}
                                <span>Facebook</span>

                            </div>
                            <div className="instagram">
                                {/*<i className="fab fa-instagram">*/}
                                <span>Instagram</span>

                            </div>
                        </div>
                        <div className="signup">
                            Bạn chưa có tài khoản
                            <Link to="/signup">Đăng ký</Link>
                        </div>
                        <div className="signup">
                            <Link to="/home">Quay lại </Link>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    );
}

export default LoginForm;
