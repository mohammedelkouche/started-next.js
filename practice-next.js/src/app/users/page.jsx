
// ----------------- first methode ----------------------

// // Page.js
// import React, { useState } from 'react';
// import ProductList from './ProductList';

// const users = [
//   {
//     id: 1,
//     name: 'User 1',
//     description: 'This is user 1',
//     active: true,
//     image: '/user1.jpg',
//   },
//   {
//     id: 2,
//     name: 'User 2',
//     description: 'This is user 2',
//     active: true,
//     image: '/user2.jpg',
//   },
//   {
//     id: 3,
//     name: 'User 3',
//     description: 'This is user 3',
//     active: true,
//     image: '/user3.jpg',
//   },
//   {
//     id: 4,
//     name: 'User 4',
//     description: 'This is user 4',
//     active: true,
//     image: '/user4.jpg',
//   },
//   {
//     id: 5,
//     name: 'User 5',
//     description: 'This is user 5',
//     active: false,
//     image: '/user5.jpg',
//   },
//   {
//     id: 6,
//     name: 'User 6',
//     description: 'This is user 6',
//     active: false,
//     image: '/user6.jpg',
//   },
//   {
//     id: 7,
//     name: 'User 7',
//     description: 'This is user 7',
//     active: false,
//     image: '/user7.jpg',
//   },
//   {
//     id: 8,
//     name: 'User 8',
//     description: 'This is user 8',
//     active: false,
//     image: '/user8.jpg',
//   },
//   {
//     id: 9,
//     name: 'User 9',
//     description: 'This is user 9',
//     active: false,
//     image: '/user9.jpg',
//   },
//   {
//     id: 10,
//     name: 'User 10',
//     description: 'This is user 10',
//     active: false,
//     image: '/user10.jpg',
//   },
// ];
                                            
// const Page = () => {
//   const [activeUsers, setActiveUsers] = useState(users.filter((user) => user.active).slice(0, 4));
//   const [inactiveUsers, setInactiveUsers] = useState(users.filter((user) => !user.active));

//   const handleSearch = (searchTerm) => {
//     const filteredActiveUsers = users.filter((user) => user.active && user.name.toLowerCase().includes(searchTerm.toLowerCase()));
//     const filteredInactiveUsers = users.filter((user) => !user.active && user.name.toLowerCase().includes(searchTerm.toLowerCase()));
//     setActiveUsers(filteredActiveUsers.slice(0, 4));
//     setInactiveUsers(filteredInactiveUsers);
//   };

//   return (
//     <div>
//       <h1>User List</h1>
//       <div className="search-input">
//         <input type="text" placeholder="Search users..." onChange={(e) => handleSearch(e.target.value)} />
//       </div>
//       <div className="user-grid">
//         <h2>Active Users</h2>
//         <ProductList users={activeUsers} />
//       </div>
//       <div className="user-grid">
//         <h2>Inactive Users</h2>
//         <ProductList users={inactiveUsers} />
//       </div>
//     </div>
//   );
// };

// export default Page;

// // ProductList.js
// import React from 'react';
// import ProductCard from './ProductCard';

// const ProductList = ({ users }) => {
//   return (
//     <div className="product-grid">
//       {users.map((user) => (
//         <ProductCard key={user.id} user={user} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;

// // ProductCard.js
// import React from 'react';

// const ProductCard = ({ user }) => {
//   return (
//     <div className="product-card">
//       <img src={user.image} alt={user.name} />
//       <h3>{user.name}</h3>
//       <p>{user.description}</p>
//       <p className={user.active ? 'active' : 'inactive'}>Status: {user.active ? 'Active' : 'Inactive'}</p>
//     </div>
//   );
// };

// export default ProductCard;

// ----------------- seconde methode ----------------------

// pages/index.js
import { useState } from 'react';
import ProductList from '../components/ProductList';

const users = [
  { id: 1, name: 'John Doe', active: true },
  { id: 2, name: 'Jane Smith', active: true },
  { id: 3, name: 'Bob Johnson', active: false },
  { id: 4, name: 'Alice Williams', active: true },
  { id: 5, name: 'Tom Davis', active: false },
  { id: 6, name: 'Sara Lee', active: true },
  { id: 7, name: 'Mike Brown', active: true },
  { id: 8, name: 'Emily Wilson', active: false },
  { id: 9, name: 'David Anderson', active: true },
  { id: 10, name: 'Lisa Taylor', active: true },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeUsers = filteredUsers.filter((user) => user.active);

  return (
    <div>
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ProductList users={activeUsers.slice(0, 4)} />
      <ProductList users={filteredUsers.filter((user) => !activeUsers.includes(user))} />
    </div>
  );
}

// components/ProductList.js
import ProductCard from './ProductCard';

export default function ProductList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <ProductCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// components/ProductCard.js
export default function ProductCard({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Active: {user.active ? 'Yes' : 'No'}</p>
    </div>
  );
}

// ----------------- third methode ----------------------