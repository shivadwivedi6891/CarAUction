'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Car, Search, Eye, Clock, MapPin } from 'lucide-react';

export default function AuctionsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const cars = [
    {
      id: 1,
      name: '2019 Ferrari 488 GTB',
      price: 285000,
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg',
      location: 'Los Angeles, CA',
      timeLeft: '2d 14h 30m',
      watchers: 234,
      bids: 47,
      mileage: 12500,
      year: 2019
    },
    {
      id: 2,
      name: '2020 Porsche 911 Carrera',
      price: 125000,
      image: 'https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg',
      location: 'Miami, FL',
      timeLeft: '1d 8h 15m',
      watchers: 156,
      bids: 32,
      mileage: 8400,
      year: 2020
    },
    {
      id: 3,
      name: '2021 Lamborghini Huracán',
      price: 195000,
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg',
      location: 'New York, NY',
      timeLeft: '3h 45m',
      watchers: 189,
      bids: 28,
      mileage: 5200,
      year: 2021
    },
    {
      id: 4,
      name: '2022 BMW M3',
      price: 72000,
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
      location: 'Chicago, IL',
      timeLeft: '5d 12h 20m',
      watchers: 92,
      bids: 19,
      mileage: 3800,
      year: 2022
    },
    {
      id: 5,
      name: '2020 Mercedes-Benz AMG GT',
      price: 145000,
      image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg',
      location: 'Dallas, TX',
      timeLeft: '4d 6h 10m',
      watchers: 167,
      bids: 41,
      mileage: 9600,
      year: 2020
    },
    {
      id: 6,
      name: '2019 Audi R8',
      price: 165000,
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg',
      location: 'San Francisco, CA',
      timeLeft: '6d 18h 45m',
      watchers: 203,
      bids: 35,
      mileage: 7200,
      year: 2019
    }
  ];

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Car Auctions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover and bid on premium vehicles from trusted sellers
          </p>
        </div>

        {/* Search */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-800 p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Search by make, model, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {filteredCars.length} auctions found
          </p>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-sm font-medium text-gray-900 dark:text-gray-100">
                  <Clock className="h-3 w-3 inline mr-1" />
                  {car.timeLeft}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{car.name}</h3>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {car.location}
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {car.mileage.toLocaleString()} miles • {car.year}
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${car.price.toLocaleString()}
                  </span>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Eye className="h-4 w-4 mr-1" />
                    {car.watchers} watching
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{car.bids} bids</span>
                  <Link href={`/car/${car.id}`} className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-xl">No auctions found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
