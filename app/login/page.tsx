// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { Car, Eye, EyeOff } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '@/context/AuthContext';

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     userType: 'buyer' // buyer or seller
//   });

//   const router = useRouter();
//   const { login } = useAuth();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

// const handleSubmit = (e: React.FormEvent) => {
//   e.preventDefault();

//   const dummyUser = {
//     name: formData.email,
//     id: crypto.randomUUID(),
//     role: formData.userType as 'buyer' | 'seller',
//     kycCompleted: false // always false initially
//   };

//   login(dummyUser);

//   // Check KYC
//   if (dummyUser.kycCompleted) {
//     router.push(`/dashboard/${dummyUser.role}`);
//   } else {
//     router.push('/kyc');
//   }
// };
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white-600 via-purple-600 to-red-800 flex items-center justify-center p-4">
//       <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md">
//         {/* Logo */}
//         <div className="text-center mb-8">
//           <div className="flex justify-center mb-4">
//             <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
//               <Car className="h-10 w-10 text-white" />
//             </div>
//           </div>
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Welcome Back
//           </h1>
//           <p className="text-gray-600 mt-2">Sign in to your AutoBid account</p>
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* User Type Selection */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">I am a:</label>
//             <div className="flex space-x-4">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="userType"
//                   value="buyer"
//                   checked={formData.userType === 'buyer'}
//                   onChange={(e) => setFormData({...formData, userType: e.target.value})}
//                   className="mr-2"
//                 />
//                 Buyer
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="userType"
//                   value="seller"
//                   checked={formData.userType === 'seller'}
//                   onChange={(e) => setFormData({...formData, userType: e.target.value})}
//                   className="mr-2"
//                 />
//                 Seller
//               </label>
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               required
//               value={formData.email}
//               onChange={(e) => setFormData({...formData, email: e.target.value})}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 required
//                 value={formData.password}
//                 onChange={(e) => setFormData({...formData, password: e.target.value})}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
//               >
//                 {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//               </button>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
//           >
//             Sign In
//           </button>
//         </form>

//         {/* Links */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Don't have an account?{' '}
//             <Link href="/register" className="text-blue-600 hover:underline font-medium">
//               Sign up here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }      







'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Car, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {


const [user, setUser] = useState<{
  name: string;
  id: string;
  role: 'buyer' | 'seller';
  kycCompleted: boolean;
} | null>(null);



  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'buyer'
  });

  const router = useRouter();
  const { login } = useAuth();
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };


  useEffect(() => {
  if (user) {
    
    if (user.kycCompleted) {
      router.push(`/dashboard/${user.role}`);
    } else {
      router.push('/kyc');
    }
  }
}, [user]);



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dummyUser = {
      name: formData.email,
      id: crypto.randomUUID(),
      role: formData.userType as 'buyer' | 'seller',
      kycCompleted: false,
    
    };

    

   



    login(dummyUser);
    if (dummyUser.kycCompleted) {
      router.push(`/dashboard/${dummyUser.role}`);
    } else {
      router.push('/kyc');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-200 to-pink-300 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 w-full max-w-md animate-fadeIn border border-purple-200">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4 animate-bounce">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md">
              <Car className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500">
            Welcome Back
          </h1>
          <p className="text-gray-600 mt-1 text-sm">Sign in to your AutoBid account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">I am a:</label>
            <div className="flex gap-6">
              {['buyer', 'seller'].map(type => (
                <label key={type} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value={type}
                    checked={formData.userType === type}
                    onChange={handleChange}
                    className="accent-purple-600 mr-2"
                  />
                  <span className="capitalize text-sm text-gray-800">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. user@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-600 hover:underline font-medium">
            Sign up here
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 2s ease-out;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
