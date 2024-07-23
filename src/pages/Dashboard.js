import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaHome, FaCog, FaMoneyBill, FaComments, FaCar, FaUserSlash } from 'react-icons/fa';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import DeleteAccount from './Auth/DeleteAccount';

const Dashboard = () => {
  const location = useLocation();
  const [showLogin, setShowLogin] = React.useState(false);
  const [showSignup, setShowSignup] = React.useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = React.useState(false);

  const handleLoginToggle = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
    setShowDeleteAccount(false);
  };

  const handleSignupToggle = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
    setShowDeleteAccount(false);
  };

  const handleDeleteAccountToggle = () => {
    setShowDeleteAccount(!showDeleteAccount);
    setShowLogin(false);
    setShowSignup(false);
  };

  const isHomePage = location.pathname === '/dashboard/home';

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 flex items-center justify-between shadow-lg">
        <div className="text-2xl font-bold">NyumbaCare</div>
        <div className="flex items-center">
          <button
            onClick={handleLoginToggle}
            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mx-1 transition duration-200 flex items-center"
          >
            {showLogin ? 'Close Login' : 'Login'}
          </button>
          <button
            onClick={handleSignupToggle}
            className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg mx-1 transition duration-200 flex items-center"
          >
            {showSignup ? 'Close Signup' : 'Signup'}
          </button>
          <button
            onClick={handleDeleteAccountToggle}
            className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg mx-1 transition duration-200 flex items-center"
          >
            {showDeleteAccount ? 'Close Delete Account' : 'Delete Account'}
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <nav className="w-1/5 bg-gray-800 text-white p-4 flex flex-col">
          <ul className="space-y-2">
            <li>
              <Link to="home" className="text-lg font-bold hover:bg-gray-700 p-2 rounded-lg flex items-center">
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link to="settings" className="text-lg font-bold hover:bg-gray-700 p-2 rounded-lg flex items-center">
                <FaCog className="mr-2" /> Settings
              </Link>
            </li>
            <li>
              <Link to="payments" className="text-lg font-bold hover:bg-gray-700 p-2 rounded-lg flex items-center">
                <FaMoneyBill className="mr-2" /> Payments
              </Link>
            </li>
            <li>
              <Link to="messaging" className="text-lg font-bold hover:bg-gray-700 p-2 rounded-lg flex items-center">
                <FaComments className="mr-2" /> Messaging
              </Link>
            </li>
            <li>
              <Link to="parking" className="text-lg font-bold hover:bg-gray-700 p-2 rounded-lg flex items-center">
                <FaCar className="mr-2" /> Parking
              </Link>
            </li>
            <li>
              <Link to="visitors" className="text-lg font-bold hover:bg-gray-700 p-2 rounded-lg block flex items-center">
                Visitors
              </Link>
            </li>
            <li>
              <Link to="delete-account" className="text-lg font-bold hover:bg-gray-700 p-2 rounded-lg block flex items-center">
                <FaUserSlash className="mr-2" /> Delete Account
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="w-3/5 p-4 bg-gray-100 overflow-y-auto">
          {isHomePage && (
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-bold mb-2">House Details</h2>
              <p>House Number: <span className="font-medium">PE11</span></p>
              <p>Address: <span className="font-medium">MARY-PETER COURT</span></p>
            </div>
          )}
          <Outlet />
        </main>

        {/* Right Sidebar */}
        <aside className="w-1/5 p-4 bg-gray-200">
          <h2 className="text-lg font-bold mb-4">Announcements <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs ml-2">3</span></h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul>
              <li className="mb-2">New parking guidelines have been updated.</li>
              <li className="mb-2">Scheduled maintenance on the 1st of every month.</li>
              <li className="mb-2">Submit vehicle information for the new parking system.</li>
            </ul>
          </div>
        </aside>
      </div>

      {showLogin && <Login />}
      {showSignup && <Signup />}
      {showDeleteAccount && <DeleteAccount />}
    </div>
  );
};

export default Dashboard;
