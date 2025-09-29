import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard page</h1>
            
            <Outlet />
        </div>
    );
};

export default Dashboard;