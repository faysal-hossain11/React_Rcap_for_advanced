import React from 'react';

const OnlineProduct = ({ product }) => {

    return (
        <div className='bg-sky-50 border-2 border-sky-300 p-4 rounded-md'>
            <div className='w-[200px] mx-auto pb-5'>
                <img src={product.images[0]} alt={product.title} className='w-full' />
            </div>
            <h2>{product.title}</h2>
            <div className='flex gap-4 mt-4'>
                <button className='bg-sky-200 border-none py-2 rounded-md hover:bg-sky-300 transition-all duration-300 font-semibold w-full'>Add To Cart</button>
                <button className='bg-sky-200 border-none py-2 rounded-md hover:bg-sky-300 transition-all duration-300 font-semibold w-full'>Favorite</button>
            </div>
        </div>
    );
};

export default OnlineProduct;