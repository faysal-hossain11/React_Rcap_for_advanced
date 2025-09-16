import React, { useState } from 'react';

const CounterApp = () => {

    const [count, setCount] = useState(0);

    return (
        <div className='bg-sky-100 p-10 rounded-2xl text-center'>
            <h1 className='mb-4 text-5xl'>{count}</h1>
            <div className='flex gap-5 items-center justify-center'>
                <button className='py-2 px-5 bg-sky-300 hover:bg-sky-400 transition-all duration-300 cursor-pointer' onClick={() => setCount(count + 1)}>Increase</button>
                <button className='py-2 px-5 bg-red-300 hover:bg-red-300 transition-all duration-300 cursor-pointer' onClick={() => count > 0 && setCount(count - 1)}>Decrease</button>
                <button className='py-2 px-5 bg-yellow-200 hover:bg-yellow-500 transition-all duration-300 cursor-pointer' onClick={() => setCount(0)} >Reset</button>
            </div>

        </div>
    );
};

export default CounterApp;