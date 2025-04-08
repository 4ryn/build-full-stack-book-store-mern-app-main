import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Main loader container */}
      <div className="relative">
        {/* Outer spinning circle */}
        <div className="absolute inset-0 rounded-full border-8 border-yellow-200 border-t-yellow-500 animate-spin"></div>
        
        {/* Middle pulse ring */}
        <div className="absolute inset-2 rounded-full border-4 border-amber-300 opacity-75 animate-pulse"></div>
        
        {/* Inner spinning circle (opposite direction) */}
        <div className="absolute inset-4 rounded-full border-4 border-yellow-400 border-b-amber-600 animate-spin-slow"></div>
        
        {/* Center dot */}
        <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-500 shadow-lg animate-pulse"></div>
      </div>
      
      {/* Text below */}
      <p className="mt-6 text-lg font-medium text-amber-700 animate-pulse">
        Loading<span className="dots-animation">...</span>
      </p>
      
      {/* Add required CSS for custom animations */}
      <style jsx>{`
        @keyframes dotsAnimation {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60%, 100% { content: '...'; }
        }
        .dots-animation::after {
          content: '';
          animation: dotsAnimation 1.5s infinite;
        }
        @keyframes spin-slow {
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;