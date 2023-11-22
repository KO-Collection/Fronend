import axios from "axios";
export const sginupUser = async (signupRequest) => {
    const result = await axios.post(`http://localhost:8080/api/v1/auth/sigup`,signupRequest);
    return result;
}
export const signinUser = async (signupRequest) => {
    const result = await axios.post(`http://localhost:8080/api/v1/auth/signin`,signupRequest);
    return result;
}
export const updateUser = async (signupRequest,name) => {
    const result = await axios.patch(`http://localhost:8080/api/v1/auth/update?name_user=${name}`,signupRequest);
    return result;
}
export const getUserDetail = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/v1/auth/detail/${id}`);
        return result.data;
    }catch (e){
        console.log(e);
    }

}