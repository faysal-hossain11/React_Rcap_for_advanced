import React, { use, useState } from 'react';
import ProductCard from './ProductCard';

const Product = ({ productPromise }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");

    const productList = use(productPromise);
    const searchFilteredProducts = productList.filter((product) => product?.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const sortedProducts = [...searchFilteredProducts].sort((a, b) => {
        if (sortOption === "price-low-to-high") {
            return a.price - b.price
        }
        if (sortOption === "price-high-to-low") {
            return b.price - a.price
        }
        if (sortOption === "rating-low-to-high") {
            return a.rating.rate - b.rating.rate
        }
        if (sortOption === "rating-high-to-low") {
            return b.rating.rate - a.rating.rate
        }
    })

    return (
        <div>
            <h2 className='text-3xl text-center mb-10'>List of Products</h2>
            <div className='max-w-5xl mx-auto mb-4 flex gap-4 justify-items-end'>
                <input
                    type="text"
                    className='w-full py-3 px-2 border-2 border-sky-200 rounded-md text-sky-400 font-semibold outline-none'
                    placeholder='Search your product...'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                    defaultValue=""
                    className='w-full py-3 px-2 border-2 border-sky-200 rounded-md text-sky-400 font-semibold outline-none'
                    name=""
                    id=""
                    onChange={(e) => setSortOption(e.target.value)}
                >

                    <option value="" disabled hidden >Sort by</option>
                    <option value="price-low-to-high">Price: Low to High</option>
                    <option value="price-high-to-low">Price: High to Low</option>
                    <option value="rating-low-to-high">Rating: Low to High</option>
                    <option value="rating-high-to-low">Rating: High to Low</option>
                </select>

            </div>
            {/* product grid section */}

            {searchTerm && sortedProducts.length === 0 ? <h2 className='text-2xl text-center py-10 bg-red-100'>No products found</h2>
                : sortedProducts && (
                    <div className='grid gird-cols-1 md:grid-cols-4 lg:gird-cols-4 gap-5'>
                        {sortedProducts.map((product) => {
                            return (
                                <ProductCard key={product?.id} product={product} />
                            )
                        })}
                    </div>
                )
            }

        </div>
    );
};

export default Product;