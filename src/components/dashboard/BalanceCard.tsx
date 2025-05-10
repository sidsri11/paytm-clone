
import React from 'react';
import { Wallet } from 'lucide-react';

interface BalanceCardProps {
  balance: string;
}

const BalanceCard = ({ balance }: BalanceCardProps) => {
  return (
    <div className="bg-gradient-to-r from-primary-700 to-primary-600 rounded-lg p-5 text-white shadow-lg animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold">Total Balance</h2>
        <Wallet className="text-primary-100" size={22} />
      </div>
      <div className="flex items-baseline space-x-1">
        <span className="text-2xl font-bold">₹</span>
        <span className="text-3xl font-bold">{balance}</span>
      </div>
      <div className="text-xs opacity-80 mt-1">Available Balance</div>
    </div>
  );
};

export default BalanceCard;
