import React from 'react';
import { FaSearch, FaUser, FaEnvelope, FaPhone, FaHome, FaDollarSign, FaInfoCircle } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 flex items-center justify-between shadow-lg">
        <div className="text-2xl font-bold">NyumbaCare</div>
        <div className="flex-1 mx-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 p-6 bg-gray-100">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white p-4 rounded-lg shadow-md mr-4 flex flex-col items-center">
          <img src="/logo-png.png" alt="Logo" className="w-24 h-auto mb-4" />
          <h2 className="text-xl font-semibold mb-4">Tenant Profile</h2>
          <p className="text-gray-700 flex items-center">
            <FaUser className="mr-2" />
            Name: <span className="font-medium">John Doe</span>
          </p>
          <p className="text-gray-700 flex items-center">
            <FaEnvelope className="mr-2" />
            Email: <span className="font-medium">johndoe@example.com</span>
          </p>
          <p className="text-gray-700 flex items-center">
            <FaPhone className="mr-2" />
            Phone: <span className="font-medium">+254 123-4567</span>
          </p>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 flex flex-col space-y-6">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaHome className="mr-2" /> House Details
            </h2>
            <p className="text-gray-700">
              House Number: <span className="font-medium">PE11</span>
            </p>
            <p className="text-gray-700">
              Address: <span className="font-medium">MARY-PETER COURT</span>
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaDollarSign className="mr-2" /> Financial Overview
            </h2>
            <p className="text-gray-700">
              Rent Due: <span className="font-medium">Kshs 27,000.00</span>
            </p>
            <p className="text-gray-700">
              Water Bill: <span className="font-medium">Kshs 150.00</span>
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaInfoCircle className="mr-2" /> Important Notices
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Reminder: Rent is due on the 5th of every month.</li>
              <li>Maintenance work will be conducted next Friday.</li>
              <li>Ensure your contact details are up-to-date.</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
