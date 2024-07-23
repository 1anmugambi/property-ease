import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    houseNumber: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!formData.agree) {
      alert('You must agree to the terms');
      return;
    }
    // Submit form data to API
    console.log('Form submitted:', formData);
  };

  return (
    <div className="p-8 bg-gray-100 h-screen">
      <h1 className="text-3xl font-bold mb-6">Signup</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              name="name"
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              name="email"
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input
              name="phone"
              type="tel"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">House Number</label>
            <input
              name="houseNumber"
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.houseNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              name="password"
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              name="agree"
              type="checkbox"
              className="mr-2"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label className="text-gray-700 text-sm font-bold">I agree to the terms and conditions</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
