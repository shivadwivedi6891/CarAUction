




'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Car, Heart, Share2, MapPin, Clock, Eye, Gavel, Calendar, Fuel, Settings } from 'lucide-react';
import PrivateRoute from '@/components/PrivateRoute';



export default function CarDetailPage() {
  
  const params = useParams();
  const dummyCars = [
  
  {
    id: '1',
    //  id: params.id,
    name: '2019 Ferrari 488 GTB',
    price: 285000,
    image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Los Angeles, CA',
    timeLeft: '2d 14h 30m',
    watchers: 234,
    bids: 47,
    mileage: 12500,
    year: 2019,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    seller: 'Classic Cars Inc.',
    reservePrice: 280000,
    minBid: 290000
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
      year: 2020,
       fuelType: 'Gasoline',
    transmission: 'Automatic',
    seller: 'Classic Cars Inc.',
    reservePrice: 280000,
    minBid: 290000
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
      year: 2021,
       fuelType: 'Gasoline',
    transmission: 'Automatic',
    seller: 'Classic Cars Inc.',
    reservePrice: 280000,
    minBid: 290000
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
      year: 2022,
       fuelType: 'Gasoline',
    transmission: 'Automatic',
    seller: 'Classic Cars Inc.',
    reservePrice: 280000,
    minBid: 290000
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
      year: 2020,
       fuelType: 'Gasoline',
    transmission: 'Automatic',
    seller: 'Classic Cars Inc.',
    reservePrice: 280000,
    minBid: 290000
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
      year: 2019,
       fuelType: 'Gasoline',
    transmission: 'Automatic',
    seller: 'Classic Cars Inc.',
    reservePrice: 280000,
    minBid: 290000
    }
];


  const [isWatching, setIsWatching] = useState(false);
  const [showBidModal, setShowBidModal] = useState(false);
  const [bidAmount, setBidAmount] = useState('');

  const car = dummyCars.find((car) => car.id );

  if (!car) {
    return <div className="p-8 text-center text-red-600">Car not found.</div>;
  }

  const bidHistory = [
    { bidder: 'User123', amount: 285000, time: '2 minutes ago' },
    { bidder: 'CarLover99', amount: 280000, time: '15 minutes ago' },
    { bidder: 'Collector2024', amount: 275000, time: '1 hour ago' },
    { bidder: 'AutoFan88', amount: 270000, time: '2 hours ago' }
  ];

  const handleBid = (e:any) => {
    e.preventDefault();
    alert(`Bid of $${parseInt(bidAmount).toLocaleString()} placed successfully!`);
    setShowBidModal(false);
    setBidAmount('');
  };

  return (
    <PrivateRoute>
     <div className=" dark:from-gray-900 dark:to-gray-800 min-h-screen bg-gray-50">
     
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
   
          <div className="lg:col-span-2">
           
            <div className="relative mb-6">
              <img src={car.image} alt={car.name} className="w-full h-96 object-cover rounded-2xl" />
             
              <div className="absolute top-4 right-4 flex space-x-2">
              
               
              </div>
            </div>

         
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">{car.mileage.toLocaleString()} miles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Fuel className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">{car.fuelType}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">{car.transmission}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">{car.location}</span>
                </div>
              </div>

      
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  This stunning {car.year} Ferrari 488 GTB is a rare find that combines luxury, performance, and style. 
                  With only {car.mileage.toLocaleString()} miles on the odometer, this vehicle has been meticulously 
                  maintained and is in excellent condition. The car features a powerful engine, premium interior finishes, 
                  and advanced technology throughout.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Engine</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Engine Type: V8 Twin Turbo</li>
                      <li>Horsepower: 661 HP</li>
                      <li>Torque: 560 lb-ft</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Performance</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>0-60 mph: 3.0 seconds</li>
                      <li>Top Speed: 205 mph</li>
                      <li>Drivetrain: RWD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

   
          <div className="space-y-6">
         
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Current Bid</h2>
                <div className="flex items-center text-sm text-gray-600">
                 
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  ${car.price.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">
                  Reserve: ${car.reservePrice.toLocaleString()}
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Minimum bid:</span>
                  <span className="font-semibold">${car.minBid.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total bids:</span>
                  <span className="font-semibold">{car.bids}</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-sm text-gray-600 mb-2">Auction ends in:</div>
                <div className="text-lg font-bold text-red-600">{car.timeLeft}</div>
              </div>
              
              <button
                onClick={() => setShowBidModal(true)}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg flex items-center justify-center"
              >
                <Gavel className="h-4 w-4 mr-2" />
                Place Bid
              </button>
            </div>

       
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Seller Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Seller:</span>
                  <span className="font-semibold">{car.seller}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Rating:</span>
                  <span className="font-semibold">4.8/5 (127 reviews)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Location:</span>
                  <span className="font-semibold">{car.location}</span>
                </div>
              </div>
            </div>

         
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Bid History</h2>
              <div className="space-y-3">
                {bidHistory.map((bid, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                    <div>
                      <div className="font-semibold text-sm">{bid.bidder}</div>
                      <div className="text-xs text-gray-600">{bid.time}</div>
                    </div>
                    <div className="font-bold text-blue-600">
                      ${bid.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

     
     
    </div>

    </PrivateRoute>
  );
}
