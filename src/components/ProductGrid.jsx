import React, { Suspense } from 'react';
import { fetchProducts } from '../../lib/api';
import Product from './Product';

const ProductGrid = () => {
    const productPromise = fetchProducts();
    return (
        <div>
            <Suspense fallback={<h2 className='text-2xl text-center'>Loading products...</h2>}>
                <Product productPromise={productPromise} />
            </Suspense>
        </div>
    );
};

export default ProductGrid;