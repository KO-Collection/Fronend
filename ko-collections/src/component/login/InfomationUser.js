import React, {useEffect, useState} from "react";
import {Form, Formik, Field, ErrorMessage} from "formik";
import {getUserDetail, updateUser} from "../../service/UserService";
import * as appUserService from "../../service/AutheService";
import {differenceInYears, parseISO, isAfter} from "date-fns";
import * as Yup from "yup";
import XRegExp from "xregexp";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";


const InformationUser = () => {
    const navigate = useNavigate();
    const [account, setAccount] = useState();
    const getUsers = async () => {
        const response = appUserService.infoAppUserByJwtToken();
        if (response !== undefined){
            const name = response.sub;
            const user = await getUserDetail(name);
        setAccount(user);}
    }
    const validateBirth = (value) => {
        const currentDate = new Date();
        const birthday = parseISO(value);
        return !isAfter(birthday, currentDate);
    };
    const validateBirthAge = (value) => {
        const currentDate = new Date();
        const birthday = parseISO(value);

        const age = differenceInYears(currentDate, birthday);

        return age >= 18;
    }
    const handleSubmit = async (value, setErrors) => {
        try {
            const response = appUserService.infoAppUserByJwtToken();
            if (response !== undefined) {
                const name = response.sub;
                const result = await updateUser(value, name);
                Swal.fire(
                    "Cập nhật thành công !",
                    "Tài khoản " + name + " đã được cập nhật!",
                    "success"
                );
                getUsers();
            }
        } catch (err) {
            if (err.response.data) {
                setErrors(err.response.data);
            }
            if (err.response.status === 406) {
                setErrors(err.response.data);
            }
        }
    };
    useEffect(() => {
        getUsers();
    }, [])
    // if (!account){
    //     return null;
    // }
    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{
                    ...account,
                }}
                validationSchema={Yup.object({
                    nameCustomer: Yup.string()
                        .max(50, "Tên khách hàng tối đa 50 ký tự")
                        .min(3, "Tên khách hàng tối thiểu 3 ký tự").required("Không bỏ trống trường này").matches(XRegExp('^\\p{Lu}\\p{Ll}*([\\s]\\p{Lu}\\p{Ll}*)*$'), "Nhập sai định dạng vd:Nguyen Van An "),
                    birthDay: Yup.string().required(
                        "Không bỏ trống trường này."
                    ).matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, "Nhập sai định dạng ngày sinh VD: dd/mm/yyyy").test("birthday",
                        "Ngày sinh không được vượt quá thời gian thực tế.",
                        validateBirth).test("birthday",
                        "Cảnh báo khách hàng chưa đủ 18 tuổi.",
                        validateBirthAge),
                    address: Yup.string()
                        .required("Không bỏ trống trường này.")
                        .max(100, "Địa chỉ tối đa 100 ký tự ").min(5, "Địa chỉ tối thiểu 5 ký tự."),
                    phoneNumber: Yup.string()
                        .required("Không bỏ trống trường này")
                        .max(11, "Số điện thoại tối đa 11 ký tự.")
                        .min(10, "Số điện tối thiểu 10 ký tự.").matches(/^(0[3|5|7|8|9])([0-9]{8})\b$/
                            , "Nhập sai định dạng vd: 0339779768"),
                    userEmail: Yup.string()
                        .required("Không bỏ trống trường này").min(12, "Email tối thiểu 12 ký tự")
                        .matches(
                            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                            "Nhập sai định dạng vd:nguyenvanan@gmail.com"
                        ).max(30, "Email tối đa 30 ký tự"),
                })}
                onSubmit={(values, {setErrors}) => handleSubmit(values, setErrors)}

            >
                {({isValid, dirty}) => (
                    <Form className="plan-chooser shadow">
                        <div className="header">
                            <span className="title"> Cập nhật thông tin khách hàng</span>
                        </div>
                        <div style={{marginTop: "15px"}}>
                            <span>Tên khách hàng</span>
                            <Field className="form-control"
                                   name="nameCustomer" type="text"/>
                        </div>
                        <div style={{height: "15px"}}>
                            <ErrorMessage
                                className="text-danger"
                                name="nameCustomer"
                                component="small"
                            />
                        </div>
                        <div>
                            <span>Email</span>
                            <Field className="form-control" id="monthly"
                                   name="userEmail" type="email"/>
                        </div>
                        <div style={{height: "15px"}}>
                            <ErrorMessage
                                className="text-danger"
                                name="userEmail"
                                component="small"
                            />
                        </div>
                        <div>
                            <span>Số điện thoại</span>
                            <Field className="form-control"
                                   name="phoneNumber" type="text"/>
                        </div>
                        <div style={{height: "15px"}}>
                            <ErrorMessage
                                className="text-danger"
                                name="phoneNumber"
                                component="small"
                            />
                        </div>
                        <div>
                            <span>Ngày sinh</span>
                            <Field className="form-control" id="monthly"
                                   name="birthDay" type="date"/>
                        </div>
                        <div style={{height: "15px"}}>
                            <ErrorMessage
                                className="text-danger"
                                name="birthDay"
                                component="small"
                            />
                        </div>
                        <div>
                            <span>Địa chỉ</span>
                            <Field type="textarea" className="form-control" style={{height: "100px"}} name="address"/>
                        </div>
                        <div style={{height: "15px"}}>
                            <ErrorMessage
                                className="text-danger"
                                name="address"
                                component="small"
                            />
                        </div>
                        {isValid && dirty && (
                            <div style={{marginTop: "5%", marginBottom: "3%"}}
                                 className="d-flex justify-content-center">
                                <button className="btn btn-dark w-50" type={"submit"}>Cập nhật</button>
                            </div>)}
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default InformationUser;