import {useEffect, useRef} from "react";
import Swal from "sweetalert2";

export function Paypal() {
    const paypal = useRef()
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Very dicelious",
                                amount: {
                                    currency_code: "USD",
                                    value: 10.00,
                                },
                            },
                        ],
                    });
                },
                onApprove: async(data, actions) => {
                    const order = await actions.order.capture();
                    Swal.fire("Thanh toán thành công!")
                    window.location.reload();
                    console.log(order);
                },
                onError: (err) => {
                    console.log(err);
                }
            })
            .render(paypal.current);
    }, []);
    return(
        <>
            <div ref={paypal}
            ></div>
        </>
    )
}