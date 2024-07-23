import React, { useState } from 'react';
import { FaDollarSign, FaCreditCard, FaWater, FaTrashAlt, FaMoneyBillAlt } from 'react-icons/fa';

const Payments = () => {
  const [paymentType, setPaymentType] = useState('both'); // 'both', 'rent', 'water', 'garbage'
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');

  const handlePayment = (e) => {
    e.preventDefault();

    // Prepare data for submission
    const paymentData = {
      paymentType,
      amount,
      paymentMethod,
    };

    // Implement payment logic here (e.g., send to server)
    console.log(paymentData);

    // Clear form or handle further actions if needed
    setAmount('');
    setPaymentType('both');
    setPaymentMethod('mpesa');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-700 text-white p-4 shadow-lg">
        <div className="text-2xl font-bold">NyumbaCare</div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Payments</h1>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaMoneyBillAlt className="mr-2" /> Make a Payment
            </h2>
            <form onSubmit={handlePayment}>
              {/* Payment Type */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentType">
                  Payment Type
                </label>
                <div className="flex flex-col space-y-3">
                  {['both', 'rent', 'water', 'garbage'].map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="paymentType"
                        value={type}
                        checked={paymentType === type}
                        onChange={(e) => setPaymentType(e.target.value)}
                        className="mr-2"
                      />
                      {type === 'rent' && <FaDollarSign className="mr-2" />}
                      {type === 'water' && <FaWater className="mr-2" />}
                      {type === 'garbage' && <FaTrashAlt className="mr-2" />}
                      {`Pay ${type.charAt(0).toUpperCase() + type.slice(1)}`}
                    </label>
                  ))}
                </div>
              </div>
              {/* Amount */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                  Amount
                </label>
                <input
                  id="amount"
                  className="w-full px-3 py-2 border rounded-md"
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              {/* Payment Method */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentMethod">
                  Payment Method
                </label>
                <select
                  id="paymentMethod"
                  className="w-full px-3 py-2 border rounded-md"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="mpesa">M-Pesa</option>
                  <option value="bank">Bank</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Pay
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Payments;
