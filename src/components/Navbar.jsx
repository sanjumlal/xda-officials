// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/xda-logo.svg';
import '../index.css';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 dark:bg-gray-900/10 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">

        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} className="h-8" alt="XDA Logo" />
          <span className="hidden sm:inline-block text-white font-bold tracking-widest text-sm font-antipasto">
            XDA
          </span>
        </Link>

        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-6 text-sm font-antipasto">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-400 transition duration-200 px-3 py-2 rounded-md hover:bg-white/10"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/socials"
                className="text-gray-300 hover:text-blue-400 transition duration-200 px-3 py-2 rounded-md hover:bg-white/10"
              >
                Socials
              </Link>
            </li>
            <li>
  <Link
    to="/assets"
    className="text-gray-300 hover:text-blue-400 transition duration-200 px-3 py-2 rounded-md hover:bg-white/10"
  >
    Assets
  </Link>
</li>

          </ul>
        </div>

        <div className="w-8" />
      </div>
    </nav>
  );
}
