
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CreditCard, Settings, User, Bell, Ticket, Shield, HelpCircle, LogOut } from 'lucide-react';

const menuItems = [
  { icon: <User size={20} />, label: 'Personal Information', path: '/profile/personal' },
  { icon: <CreditCard size={20} />, label: 'Payment Methods', path: '/profile/payment' },
  { icon: <Bell size={20} />, label: 'Notifications', path: '/profile/notifications' },
  { icon: <Ticket size={20} />, label: 'Rewards & Offers', path: '/profile/rewards' },
  { icon: <Shield size={20} />, label: 'Privacy & Security', path: '/profile/security' },
  { icon: <HelpCircle size={20} />, label: 'Help & Support', path: '/profile/help' },
];

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-paytm-lightBg">
      <header className="bg-white p-5 border-b">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Profile</h1>
          <Button variant="ghost" size="icon">
            <Settings size={22} />
          </Button>
        </div>
      </header>
      
      <div className="p-5">
        <Card className="shadow-sm bg-white mb-5">
          <div className="p-5 flex items-center">
            <div className="h-16 w-16 rounded-full bg-primary-600 flex items-center justify-center mr-4">
              <span className="text-white text-2xl font-bold">R</span>
            </div>
            <div>
              <h2 className="font-bold text-lg">Rajesh Kumar</h2>
              <p className="text-sm text-gray-500">+91 98765 43210</p>
              <p className="text-sm text-primary-600 mt-1">View KYC Status</p>
            </div>
          </div>
        </Card>
        
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <Button 
              key={index}
              variant="ghost" 
              className="w-full justify-start bg-white shadow-sm border py-6 text-base font-normal"
              onClick={() => console.log(`Navigate to ${item.path}`)}
            >
              <div className="mr-3 text-gray-600">{item.icon}</div>
              <span>{item.label}</span>
            </Button>
          ))}
          
          <Button 
            variant="ghost" 
            className="w-full justify-start bg-white shadow-sm border py-6 text-base font-normal text-red-600"
          >
            <LogOut size={20} className="mr-3" />
            <span>Log Out</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
