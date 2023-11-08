import axios from "axios";
export const sginupUser = async (signupRequest) => {
    const result = await axios.post(`http://localhost:8080/api/v1/auth/sigup`,signupRequest);
    console.log(result);
    return result;
}
export const signinUser = async (signupRequest) => {
    const result = await axios.post(`http://localhost:8080/api/v1/auth/signin`,signupRequest);
    console.log(result);
    return result;
}