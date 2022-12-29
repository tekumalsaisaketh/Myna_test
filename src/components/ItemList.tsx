import React, { useEffect, useState } from "react";
import Items,{BakeryItemType} from "../Items";
import BakeryItem from "./BakeryItem";
import '../styles/ItemsList.css'
const ItemList=()=>{
    const [items,setItems]=useState<string[]>([]);
    const [amount,setAmount]=useState(0);
    const cartItemKey="cartItems";
    const amountKey="totalAmount";
    const locStorage=window.localStorage;
    useEffect(()=>{
        const localStorageItems=locStorage.getItem(cartItemKey);
        const localStorageAmount=locStorage.getItem(amountKey)
        if(localStorageItems && localStorageAmount){
            setItems(JSON.parse(localStorageItems));
            setAmount(JSON.parse(localStorageAmount));
        }
        else{
            setItems([]);
            setAmount(0);
        }
    },[]);
    const addItemToCart=(item:BakeryItemType)=>{
        const updatedItem=[...items,item.id.toString()];
        const updateAmount=amount+item.price;
        locStorage.setItem(cartItemKey,JSON.stringify(updatedItem));
        localStorage.setItem(amountKey,JSON.stringify(updateAmount));
    
        setItems(updatedItem);
        setAmount(updateAmount)
    }
    const removeItem=(item:BakeryItemType)=>{
        const tempItems=items;
        let updateAmount=amount;
        const index=tempItems.indexOf(item.id.toString());
        if (index > -1) { 
            tempItems.splice(index, 1); 
            updateAmount-=item.price;
        }
        locStorage.setItem(cartItemKey,JSON.stringify(tempItems));
        localStorage.setItem(amountKey,JSON.stringify(updateAmount));
        setItems(tempItems);
        setAmount(updateAmount)
    }

    return(
        <div className="ItemsList">
        {
            Items.map((Item:BakeryItemType)=>{
                return <BakeryItem key={Item.id+Item.name} item={Item} addItemToCart={addItemToCart} removeItem={removeItem} allItems={items} ></BakeryItem>
            })
        }
        </div>
    )
}
export default ItemList