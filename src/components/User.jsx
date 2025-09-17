import React, { Suspense, use, useState } from 'react';

const User = ({ usersPromise }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const usersList = use(usersPromise);
    console.log(usersList);
    

    const searchFiltered = usersList.filter((user) => user?.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return (
        <div>
            <div className='py-5 mb-4 flex justify-between items-center'>
                <input onChange={(e) => setSearchTerm(e.target.value)} className='w-full border-2 border-sky-300 outline-none rounded text-sky-400 py-3 px-2' placeholder='Search your user name...' type="text" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {searchFiltered.map((user) => {
                    return (
                        <div key={user?.id} className='border-2 border-sky-200 p-5 rounded-2xl bg-sky-100 group hover:scale-110 hover:shadow-lg transition-all duration-300'>
                            <h1 className='text-xl font-semibold'>{user?.name}</h1>
                            <p className='text-md'>{user?.email}</p>
                            <p className='text-md'>{user?.phone}</p>
                            <p className='text-md'>{user?.website}</p>
                            <p className='text-md bg-sky-200 py-2 rounded mt-5 pl-3 group-hover:bg-red-300 transition-all duration-300'>{user?.company?.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default User;