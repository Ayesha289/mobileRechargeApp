// src/components/RechargePlans.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const plans = [
    {
        id: 1,
        category: 'Popular Plans',
        title: 'Basic Plan',
        price: '$10',
        details: '100 minutes, 100 texts',
        description: 'This plan is perfect for light users who need basic connectivity.',
        borderColor: 'border-neon-blue',
        buttonColor: 'bg-neon-blue',
        shadowColor: 'shadow-neon-blue'
    },
    {
        id: 2,
        category: 'Validity Plans',
        title: 'Standard Plan',
        price: '$20',
        details: '200 minutes, 200 texts',
        description: 'Ideal for regular users, offering a balance of calls and texts.',
        borderColor: 'border-neon-green',
        buttonColor: 'bg-neon-green',
        shadowColor: 'shadow-neon-green'
    },
    {
        id: 3,
        category: 'Data Plans',
        title: 'Premium Plan',
        price: '$30',
        details: '300 minutes, 300 texts',
        description: 'Best for heavy users who need maximum connectivity and features.',
        borderColor: 'border-neon-pink',
        buttonColor: 'bg-neon-pink',
        shadowColor: 'shadow-neon-pink'
    },
    {
        id: 4,
        category: 'Unlimited Data Plans',
        title: 'Unlimited Plan',
        price: '$50',
        details: 'Unlimited minutes, texts, and data',
        description: 'Perfect for users who need unlimited everything.',
        borderColor: 'border-neon-yellow',
        buttonColor: 'bg-neon-yellow',
        shadowColor: 'shadow-neon-yellow'
    },
];

const RechargePlans = () => (
    <div className="bg-gray-900">
        <header className="bg-transparent text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">User Dashboard</h1>
            <nav>
                <Link to="/" className="text-white mr-4">Home</Link>
                <Link to="/login" className="text-white">Logout</Link>
            </nav>
        </header>
        <div className="container mx-auto text-center py-16">
            <h2 className="text-3xl font-bold mb-8 text-white">Recharge Plans</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {plans.map(plan => (
                    <div
                        key={plan.id}
                        className={`bg-black p-6 rounded-lg text-white transform transition-transform duration-300 hover:scale-105 ${plan.borderColor} ${plan.shadowColor}`}
                        style={{ height: '400px', width: '250px' }}
                    >
                        <h3 className="text-xl font-bold mb-2">{plan.category}</h3>
                        <p className="text-lg mb-2">{plan.title}</p>
                        <p className="text-lg mb-2">{plan.price}</p>
                        <p className="text-sm text-gray-400 mb-4">{plan.details}</p>
                        <p className="text-sm text-gray-300 mb-4">{plan.description}</p>
                        <Link to={`/payment/${plan.id}`} className={`inline-flex items-center ${plan.buttonColor} text-black px-4 py-2 rounded font-bold`}>
                            Buy Plan
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
    </div>
);

export default RechargePlans;
