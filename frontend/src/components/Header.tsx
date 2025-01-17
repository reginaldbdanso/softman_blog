import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Logo</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Home</a>
          <a href="#" className="text-base font-medium text-gray-900">Blog</a>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</a>
        </nav>
        <button className="md:hidden text-gray-500 hover:text-gray-900">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;