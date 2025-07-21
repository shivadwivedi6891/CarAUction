'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Car, PlusCircle, Eye, Gavel, TrendingUp, LogOut } from 'lucide-react';
import PrivateRoute from '@/components/PrivateRoute';

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState('listings');

  // Sample data
  const myListings = [
    {
      id: 1,
      carName: '2019 Ferrari 488 GTB',
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      startingBid: 250000,
      currentBid: 285000,
      reservePrice: 280000,
      timeLeft: '2d 14h 30m',
      bids: 47,
      watchers: 234,
      status: 'active'
    },
    {
      id: 2,
      carName: '2020 Porsche 911 Carrera',
      image: 'https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      startingBid: 100000,
      currentBid: 125000,
      reservePrice: 130000,
      timeLeft: '1d 8h 15m',
      bids: 32,
      watchers: 156,
      status: 'active'
    }
  ];

  const recentBids = [
    { bidder: 'User123', amount: 285000, car: 'Ferrari 488 GTB', time: '2 minutes ago' },
    { bidder: 'CarLover99', amount: 125000, car: 'Porsche 911', time: '15 minutes ago' },
    { bidder: 'Collector2024', amount: 280000, car: 'Ferrari 488 GTB', time: '1 hour ago' }
  ];

  return (

    <PrivateRoute>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
   

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Seller Dashboard</h1>
            <p className="text-gray-600">Manage your car listings and track sales</p>
          </div>
          <button className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg">
            <PlusCircle className="h-5 w-5 mr-2" />
            List New Car
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Car className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active Listings</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <Gavel className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Bids</p>
                <p className="text-2xl font-bold text-gray-900">79</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Eye className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Watchers</p>
                <p className="text-2xl font-bold text-gray-900">390</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Potential Revenue</p>
                <p className="text-2xl font-bold text-gray-900">$410K</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('listings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'listings'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                My Listings
              </button>
              <button
                onClick={() => setActiveTab('bids')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'bids'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Recent Bids
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* My Listings Tab */}
            {activeTab === 'listings' && (
              <div className="space-y-6">
                {myListings.map((listing) => (
                  <div key={listing.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start space-x-6">
                      <img src={listing.image} alt={listing.carName} className="w-32 h-32 rounded-lg object-cover" />
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{listing.carName}</h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600">Starting Bid</p>
                            <p className="font-semibold">${listing.startingBid.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Current Bid</p>
                            <p className="font-semibold text-green-600">${listing.currentBid.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Reserve Price</p>
                            <p className="font-semibold">${listing.reservePrice.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Time Left</p>
                            <p className="font-semibold text-red-600">{listing.timeLeft}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-6 mb-4">
                          <div className="flex items-center space-x-1">
                            <Gavel className="h-4 w-4 text-gray-600" />
                            <span className="text-sm">{listing.bids} bids</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4 text-gray-600" />
                            <span className="text-sm">{listing.watchers} watching</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            listing.currentBid >= listing.reservePrice 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {listing.currentBid >= listing.reservePrice ? 'Reserve Met' : 'Reserve Not Met'}
                          </span>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Link href={`/car/${listing.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            View Listing
                          </Link>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Recent Bids Tab */}
            {activeTab === 'bids' && (
              <div className="space-y-4">
                {recentBids.map((bid, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-semibold">{bid.bidder}</p>
                      <p className="text-sm text-gray-600">{bid.car}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">${bid.amount.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">{bid.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </PrivateRoute>
  );
}