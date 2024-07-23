import React, { useState } from 'react';
import { FaUser, FaPhone, FaIdCard, FaHome } from 'react-icons/fa';
import axios from 'axios';

const Visitors = () => {
  const [visitorName, setVisitorName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [houseNumber, setHouseNumber] = useState('');

  const handleVisitorEntry = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/visitors', {
        visitorName,
        phoneNumber,
        idNumber,
        houseNumber
      });
      console.log('Visitor entry recorded:', response.data);
      setVisitorName('');
      setPhoneNumber('');
      setIdNumber('');
      setHouseNumber('');
    } catch (error) {
      console.error('Error recording visitor entry:', error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Visitor Tracking</h1>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <FaUser className="mr-2 text-blue-500" /> Record Visitor Entry
        </h2>
        <form onSubmit={handleVisitorEntry}>
          {/* Visitor's Name */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <FaUser className="mr-2 text-gray-600" /> Visitor's Name
            </label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter visitor's name"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
            />
          </div>
          {/* Phone Number */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <FaPhone className="mr-2 text-gray-600" /> Phone Number
            </label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              placeholder="Enter visitor's phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {/* ID Number */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <FaIdCard className="mr-2 text-gray-600" /> ID Number
            </label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter visitor's ID number"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
            />
          </div>
          {/* House Number */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <FaHome className="mr-2 text-gray-600" /> House Number
            </label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter house number"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Record Entry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Visitors;
