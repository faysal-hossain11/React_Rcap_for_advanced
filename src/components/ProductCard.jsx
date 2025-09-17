import React from 'react';

const ProductCard = ({ product }) => {
    const { title, image, price, category, rating } = product;
    console.log(product);

    return (
        <div className='border-2 p-4 border-sky-200 rounded-md bg-sky-50 group hover:scale-110 hover:shadow-lg transition-all duration-300'>
            <div className='w-full h-44 flex justify-center items-center bg-blue-100 py-5 '>
                <img src={image} alt={title} className=' h-full' />
            </div>
            <div className='mt-4'>
                <h3 className='text-xl mb-4 font-semibold'>{title.length > 28 ? title.slice(0, 28) + '...' : title}</h3>
                <p>{price}</p>
                <p>{category}</p>
                <p>{rating?.rate}</p>
                <button className='py-2 w-full text-center font-semibold rounded-md bg-sky-200 mt-4 hover:cursor-pointer'>Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;