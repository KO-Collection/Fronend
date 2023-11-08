import jwt_decode from "jwt-decode";
import axios from "axios";
export const infoAppUserByJwtToken = () => {
    const jwtToken = localStorage.getItem("JWT");
    if (jwtToken) {
        return jwt_decode(jwtToken);
    }
}