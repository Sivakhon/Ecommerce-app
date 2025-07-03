import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemsId,size) => {

        if(!size){
            toast.error('Select Product Size')
            return;
        }

        let cartData = structuredClone(cartItems)

        if (cartData[itemsId]){
            if(cartData[itemsId][size]){
                cartData[itemsId][size] += 1;
            }
            else{
                cartData[itemsId][size] = 1;
            }
        }
        else{
            cartData[itemsId] = { [size]: 1 };
            // cartData[itemsId] = {};
            // cartData[itemsId][size] = 1;
        }
        setCartItems(cartData);
    }


    const getCartCount = ()=>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const size in cartItems[items]){
                // console.log(cartItems[items][size])
                totalCount += cartItems[items][size]
            }
            
        }
        // console.log(totalCount)
        return totalCount
    }

    const updateQuantity = async (itemsId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemsId][size] = quantity;
        setCartItems(cartData);
    };


    const value = {
        products , currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount, updateQuantity
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider