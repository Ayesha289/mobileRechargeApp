import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SubscriberDetails = () => {
    const { id } = useParams();
    const [history, setHistory] = useState([]);

    useEffect(() => {
        // Fetch the recharge history from an API or mock data
        const fetchHistory = async () => {
            // Replace with your API call
            const data = [
                { planName: 'Plan A', date: '2024-07-01', paymentMode: 'Credit Card' },
                { planName: 'Plan B', date: '2024-06-01', paymentMode: 'Debit Card' },
            ];
            setHistory(data);
        };
        fetchHistory();
    }, [id]);

    return (
        <div className="bg-transparent p-4 rounded-lg border-2 border-neon-blue mx-auto max-w-2xl">
            <h2 className="text-xl font-bold mb-4 text-center text-neon-blue">Recharge History</h2>
            <ul className="space-y-4">
                {history.map((recharge, index) => (
                    <li key={index} className="py-2">
                        <div className="font-semibold text-neon-blue">{recharge.planName}</div>
                        <div className="text-neon-blue">Date: {recharge.date}</div>
                        <div className="text-neon-blue">Payment Mode: {recharge.paymentMode}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubscriberDetails;
