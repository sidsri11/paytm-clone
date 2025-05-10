
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2, Download, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MyQRCode = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white p-4 flex items-center border-b">
        <Link to="/" className="mr-4">
          <ArrowLeft size={22} />
        </Link>
        <h1 className="text-xl font-semibold">My QR Code</h1>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center p-5">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-primary-600 flex items-center justify-center mb-2">
              <span className="text-white text-2xl font-bold">R</span>
            </div>
            <h2 className="font-bold text-lg">Rajesh Kumar</h2>
            <p className="text-sm text-gray-500 mb-4">rajesh@upi</p>
            
            <div className="border-4 border-primary-600 rounded-lg p-2 mb-4">
              {/* Placeholder for QR code - in a real app, this would be an actual QR code */}
              <div className="w-52 h-52 bg-gray-100 flex items-center justify-center">
                {/* Sample QR pattern for visual representation */}
                <div className="grid grid-cols-5 gap-1">
                  {Array(25).fill(0).map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-3 h-3 ${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 text-center mb-4">
              Scan this code or share with friends to receive money
            </p>
            
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center">
                <Share2 size={18} className="mr-1" /> Share
              </Button>
              <Button variant="outline" className="flex items-center">
                <Download size={18} className="mr-1" /> Save
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <Button className="w-full bg-primary-600 hover:bg-primary-700">
          <Wallet className="mr-2" size={18} />
          Check Balance
        </Button>
      </div>
    </div>
  );
};

export default MyQRCode;
