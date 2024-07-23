import React, { useState } from 'react';

const chatbotResponses = {
  "How do I pay my rent?": "You can pay your rent through the Payments page. Choose 'Rent' as the payment type and follow the instructions.",
  "What should I do if something is broken in my apartment?": "Please submit a maintenance request in the Settings section under 'Maintenance Request'.",
  "How can I contact my landlord?": "You can send a message directly through this Messaging page.",
  "Where can I find my tenant profile?": "Your tenant profile can be found on the Home page.",
  "How do I update my contact details?": "You can update your contact details in the Settings page under 'Notification Settings'.",
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);

      // Simple AI response simulation
      const response = chatbotResponses[input.trim()] || "Sorry, I don't understand that question.";
      const botMessage = { text: response, sender: 'bot' };
      setMessages([...messages, userMessage, botMessage]);

      setInput('');
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-gray-50 to-gray-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-gray-700">Chatbot</h2>
      <div className="h-64 w-full overflow-y-scroll bg-white p-4 border border-gray-300 rounded-lg shadow-inner">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-xs p-3 rounded-lg shadow-md ${msg.sender === 'bot' ? 'bg-gray-100 text-gray-800' : 'bg-blue-50 text-blue-900'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 w-full flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Type your question..."
        />
        <button
          onClick={handleSend}
          className="ml-3 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
