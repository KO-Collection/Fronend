import axios from "axios";
export const createOrder = async (user) => {
  const result = await axios.post(`http://localhost:8080/api/v1/order/create/?name_user=${user}`);
  return result;
}
export const createOrderDetail = async (idProduct,quantity,price,idOrder,idSize) => {
  try {
    const result = await axios.post(`http://localhost:8080/api/v1/order/order-bill/?id_order_bill=${idOrder}&quantity=${quantity}&price=${price}&id_product=${idProduct}&id_size=${idSize}`);
    return result;
  }catch (e){
    console.log(e);
  }
}
export const getAllOrder = async (user,page) => {
  try {
    const result = await axios.get(`http://localhost:8080/api/v1/order/history?name_user=${user}&_page=${page}`);
    console.log(result);
    return result;
  }catch (e){
    console.log(e);
  }
}
