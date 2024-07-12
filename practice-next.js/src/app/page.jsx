import React from 'react';
import ProductList from '@/components/ProductList/ProductList';
// import "@/styles/
// import './styles/home/home.css';
import '../styles/Home/home.css';

const products = [
  {
    id: 1,
    name: 'showme',
    description: 'This is product 1',
    price: 9.99,
    image: '/product1.jpg',
  },
  {
    id: 2,
    name: 'samsong',
    description: 'This is product 2',
    price: 14.99,
    image: '/product2.jpg',
  },
  {
    id: 3,
    name: 'iphon 14',
    description: 'This is product 3',
    price: 19.99,
    image: '/product3.jpg',
  },
  // Add more products as needed
];

export default function Home() {
  return (
    <div className='home-part'>
      <h1> PRODUCT LIST </h1>
      <ProductList products={products}/>
    </div>
  );
}
