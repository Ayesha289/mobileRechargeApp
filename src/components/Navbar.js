import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    const isAuthPageRegister = location.pathname === '/register' 
    const isAuthPageLogin = location.pathname === '/login';

    return (
        <nav className="bg-transparent p-4 fixed w-full">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Mobile Recharge App</h1>
                <ul className="flex space-x-4">
                    {!isAuthPageRegister && !isAuthPageLogin && (
                        <>
                            <li><Link to="/" className="text-white">Home</Link></li>
                            <li><a href="#about" onClick={() => scrollToSection('about')} className="text-white">About</a></li>
                            <li><a href="#recharge-plans" onClick={() => scrollToSection('recharge-plans')} className="text-white">View Recharge Plans</a></li>
                            <li><Link to="/register" className="text-white">Register</Link></li>
                            <li><Link to="/login" className="text-white">Login</Link></li>
                        </>
                    )}
                    {isAuthPageRegister && (
                        <>
                        <li><Link to="/" className="text-white">Home</Link></li>
                        <li><Link to="/login" className="text-white">Login</Link></li>
                        </>
                    )}
                    {isAuthPageLogin && (
                        <>
                        <li><Link to="/" className="text-white">Home</Link></li>
                        <li><Link to="/register" className="text-white">Register</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
