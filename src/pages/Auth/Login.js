import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      if (!formData.agree) {
        alert('You must agree to the terms');
        return;
      }
      try {
        await axios.post('http://127.0.0.1:5000/api/signup', formData);
        alert('Signup successful');
        setFormData({
          name: '',
          email: '',
          phone: '',
          houseNumber: '',
          password: '',
          confirmPassword: '',
          agree: false,
        });
      } catch (error) {
        console.error('Signup error:', error);
      }
    } else {
      try {
        await axios.post('http://127.0.0.1:5000/api/login', {
          email: formData.email,
          password: formData.password,
        });
        alert('Login successful');
        setFormData({
          name: '',
          email: '',
          phone: '',
          houseNumber: '',
          password: '',
          confirmPassword: '',
          agree: false,
        });
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`py-2 px-4 rounded-lg ${isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`py-2 px-4 rounded-lg ${!isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Signup
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">{isLogin ? 'Login' : 'Create an Account'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  name="name"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
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
                  required={!isLogin}
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
                  required={!isLogin}
                />
              </div>
            </>
          )}
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
          {!isLogin && (
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
          )}
          {!isLogin && (
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
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
