import axios from "axios";

export const getProductDetail = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/v1/product/detail/${id}`);
    console.log(result);
    return result;
}
export const getImgProduct = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/v1/product/img/${id}`);
    return result;
}
export const getSizeProduct = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/v1/home/size?id_product=${id}`);
    return result;
}
export const getAllSizeProduct = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/product/size`);
    return result;
}
export const getAllColorProduct = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/product/color`);
    return result;
}
export const getAllTypeProduct = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/product/type`);
    return result;
}
export const getAllProduct = async (time,color,min,max,type) => {
    const result = await axios.get(`http://localhost:8080/api/v1/product/list?time=${time}&color=${color}&min=${min}&max=${max}&type=${type}`);
    console.log(result)
    return result;
}