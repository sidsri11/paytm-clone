
import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  type: 'credit' | 'debit';
  date: string;
  imageUrl?: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions = ({ transactions }: RecentTransactionsProps) => {
  return (
    <div className="bg-white rounded-t-xl p-5 flex-1">
      <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
      
      {transactions.length === 0 ? (
        <div className="text-center py-6 text-gray-500 text-sm">
          No transactions yet
        </div>
      ) : (
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between animate-slide-up">
              <div className="flex items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 ${
                  transaction.type === 'credit' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-red-100 text-red-600'
                }`}>
                  {transaction.imageUrl ? (
                    <img 
                      src={transaction.imageUrl} 
                      alt={transaction.name} 
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    transaction.type === 'credit' 
                      ? <ArrowDownLeft size={20} /> 
                      : <ArrowUpRight size={20} />
                  )}
                </div>
                <div>
                  <p className="font-medium text-sm">{transaction.name}</p>
                  <p className="text-xs text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <div className={`font-semibold ${
                transaction.type === 'credit' 
                  ? 'text-green-600' 
                  : 'text-red-600'
              }`}>
                {transaction.type === 'credit' ? '+' : '-'} ₹{transaction.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;
