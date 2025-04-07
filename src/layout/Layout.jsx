import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/menu';

const Layout = () => {
    return (
        <>
            <Menu />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
