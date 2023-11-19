import axios from "axios";
export const createOrder = async (user) => {
  const result = await axios.post(`http://localhost:8080/api/v1/order/create/?name_user=${user}`);
  console.log(result);
  return result;
}
export const createOrderDetail = async (idProduct,quantity,price,idOrder) => {
  try {
    const result = await axios.post(`http://localhost:8080/api/v1/order/order-bill/?id_order_bill=${idOrder}&quantity=${quantity}&price=${price}&id_product=${idProduct}`);
    console.log(result);
    return result;
  }catch (e){
    console.log(e);
  }
}

