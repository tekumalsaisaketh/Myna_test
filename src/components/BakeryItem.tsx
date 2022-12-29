import React, { useEffect, useState } from "react";
import {BakeryItemType} from "../Items";
import '../styles/BakeryItem.css'
interface Props{
    item:BakeryItemType,
    removeItem: ( item: BakeryItemType) => void,
    addItemToCart: ( item: BakeryItemType) => void,
    allItems:string[]
}
const BakeryItem=(props:Props)=>{
    const {removeItem,addItemToCart,allItems,item}=props;
    const {id,name,description,image,price}=item;
    const [inCart,setInCart]=useState(false);
    const addtoCart=()=>{
        addItemToCart(item);
        setInCart(true);
    }
    const removeFromCart=()=>{
        removeItem(item);
        setInCart(false);
    }
    useEffect(()=>{
        const index=allItems.indexOf(item.id.toString());
        console.log(index);
        
        if(index>-1) setInCart(true);
        else setInCart(false);
    },[allItems])
    return (
        <div className="BakeryItem_container">
            <div className="searchimg">
                <img className="resultimg" alt={`${name}`} src={process.env.PUBLIC_URL + image}/>
            </div>
            <div className="details">
            <div className="name">{name}</div>
            <div className="price">{`$${price.toFixed(2)}`}</div>
            <div className="description">{description}</div>
            {!inCart&& <button className="AddToCart" onClick={()=>addtoCart()}>Add to Cart</button>}
            {inCart && <button className="AddToCart" onClick={()=>removeFromCart()}>Remove From Cart</button>}
            </div>
        </div>
    )
}
export default BakeryItem;