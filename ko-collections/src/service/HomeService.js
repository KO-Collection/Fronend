import axios from "axios";

export const getBestSeller = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api/v1/home/bestsellers`);
        return result.data;

    } catch (err) {
        console.log(err);
    }
}
export const getProductNew = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api/v1/home/new`);
        return result.data;

    } catch (err) {
        console.log(err);
    }
}
export const getSearchHome = async (name,page) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/v1/home/list/?name=${name}&_page=${page}`);
        return result;
    } catch (err) {
        console.log(err);
    }
}