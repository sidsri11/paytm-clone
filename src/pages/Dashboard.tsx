
import React from 'react';
import ProfileHeader from '../components/dashboard/ProfileHeader';
import BalanceCard from '../components/dashboard/BalanceCard';
import QuickActions from '../components/dashboard/QuickActions';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import { Transaction } from '../components/dashboard/RecentTransactions';

// Mock data
const mockTransactions: Transaction[] = [
  {
    id: '1',
    name: 'Rahul Kumar',
    amount: 500,
    type: 'credit',
    date: 'Today, 2:30 PM'
  },
  {
    id: '2',
    name: 'Electricity Bill',
    amount: 1230.45,
    type: 'debit',
    date: 'Yesterday, 5:15 PM'
  },
  {
    id: '3',
    name: 'Mobile Recharge',
    amount: 199,
    type: 'debit',
    date: '22 May, 11:30 AM'
  }
];

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ProfileHeader name="Rajesh" />
      
      <div className="px-5 pb-5 space-y-6">
        <BalanceCard balance="15,482.75" />
        <QuickActions />
      </div>
      
      <div className="flex-1 flex flex-col">
        <RecentTransactions transactions={mockTransactions} />
      </div>
    </div>
  );
};

export default Dashboard;
