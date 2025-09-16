import React, { useState } from 'react';

const ShowHideToggle = () => {
    const [isShown, setIsShown] = useState(true);
    const handleClick = () => {
        setIsShown(!isShown);
    }
    return (
        <div>
            <button className='py-2 px-5 bg-sky-300 hover:bg-sky-400 transition-all duration-300 cursor-pointer' onClick={handleClick}>Show</button>
            { isShown && <h1 className='text-3xl font-bold mb-5'>This is the show hide toggle component</h1> }
        </div>
    );
};

export default ShowHideToggle;