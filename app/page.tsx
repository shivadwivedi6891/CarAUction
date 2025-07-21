'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Car, Eye, Clock, MapPin } from 'lucide-react';

export default function HomePage() {
  const cars = [
    {
      id: 1,
      name: '2019 Ferrari 488 GTB',
      price: 285000,
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg',
      location: 'Los Angeles, CA',
      timeLeft: '2d 14h 30m',
      watchers: 234,
      bids: 47
    },
    {
      id: 2,
      name: '2020 Porsche 911 Carrera',
      price: 125000,
      image: 'https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg',
      location: 'Miami, FL',
      timeLeft: '1d 8h 15m',
      watchers: 156,
      bids: 32
    },
    {
      id: 3,
      name: '2021 Lamborghini Huracán',
      price: 195000,
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg',
      location: 'New York, NY',
      timeLeft: '3h 45m',
      watchers: 189,
      bids: 28
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Premium Car Auctions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover exceptional vehicles, place competitive bids, and drive away with your dream car
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auctions" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl">
              Start Bidding
            </Link>
            <Link href="/auctions" className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl font-semibold text-lg hover:bg-blue-50 dark:hover:bg-gray-800">
              Browse Auctions
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-16">Featured Auctions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
                 
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-black dark:text-white">{car.name}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {car.location}
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ${car.price.toLocaleString()}
                    </span>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                     
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">{car.bids} bids</span>
                    <Link href={`/car/${car.id}`} className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
