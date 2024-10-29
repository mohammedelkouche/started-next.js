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
                // className="w-full max-w-sm"
                // className="w-full max-w-[90%] mx-auto"
                // className="max-w-lg mx-auto"
                // className="max-w-sm mx-auto"
                className="mx-auto"
                style={{ maxWidth: "16rem" }}
                // style={{ maxWidth: "90%" }}
                >
                <CarouselContent>

					{products.map((product) => (

                    // <CarouselItem key={index} className="carousel-item">
                    // <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <CarouselItem 
						key={product.id} 
                      	// className="sm:basis-1/2 md:basis-1/3"
                      	// className="basis-[40%] sm:basis-[40%] md:basis-[30%] lg:basis-[30%] shrink-0"
                      	// className="basis-[33%]  shrink-0"
						//   className="basis-[50%] sm:basis-[33%] shrink-0"
						// className="basis-[48%] sm:basis-[33%] max-w-[90px] shrink-0"
						
						// Use max-width constraints with basis values for responsive sizing control
						className="basis-[50%] max-w-[86px] sm:basis-[33%] sm:max-w-[120px] lg:basis-[25%] lg:max-w-[100px] shrink-0"
                    >
                        <div className="p-1">
                        <Card>
                            {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                            <CardContent className="flex aspect-square items-center justify-center">
								<img 
									src={product.image}
									alt={product.name}
									// className='object-contain h-full w-full'
									className="w-full h-full object-cover " // Adjust to fit image style
								/>
								
                            {/* <span className="text-3xl font-semibold">hello</span> */}
                            {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </div>
  );
}
