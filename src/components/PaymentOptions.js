import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PaymentOptions = () => {
    const { planId } = useParams();

    return (
        <div className="bg-gray-900 text-white p-6 rounded-lg border-2 border-neon-blue mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Payment Options</h2>
            <div className="space-y-4">
                <Link to={`/dummy-payment/${planId}/upi`} className="block p-4 bg-gray-800 rounded-lg text-center text-neon-blue hover:underline">UPI</Link>
                <Link to={`/dummy-payment/${planId}/bank-transfer`} className="block p-4 bg-gray-800 rounded-lg text-center text-neon-blue hover:underline">Bank Transfer</Link>
                <Link to={`/dummy-payment/${planId}/credit-debit-card`} className="block p-4 bg-gray-800 rounded-lg text-center text-neon-blue hover:underline">Credit/Debit Card</Link>
            </div>
        </div>
    );
};

export default PaymentOptions;
