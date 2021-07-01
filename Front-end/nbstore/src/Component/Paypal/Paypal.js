import React, { useEffect, useRef } from 'react';

function Paypal(props) { 
    const paypal=useRef();
    const {Moneyconversion}= props;
    const money=Moneyconversion;
    useEffect(() => {
        window.paypal.Buttons({
                createOrder:(data,actions,err)=>{
                    return actions.order.create({
                        intent:"CAPTURE",
                        purchase_units:[
                            {
                                description: "Payment Paypal",
                                amount :{
                                    currency_code:"USD",
                                    value:money,
                                }
                            }
                        ]
                    })
                },
                onApprove: async (data,actions) =>{
                        const order=await actions.order.capture();
                        console.log("Successful order:",order);
                        window.location.replace('http://localhost:3000/resultOrder?message=1');
                },
                onError:(err)=>{
                    console.log(err);
                },
                onCancel : (data)=>{
                    window.location.replace('http://localhost:3000/resultOrder?message=2');
                    console.log("Cancel order!");
                }
        }).render(paypal.current)
    },[])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}

export default Paypal;