'use client';

import { useState } from 'react';
import { Car, Upload, CheckCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function KYCPage() {
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    idType: 'drivers_license',
    idNumber: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    idFront: false,
    idBack: false,
    proofOfAddress: false
  });

  const { completeKYC, user } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    completeKYC();
    alert('KYC submitted successfully! Redirecting to your dashboard.');
    router.push(user?.role === 'seller' ? '/dashboard/seller' : '/dashboard/buyer');
  };

  const handleFileUpload = (fileType: string) => {
    setUploadedFiles({ ...uploadedFiles, [fileType]: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950 py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Car className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">KYC Verification</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Complete your profile to start using AutoBid
          </p>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    ID Type
                  </label>
                  <select
                    value={formData.idType}
                    onChange={(e) => setFormData({ ...formData, idType: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="drivers_license">Aadhar Card</option>
                    <option value="passport">Passport</option>
                    <option value="national_id">National ID</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ID Number
                </label>
                <input
                  type="text"
                  required
                  value={formData.idNumber}
                  onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your ID number"
                />
              </div>
            </div>

            {/* Address Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Address Information
              </h2>

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Street Address
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your address..."
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {['city', 'state', 'pinCode'].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 capitalize">
                      {field.replace('pinCode', 'Pin Code')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData[field as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Document Upload */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Document Upload
              </h2>
              <div className="space-y-4">
                {[
                  { key: 'idFront', label: 'ID Front' },
                  { key: 'idBack', label: 'ID Back' },
                  { key: 'proofOfAddress', label: 'Proof of Address' }
                ].map(({ key, label }) => (
                  <div
                    key={key}
                    className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4"
                  >
                    <div className="text-center">
                      {uploadedFiles[key as keyof typeof uploadedFiles] ? (
                        <div className="flex items-center justify-center text-green-600">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          <span>{label} Uploaded</span>
                        </div>
                      ) : (
                        <div>
                          <Upload className="h-8 w-8 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                          <p className="text-gray-600 dark:text-gray-400 mb-2">Upload {label}</p>
                          <button
                            type="button"
                            onClick={() => handleFileUpload(key)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                          >
                            Choose File
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
