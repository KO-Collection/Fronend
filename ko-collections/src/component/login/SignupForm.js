import React, {useState} from 'react';
import './login.css';
import {Field, Form, Formik, ErrorMessage} from "formik";
import Header from "../header/Header";
import {Link} from "react-router-dom";
import {isAfter, parseISO} from "date-fns";
import * as Yup from "yup";
import {sginupUser} from "../../service/UserService";
import {toast} from "react-toastify";


function SignupForm() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const goBack = () => {
        window.history.back();
    };
    const validateBirth = (value) => {
        const currentDate = new Date();
        const birthday = parseISO(value);
        return !isAfter(birthday, currentDate);
    };
    const handleSubmit = async (value, setErrors) => {
        try {
            const result = await sginupUser(value);
            toast("Đăng ký thành công.");

        } catch (err) {
            console.log(err.response.data.message);
        }
    };


    return (
        <>
            <Formik initialValues={
                {
                    userName: "",
                    userPassWord: "",
                    userEmail: "",
                    phoneNumber: "",
                    birthDay: "",
                    address: "",
                    listRoles: ["user"]
                }
            }
                    validationSchema={Yup.object({
                        userName: Yup.string()
                            .max(100, "Tên đăng nhập tối đa 100 ký tự!")
                            .min(3, "Tên đăng nhập tối thiểu 3 ký tự .").required("Vui lòng không bỏ trống ."),
                        userPassWord: Yup.string()
                            .max(100, "Mật khẩu tối đa 30 ký tự!")
                            .min(3, "Mật khẩu tối thiểu 3 ký tự .").required("Vui lòng không bỏ trống ."),
                        birthDay: Yup.string().required(
                            "Không bỏ trống trường này ."
                        ).test("birthday",
                            "Ngày sinh không được vượt quá thời gian thực tế .",
                            validateBirth).matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, "Không đúng định dạng vd:12-02-2000."),
                        address: Yup.string()
                            .required("Không bỏ trống trường này.")
                            .max(100, "Địa chỉ tối đa 100 ký tự ").min(5, "Địa chỉ tối thiểu 5 ký tự."),
                        phoneNumber: Yup.string()
                            .required("Không bỏ trống trường này .")
                            .max(11, "Số điện thoại tối đa 11 ký tự.")
                            .min(10, "Số điện tối thiểu 10 ký tự .").matches(/^(0[3|5|7|8|9])([0-9]{8})\b$/
                                , "Nhập sai định dạng vd: 0339779768 ."),
                        userEmail: Yup.string()
                            .required("Không bỏ trống trường này!").min(12, "Email tối thiểu 12 ký tự.")
                            .matches(
                                /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                                "Nhập sai định dạng vd:nguyenvanan@gmail.com ."
                            ).max(50, "Email tối đa 50 ký tự ."),
                    })}
                    onSubmit={(values, {setErrors}) => {
                        handleSubmit(values, setErrors);
                    }}

            >
                <div className="bg-img">
                    <div className="content">
                        <header>Đăng ký tài khoản</header>
                        <Form>
                            <div className="field">
                                <span className="fa fa-user"></span>
                                <Field type="text" required placeholder="Tên tài khoản" name="userName"/>
                            </div>
                            <div className="error-message">
                                <ErrorMessage
                                    className=" text-danger"
                                    name="userName"
                                    component="small"
                                />
                            </div>
                            <div className="field ">
                                <span className="fa fa-lock"></span>
                                <Field
                                    type={passwordVisible ? "text" : "password"}
                                    className="pass-key"
                                    required
                                    placeholder="Mật khẩu"
                                    name="userPassWord"
                                />
                                <span className="show" onClick={togglePasswordVisibility}>
              {passwordVisible ? "Ẩn" : "Hiện"}
            </span>
                            </div>
                            <div className="error-message">
                                <ErrorMessage
                                    className=" text-danger"
                                    name="userPassWord"
                                    component="small"
                                />
                            </div>
                            <div className="field ">
                                <span className="fa fa-envelope"></span>
                                <Field type="text" required placeholder="Email" name="userEmail"/>
                            </div>
                            <div className="error-message">
                                <ErrorMessage
                                    className=" text-danger"
                                    name="userEmail"
                                    component="small"
                                />
                            </div>
                            <div className="field ">
                                <span className="fa fa-mobile-phone"></span>
                                <Field type="text" required name="phoneNumber" placeholder="Số điện thoại"/>
                            </div>
                            <div className="error-message">
                                <ErrorMessage
                                    className=" text-danger"
                                    name="phoneNumber"
                                    component="small"
                                />
                            </div>
                            <div className="field ">
                                <span className="fa fa-birthday-cake"></span>
                                <Field type="date" required name="birthDay"/>
                            </div>
                            <div className="error-message">
                                <ErrorMessage
                                    className=" text-danger"
                                    name="birthDay"
                                    component="small"
                                />
                            </div>

                            <div className="field" style={{height: "100px"}}>
                                <span className="fa fa-home"></span>
                                <Field type="textarea" required placeholder="Địa chỉ" name="address"/>

                            </div>
                            <div className="field space">
                                <input type="submit" value="Đăng ký"/>
                            </div>

                        </Form>
                        <div className="signup space">
                            <Link to="#" onClick={goBack}>Quay lại </Link>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    );
}

export default SignupForm;
