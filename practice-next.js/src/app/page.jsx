import React from 'react';
import ProductList from '@/components/ProductList/ProductList';
// import "@/styles/
// import './styles/home/home.css';
import '../styles/Home/home.css'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const products = [
  {
    id: 1,
    name: 'showme',
    description: 'This is product 1',
    price: 9.99,
    image: '3-User.svg',
    // image: '/product1.jpg',
  },
  {
    id: 2,
    name: 'samsong',
    description: 'This is product 2',
    price: 14.99,
    image: 'game.svg',
    // image: '/product2.jpg',
  },
  {
    id: 3,
    name: 'iphon 14',
    description: 'This is product 3',
    price: 19.99,
    image: 'Profile.svg',
    // image: '/product3.jpg',
  },
  {
    id: 4,
    name: 'stickers 15',
    description: 'This is product 4',
    price: 21.50,
    image: 'next.svg',
    // image: '/product3.jpg',
  },
  {
    id: 5,
    name: 'avatar1',
    description: 'This is product 5',
    price: 21.50,
    image: 'user1.svg',
    // image: '/product3.jpg',
  },
  {
    id: 6,
    name: 'avatar2',
    description: 'This is product 6',
    price: 21.50,
    image: 'user2.svg',
    // image: '/product3.jpg',
  },
  {
    id: 7,
    name: 'avatar3',
    description: 'This is product 7',
    price: 21.50,
    image: 'avatar3.jpeg',
    // image: '/product3.jpg',
  },
  {
    id: 8,
    name: 'avatar4',
    description: 'This is product 8',
    price: 21.50,
    image: 'avatar4.jpeg',
    // image: '/product3.jpg',
  },
];

export default function Home() {
  return (
    <div className='home-part'>
      <h1> PRODUCT LIST </h1>
      <ProductList products={products}/>
        <div>
            <h2>test</h2>
            <Carousel
                opts={{
                    align: "start",
                }}
                // className="w- [50 px]"
                className="w-full max-w-sm"
                >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>

                    // <CarouselItem key={index} className="lg:w-1/6 ">
                    // <div className="p-1">
                    //     <Card>
                    //     <CardContent className="flex aspect-square items-center justify-center p-6">
                    //         <span className="text-3xl font-semibold">{index + 1}</span>
                    //     </CardContent>
                    //     </Card>
                    // </div>
                    // </CarouselItem>

                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </div>
  );
}
