import React, { use } from 'react';

const User = ({ fetchUsers }) => {

    const userList = use(fetchUsers);
    console.log(userList);

    return (
        <div className=''>
            <p>Users: {userList?.length}</p>
            <div className='grid grid-cols-3 gap-6'>
                {
                    userList.map((user) => {
                        return (
                            <div key={user?.id} className='bg-sky-200 p-4 rounded-2xl shadow-2xl hover:bg-sky-300 hover:cursor-pointer transition-all duration-300'>
                                <p>{user?.name}</p>
                                <p>{user?.email}</p>
                                <p>{user?.phone}</p>
                                <p>{user?.address?.city}</p>
                                <p>{user?.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default User;