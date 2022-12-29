import React, { useEffect, useState } from "react";
import Items from "../Items";
import '../styles/Checkout.css'
const Checkout=()=>{
    const [amount,setAmount]=useState(0);
    const amountKey="totalAmount";
    useEffect(()=>{
        const locStorage=window.localStorage;
        const locStorageAmount=localStorage.getItem(amountKey)
        if(locStorageAmount) setAmount(JSON.parse(locStorageAmount));
    },[])
    
    return(
        <div className="checkout_box">
            <div className="amount_section" id="total_section">
                <h2 className="subtotal">Total</h2>
                <h3 className="subtotal_amount">{`$${amount.toFixed(2)}`}</h3>
            </div>
            <hr style={{backgroundColor:"black",height:'0.5px',width:"80%",marginLeft:"10%"}}/>
            <div className="amount_section">
                <h4 className="subtotal">Sub-total</h4>
                <h4 className="subtotal_amount">{`$${amount.toFixed(2)}`}</h4>
            </div>
            <div className="amount_section">
                <h4 className="subtotal">Delivery</h4>
                <h4 className="subtotal_amount">Free Delivery</h4>
            </div>
            <button className="checkout_bottom" onClick={()=>console.log(`$${amount.toFixed(2)}`)}>Checkout</button>
        </div>
    )
}

export default Checkout;