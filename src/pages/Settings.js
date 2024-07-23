import React from 'react';

const Settings = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-700 text-white p-4 shadow-lg">
        <div className="text-2xl font-bold">NyumbaCare</div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Settings</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4">Maintenance Request</h3>
              <textarea
                className="w-full px-3 py-2 border rounded-md mb-4"
                placeholder="Describe your maintenance issue here"
                rows="4"
              />
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Submit Request
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="mr-2"
                  id="emailNotifications"
                />
                <label htmlFor="emailNotifications" className="text-gray-700">Enable Email Notifications</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  id="smsNotifications"
                />
                <label htmlFor="smsNotifications" className="text-gray-700">Enable SMS Notifications</label>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4">Theme Preferences</h3>
              <div className="flex items-center">
                <label htmlFor="theme" className="mr-2 text-gray-700">Select Theme:</label>
                <select
                  id="theme"
                  className="px-3 py-2 border rounded-md"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Update Password</h3>
              <div className="mb-4">
                <label htmlFor="currentPassword" className="block text-gray-700 text-sm font-bold mb-2">
                  Current Password
                </label>
                <input
                  id="currentPassword"
                  type="password"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your current password"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter a new password"
                />
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Update Password
              </button>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
};

export default Settings;
