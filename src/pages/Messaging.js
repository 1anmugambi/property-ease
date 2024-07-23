import React, { useState } from 'react';
import axios from 'axios';
import Chatbot from './Chatbot';
// import landlordImage from './path/to/landlordImage.jpg'; // Replace with your image path

const Messaging = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/api/messages', { message });
      console.log('Message sent:', message);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 shadow-md w-full">
        <h1 className="text-4xl font-bold text-center">Messaging</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 flex flex-col items-center w-full">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-200">
          <div className="flex items-start mb-4">
            {/* <img
              src={landlordImage}
              alt="Landlord"
              className="w-16 h-16 rounded-full mr-4 shadow-lg"
            /> */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Message Landlord/Agents</h2>
              <p className="text-gray-600">Quickly send a message to your landlord or property agents.</p>
            </div>
          </div>
          <form onSubmit={handleSendMessage} className="flex flex-col">
            <textarea
              id="message"
              className="w-full px-4 py-3 border rounded-lg mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition duration-200 flex items-center justify-center"
            >
              Send
            </button>
          </form>
        </div>

        {/* Chatbot Component */}
        <Chatbot />
      </main>
    </div>
  );
};

export default Messaging;
