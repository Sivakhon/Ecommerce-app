import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Titles from './Titles';
import ProductItems from './ProductItems';

const LastestCollection = () => {

    const {products} = useContext(ShopContext);
    const [lastestProducts,setlastestProducts] = useState([]);

    useEffect(() => {
        // console.log('products:', products)
        setlastestProducts(products.slice(0, 10));
    }, []); 
    

    return (
    <div className='my-10'>
        <div className='text-center py-8 text-3x1'>
            <Titles text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
    
        <div className='grid grid-cols-2 gap-5 sm:grid-cols-3   md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                lastestProducts.map((item,index)=>(
                    <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
            
        </div>

    </div>
    )
}

export default LastestCollection
