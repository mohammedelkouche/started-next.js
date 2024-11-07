// import React from 'react';
import "@/styles/globals.css";

import React from 'react';

export function Card({ children, className }) {
  return (
    // <div className={`bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden ${className}`}>
    <div className={`bg-primary border border-gray-200 shadow-lg rounded-xl overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    // <div className={`p-6 ${className}`}>
    <div className={`${className}`}>
      {children}
    </div>
  );
}

