import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Product from '../pages/Product';
import ProductItems from './ProductItems';
import Titles from './Titles';

const RelateProducts = ({category,subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related,setRelated] = useState([])

    useEffect(()=>{

        if (products.length > 0){

            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((items) => category === items.category);
            productsCopy = productsCopy.filter((items) => subCategory === items.subCategory);

            setRelated(productsCopy.slice(0,5));
        }
    },[products])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Titles text1={'Relate'} text2={'PRODUCTS'}/>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.map((items,index)=>(
                    <ProductItems key={index} id={items._id} name={items.name} price={items.price} image={items.image}/>
                ))}
            </div>
        </div>
    )
}

export default RelateProducts
