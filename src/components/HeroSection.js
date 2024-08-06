import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <div className="bg-hero-pattern bg-cover bg-center h-screen flex flex-col justify-center items-start pl-16">
    <h2 className="text-4xl font-bold mb-4 text-white animate-pulse">Welcome to the Mobile Recharge App</h2>
    <p className="text-lg text-white mb-6">Recharge your mobile in just a few easy steps!</p>
    <Link to="/register" className="inline-flex items-center bg-neon-blue text-black px-4 py-2 rounded font-bold">
      Get Started
      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    </Link>
  </div>
);

export default HeroSection;
