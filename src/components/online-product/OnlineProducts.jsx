
import { use, useState } from 'react';
import OnlineProduct from './OnlineProduct';

const OnlineProducts = ({ onlineProductsPromise }) => {

    const [addToCartItems, setAddToCartItems] = useState([]);

    const onlineProducts = use(onlineProductsPromise);
    const allProducts = onlineProducts.products;

    const handleAddToCart = (product) => {
        setAddToCartItems([...addToCartItems, product])
    }

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-8'>Online Products</h2>
            <p>{addToCartItems.length}</p>
            {addToCartItems?.length > 0 && addToCartItems.map((item) => {
                return (
                    <div className='bg-sky-100 p-4 mb-8'>
                        <div className='flex gap-4 items-center justify-between'>
                            <div>
                                <p>{item?.title}</p>
                                <div className='w-[100px] h-[100px] '>
                                    <img src={item?.images} className='w-full h-full object-cover ' alt="" />
                                </div>
                            </div>
                            <button>Remove</button>
                        </div>

                    </div>
                )
            })
            }
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {allProducts.map((product) => {
                    return (
                        <OnlineProduct
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default OnlineProducts;