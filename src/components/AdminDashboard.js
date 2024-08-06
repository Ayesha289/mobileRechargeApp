import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="bg-black min-h-screen">
            <header className="bg-transparent text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <nav>
                    <Link to="/" className="text-white mr-4">Home</Link>
                    <Link to="/login" className="text-white">Logout</Link>
                </nav>
            </header>
            <main className="p-4">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminDashboard;
