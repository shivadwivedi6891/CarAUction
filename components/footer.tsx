'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              TATA MFL
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Your premium car auction platform. Bid on top-tier vehicles or sell your own.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Home</Link></li>
              <li><Link href="/auctions" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Auctions</Link></li>
              <li><Link href="/sell" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Sell</Link></li>
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">About</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">FAQ</Link></li>
              <li><Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Terms</Link></li>
              <li><Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Privacy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#"><Facebook className="text-gray-500 hover:text-blue-600" /></Link>
              <Link href="#"><Twitter className="text-gray-500 hover:text-blue-600" /></Link>
              <Link href="#"><Instagram className="text-gray-500 hover:text-blue-600" /></Link>
              <Link href="#"><Github className="text-gray-500 hover:text-blue-600" /></Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
