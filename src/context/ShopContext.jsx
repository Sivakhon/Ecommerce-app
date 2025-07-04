import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

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

    const getCartAmount = () => {
    let totalAmount = 0;

    for (const productId in cartItems) {
        const productData = products.find((product) => product._id === productId);
        if (!productData) continue; // Skip if product not found

        for (const size in cartItems[productId]) {
        try {
            const quantity = cartItems[productId][size];
            if (quantity > 0) {
            totalAmount += productData.price * quantity;
            }
        } catch (error) {
            console.error("Error calculating cart amount:", error);
        }
        }
    }

    return totalAmount;
    };

    useEffect(()=>{
        let amount = getCartAmount()
        console.log(amount)
    },[cartItems])


    const value = {
        products , currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount, updateQuantity,
        getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider