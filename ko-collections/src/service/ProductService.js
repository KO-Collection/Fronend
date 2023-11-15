import axios from "axios";

export const getProductDetail = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/v1/product/detail/${id}`);
    return result;
}
export const getImgProduct = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/v1/product/img/${id}`);
    return result;
}