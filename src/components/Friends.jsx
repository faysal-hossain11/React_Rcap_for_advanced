import React, { use } from 'react';

const Friends = ({ friendsPromise }) => {

    const friendsList = use(friendsPromise);

    return (
        <div>
            {
                friendsList.map((friend) => {
                    return (
                        <div key={friend?.id} className=''>
                            <h1>{friend?.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Friends;