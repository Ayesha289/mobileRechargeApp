import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SubscriberList = () => {
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        // Fetch the subscribers from an API or mock data
        const fetchSubscribers = async () => {
            // Replace with your API call
            const data = [
                { id: 1, name: 'John Doe', expiryDate: '2024-08-10' },
                { id: 2, name: 'Jane Smith', expiryDate: '2024-08-11' },
            ];
            setSubscribers(data);
        };
        fetchSubscribers();
    }, []);

    return (
        <div className="bg-transparent p-4 rounded-lg border-2 border-neon-blue mx-auto max-w-2xl">
            <h2 className="text-xl font-bold mb-4 text-center text-neon-blue">Subscribers with Plans Expiring Soon</h2>
            <ul className="space-y-4">
                {subscribers.map(subscriber => (
                    <li key={subscriber.id} className="py-2 flex justify-between items-center">
                        <span className="text-neon-blue">{subscriber.name} - Expiry Date: {subscriber.expiryDate}</span>
                        <Link to={`/admin/subscribers/${subscriber.id}`} className="text-neon-blue hover:underline">
                            View Transaction History
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubscriberList;
