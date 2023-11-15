import axios from "axios";

export const createCart = async (name, product, quantity) => {
    const result = await axios.post(`http://localhost:8080/api/v1/cart/create/?name_user=${name}&id_product=${product}&quantity=${quantity}`);
    console.log(result)
    return result;
}
export const getAllCartService = async (name) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/v1/cart/list/?user_name=${name}`);
        console.log(result.data)
        return result.data;
    } catch (err) {
        console.log(err);
    }

}