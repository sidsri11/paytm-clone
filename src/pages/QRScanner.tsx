
import React, { useState } from 'react';
import { QrCode, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const QRScanner = () => {
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    setScanning(true);
    // In a real app, we would initialize camera access here
    
    // Mock scanning behavior with timeout
    setTimeout(() => {
      setScanning(false);
      // Navigate or show results
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="bg-gray-900 text-white p-4 flex items-center">
        <Link to="/" className="mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-semibold">Scan & Pay</h1>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center p-5">
        <div className={`w-64 h-64 border-2 rounded-lg mb-8 flex items-center justify-center
          ${scanning 
            ? 'border-primary animate-pulse' 
            : 'border-gray-600'
          }`}>
          {scanning ? (
            <div className="text-primary animate-pulse">
              <QrCode size={100} />
            </div>
          ) : (
            <div className="text-gray-500">
              <QrCode size={100} />
              <p className="text-center text-sm mt-2 text-white">Position QR code in frame</p>
            </div>
          )}
        </div>
        
        <Button
          onClick={handleScan}
          disabled={scanning}
          className={`w-full max-w-xs ${scanning ? 'bg-gray-700' : 'bg-primary-600 hover:bg-primary-700'}`}
        >
          {scanning ? 'Scanning...' : 'Tap to Scan'}
        </Button>
        
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-2">Or show your QR code</p>
          <Link to="/my-qr" className="text-primary-400 font-medium">
            My QR Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
