import React, { useState } from 'react';
import { FaCar, FaUser, FaPhone, FaClock, FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';

const Parking = () => {
  const [carPlates, setCarPlates] = useState('');
  const [driverName, setDriverName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [duration, setDuration] = useState('');

  const handleParkingRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/parking', {
        carPlates,
        driverName,
        phoneNumber,
        departureTime,
        duration
      });
      console.log('Parking request submitted:', response.data);
      setCarPlates('');
      setDriverName('');
      setPhoneNumber('');
      setDepartureTime('');
      setDuration('');
    } catch (error) {
      console.error('Error submitting parking request:', error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Parking Coordination</h1>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <FaCar className="mr-2 text-blue-500" /> Parking Request
        </h2>
        <form onSubmit={handleParkingRequest}>
          {/* Car Plates */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <FaCar className="mr-2 text-gray-600" /> Car Plates
            </label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter car plates"
              value={carPlates}
              onChange={(e) => setCarPlates(e.target.value)}
            />
          </div>
          {/* Driver's Name */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <FaUser className="mr-2 text-gray-600" /> Driver's Name
            </label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter driver's name"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
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
              placeholder="Enter driver's phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {/* Departure Time */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <FaCalendarAlt className="mr-2 text-gray-600" /> Departure Time
            </label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="datetime-local"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
            />
          </div>
          {/* Duration */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <FaClock className="mr-2 text-gray-600" /> Duration
            </label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter duration (e.g., 2 hours)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Parking;
