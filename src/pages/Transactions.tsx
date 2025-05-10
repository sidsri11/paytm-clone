
import React, { useState } from 'react';
import { Transaction } from '../components/dashboard/RecentTransactions';
import { ArrowUpRight, ArrowDownLeft, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
  },
  {
    id: '4',
    name: 'Priya Singh',
    amount: 2000,
    type: 'credit',
    date: '20 May, 9:45 AM'
  },
  {
    id: '5',
    name: 'Grocery Store',
    amount: 850.75,
    type: 'debit',
    date: '18 May, 7:20 PM'
  },
  {
    id: '6',
    name: 'Movie Tickets',
    amount: 450,
    type: 'debit',
    date: '15 May, 3:10 PM'
  }
];

const TransactionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredTransactions = mockTransactions.filter(transaction => {
    const matchesSearch = transaction.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeTab === 'all') return matchesSearch;
    return matchesSearch && transaction.type === (activeTab === 'credit' ? 'credit' : 'debit');
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="p-5 bg-white sticky top-0 z-10 border-b">
        <h1 className="text-xl font-bold mb-4">Transactions</h1>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </header>

      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="credit">Received</TabsTrigger>
            <TabsTrigger value="debit">Spent</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="flex-1 p-5">
        {filteredTransactions.length > 0 ? (
          <div className="space-y-6">
            {filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between animate-slide-up">
                <div className="flex items-center">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center mr-4 ${
                    transaction.type === 'credit' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {transaction.type === 'credit' 
                      ? <ArrowDownLeft size={20} /> 
                      : <ArrowUpRight size={20} />}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.name}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
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
        ) : (
          <div className="text-center py-10 text-gray-500">
            <p>No transactions found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsPage;
