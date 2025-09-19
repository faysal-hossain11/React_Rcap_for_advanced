
import { use } from 'react';
import OnlineProduct from './OnlineProduct';

const OnlineProducts = ({ onlineProductsPromise }) => {
    const onlineProducts = use(onlineProductsPromise);
    const allProducts = onlineProducts.products;

    console.log(allProducts);
    
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-8'>Online Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {allProducts.map((product) => {
                    return (
                        <OnlineProduct key={product.id} product={product}/>
                    )
                })}
            </div>
        </div>
    );
};

export default OnlineProducts;