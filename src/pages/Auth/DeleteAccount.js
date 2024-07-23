import React from 'react';

const DeleteAccount = () => {
  const handleDeleteAccount = () => {
    // Implement account deletion logic
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // Call API to delete the account
      console.log('Account deleted');
    }
  };

  return (
    <div className="p-8 bg-gray-100 h-screen">
      <h1 className="text-3xl font-bold mb-6">Delete Account</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">If you want to delete your account, please click the button below. This action is irreversible.</p>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 text-white py-2 px-4 rounded-md"
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
