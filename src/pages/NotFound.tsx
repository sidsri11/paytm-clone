
import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-paytm-lightBg p-5">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-primary-600">404</h1>
        <p className="text-xl text-gray-700 mb-6">Page not found</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-primary-600 hover:bg-primary-700"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
