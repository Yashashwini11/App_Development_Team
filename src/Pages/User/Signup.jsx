import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Signup details:', { name, email, password, confirmPassword });
  };

  return (
    <div className="h-screen flex">
      {/* Image Section */}
      <div className="w-1/2 h-full bg-no-repeat bg-left bg-contain" style={{ backgroundImage: `url('/src/assets/images/login.png')` }}>
        {/* Background image */}
      </div>

      {/* Signup Form Section */}
      <div className="w-1/2 h-full flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md p-8 space-y-6 border-2 border-blue-200 shadow-md rounded-lg dark:bg-slate-700 bg-white">
          <h2 className="text-2xl font-bold text-center dark:text-white">SIGN UP</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium dark:text-white">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium dark:text-white">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium dark:text-white">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium dark:text-white">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-sm text-center dark:text-white">
            Already have an account? <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
