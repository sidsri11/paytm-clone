
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, QrCode, Wallet, CreditCard, User } from 'lucide-react';

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-between items-center z-10">
      <NavLink to="/" className={({ isActive }) => 
        `flex flex-col items-center ${isActive ? 'text-primary-600' : 'text-gray-500'}`
      } end>
        <Home size={20} />
        <span className="text-xs mt-1">Home</span>
      </NavLink>
      
      <NavLink to="/scan" className={({ isActive }) => 
        `flex flex-col items-center ${isActive ? 'text-primary-600' : 'text-gray-500'}`
      }>
        <QrCode size={20} />
        <span className="text-xs mt-1">Scan</span>
      </NavLink>
      
      <div className="flex flex-col items-center -mt-5">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-paytm-teal flex items-center justify-center shadow-lg">
          <Wallet size={22} className="text-white" />
        </div>
        <span className="text-xs mt-1">Pay</span>
      </div>
      
      <NavLink to="/transactions" className={({ isActive }) => 
        `flex flex-col items-center ${isActive ? 'text-primary-600' : 'text-gray-500'}`
      }>
        <CreditCard size={20} />
        <span className="text-xs mt-1">History</span>
      </NavLink>
      
      <NavLink to="/profile" className={({ isActive }) => 
        `flex flex-col items-center ${isActive ? 'text-primary-600' : 'text-gray-500'}`
      }>
        <User size={20} />
        <span className="text-xs mt-1">Profile</span>
      </NavLink>
    </div>
  );
};

export default BottomNavigation;
