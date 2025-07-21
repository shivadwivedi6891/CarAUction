'use client'; 

import { useEffect, useState } from 'react';
import Link from 'next/link';


import { Car, Gavel, Heart, Trophy, Eye, Clock, LogOut } from 'lucide-react';

import PrivateRoute from '@/components/PrivateRoute';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function BuyerDashboard() {

  const router = useRouter()

  const {user} = useAuth();
  const [activeTab, setActiveTab] = useState('bids');

  useEffect(() => {
    if (user && !user?.kycCompleted) {
      router.push('/kyc');
    }
  }, [user, router]);


  const myBids = [
    {
      id: 1,
      carName: '2019 Ferrari 488 GTB',
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bidAmount: 285000,
      status: 'leading',
      timeLeft: '2d 14h 30m'
    },
    {
      id: 2,
      carName: '2020 Porsche 911 Carrera',
      image: 'https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bidAmount: 120000,
      status: 'outbid',
      timeLeft: '1d 8h 15m'
    }
  ];

  const wonAuctions = [
    {
      id: 1,
      carName: '2018 McLaren 570S',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      winningBid: 175000,
      status: 'payment_pending'
    }
  ];

  const watchingList = [
    {
      id: 1,
      carName: '2022 BMW M3',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      currentBid: 72000,
      timeLeft: '5d 12h 20m'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'leading': return 'bg-green-200 dark:bg-green-900 text-green-900 dark:text-green-100';
      case 'outbid': return 'bg-red-200 dark:bg-red-900 text-red-900 dark:text-red-100';
      case 'payment_pending': return 'bg-yellow-200 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100';
      default: return 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100';
    }
  };

  return (
    <PrivateRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back, John!</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage your bids and track your auction activity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Gavel className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Active Bids</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Trophy className="h-6 w-6 text-green-600 dark:text-green-300" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Won Auctions</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">1</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                  <Heart className="h-6 w-6 text-red-600 dark:text-red-300" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Watching</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">1</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Eye className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Total Spent</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$175K</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex space-x-8 px-6">
                {['bids', 'won', 'watching'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
                    }`}
                  >
                    {tab === 'bids' ? 'My Bids' : tab === 'won' ? 'Won Auctions' : 'Watching'}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'bids' && myBids.map(bid => (
                <div key={bid.id} className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <img src={bid.image} alt={bid.carName} className="w-20 h-20 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg dark:text-white">{bid.carName}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Your bid: ${bid.bidAmount.toLocaleString()}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bid.status)}`}>
                        {bid.status === 'leading' ? 'Leading' : 'Outbid'}
                      </span>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Clock className="h-4 w-4 mr-1" />
                        {bid.timeLeft}
                      </div>
                    </div>
                  </div>
                  <Link href={`/car/${bid.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    View
                  </Link>
                </div>
              ))}

              {activeTab === 'won' && wonAuctions.map(auction => (
                <div key={auction.id} className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <img src={auction.image} alt={auction.carName} className="w-20 h-20 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg dark:text-white">{auction.carName}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Winning bid: ${auction.winningBid.toLocaleString()}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(auction.status)}`}>
                      Payment Pending
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Pay Now
                  </button>
                </div>
              ))}

              {activeTab === 'watching' && watchingList.map(car => (
                <div key={car.id} className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <img src={car.image} alt={car.carName} className="w-20 h-20 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg dark:text-white">{car.carName}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Current bid: ${car.currentBid.toLocaleString()}</p>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-2">
                      <Clock className="h-4 w-4 mr-1" />
                      {car.timeLeft}
                    </div>
                  </div>
                  <Link href={`/car/${car.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}
