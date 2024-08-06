import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import RechargePlansSection from './components/RechargePlansSection';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import SubscriberList from './components/SubscriberList';
import SubscriberDetails from './components/SubscriberDetails';
import RechargePlans from './components/RechargePlans';
import PaymentOptions from './components/PaymentOptions';

const HomeLayout = () => (
  <div className="bg-black text-white">
    <Navbar />
    <HeroSection />
    <div id="about">
      <AboutSection />
    </div>
    <div id="recharge-plans">
      <RechargePlansSection />
    </div>
    <Footer />
  </div>
);

// Layout for register and login pages
const AuthLayout = ({ children }) => (
  <div className="bg-black text-white">
    <Navbar />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomeLayout />}
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<SubscriberList />} />
          <Route path="subscribers/:id" element={<SubscriberDetails />} />
        </Route>
        <Route path="/user" element={<RechargePlans />} />
        <Route path="payment/:planId" element={<PaymentOptions />} />
      </Routes>
    </Router>
  );
}

export default App;
