// import React from 'react';

// export function Card({ children, className }) {
//   return (
//     <div className={`bg-white shadow-md rounded-lg ${className}`}>
//       {children}
//     </div>
//   );
// }

// export function CardContent({ children, className }) {
//   return (
//     <div className={`p-4 ${className}`}>
//       {children}
//     </div>
//   );
// }

import React from 'react';

export function Card({ children, className }) {
  return (
    <div className={`bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

