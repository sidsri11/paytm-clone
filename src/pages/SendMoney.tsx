import React, { useState } from 'react';
import { ArrowLeft, Users, Search, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';

interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  avatar?: string;
}

// Mock data
const contacts: Contact[] = [
  { id: '1', name: 'Rahul Kumar', phoneNumber: '+91 98765 43210' },
  { id: '2', name: 'Priya Singh', phoneNumber: '+91 87654 32109' },
  { id: '3', name: 'Deepak Sharma', phoneNumber: '+91 76543 21098' },
  { id: '4', name: 'Neha Gupta', phoneNumber: '+91 65432 10987' },
  { id: '5', name: 'Amit Patel', phoneNumber: '+91 54321 09876' },
];

const recentContacts = contacts.slice(0, 3);

const SendMoney = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredContacts = searchTerm 
    ? contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        contact.phoneNumber.includes(searchTerm)
      )
    : [];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white p-4 flex items-center border-b">
        <Link to="/" className="mr-4">
          <ArrowLeft size={22} />
        </Link>
        <h1 className="text-xl font-semibold">Send Money</h1>
      </header>
      
      <div className="p-5">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Name, Phone, or UPI ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {searchTerm ? (
          <div>
            {filteredContacts.length > 0 ? (
              <div className="space-y-4">
                {filteredContacts.map(contact => (
                  <Link 
                    to={`/send/${contact.id}`} 
                    key={contact.id}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-50"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mr-3">
                      {contact.avatar ? (
                        <img 
                          src={contact.avatar} 
                          alt={contact.name} 
                          className="h-full w-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="font-medium">{contact.name.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-xs text-gray-500">{contact.phoneNumber}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-500">No matching contacts found</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            {/* Recent Contacts */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-600 mb-3">RECENT</h2>
              <div className="flex space-x-5">
                {recentContacts.map(contact => (
                  <Link key={contact.id} to={`/send/${contact.id}`} className="flex flex-col items-center">
                    <div className="h-14 w-14 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mb-1">
                      {contact.avatar ? (
                        <img 
                          src={contact.avatar} 
                          alt={contact.name} 
                          className="h-full w-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="font-medium text-xl">{contact.name.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <p className="text-xs font-medium text-center">{contact.name.split(' ')[0]}</p>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Other options */}
            <div>
              <h2 className="text-sm font-semibold text-gray-600 mb-3">OTHER OPTIONS</h2>
              <div className="space-y-3">
                <Link 
                  to="/scan" 
                  className="flex items-center p-3 bg-gray-50 rounded-lg"
                >
                  <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-3">
                    <QrCode size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Scan QR Code</p>
                    <p className="text-xs text-gray-500">Pay using QR code</p>
                  </div>
                </Link>
                
                <Link 
                  to="/contacts" 
                  className="flex items-center p-3 bg-gray-50 rounded-lg"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3">
                    <Users size={18} />
                  </div>
                  <div>
                    <p className="font-medium">All Contacts</p>
                    <p className="text-xs text-gray-500">View your contacts</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SendMoney;
