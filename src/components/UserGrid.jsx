
import User from './User';
import { fetchUsers } from '../../lib/api';
import { Suspense } from 'react';

const UserGrid = () => {
    const usersPromise = fetchUsers();

    return (
        <div>
            <h2 className='text-3xl text-center mb-5'>List of users</h2>
            <Suspense fallback={<h2 className='text-2xl text-center'>Loading users...</h2>}>
                <User usersPromise={usersPromise} />
            </Suspense>
        </div>
    );
};

export default UserGrid;