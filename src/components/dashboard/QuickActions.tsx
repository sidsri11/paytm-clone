
import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Wallet, CreditCard, Smartphone, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';

const actions = [
  { name: 'Send Money', icon: <ArrowUpRight size={20} />, color: 'bg-blue-100 text-blue-600', path: '/send' },
  { name: 'Request', icon: <ArrowDownLeft size={20} />, color: 'bg-green-100 text-green-600', path: '/request' },
  { name: 'Scan QR', icon: <QrCode size={20} />, color: 'bg-purple-100 text-purple-600', path: '/scan' },
  { name: 'Add Money', icon: <Wallet size={20} />, color: 'bg-amber-100 text-amber-600', path: '/add-money' },
  { name: 'Pay Bills', icon: <CreditCard size={20} />, color: 'bg-pink-100 text-pink-600', path: '/pay-bills' },
  { name: 'Recharge', icon: <Smartphone size={20} />, color: 'bg-indigo-100 text-indigo-600', path: '/recharge' }
];

const QuickActions = () => {
  return (
    <div className="pb-4">
      <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
      <div className="grid grid-cols-3 gap-3 animate-slide-up">
        {actions.map((action, index) => (
          <Link to={action.path} key={index} className="flex flex-col items-center bg-white p-3 rounded-lg shadow-sm">
            <div className={`${action.color} p-2 rounded-full mb-2`}>
              {action.icon}
            </div>
            <span className="text-xs font-medium text-center">{action.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
