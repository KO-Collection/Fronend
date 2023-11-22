import axios from "axios";

export const createCart = async (name, product, size,quantity) => {
    const result = await axios.post(`http://localhost:8080/api/v1/cart/create/?name_user=${name}&id_product=${product}&quantity=${quantity}&id_size=${size}`);
    return result;
}
export const getAllCartService = async (name) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/v1/cart/list/?user_name=${name}`);
        return result.data;
    } catch (err) {
        console.log(err);
    }
}
export const deleteCart = async (name, product,size) => {
    const result = await axios.delete(`http://localhost:8080/api/v1/cart/delete/?user_name=${name}&id_product=${product}&id_size=${size}`);
    console.log(result)
    return result;
}