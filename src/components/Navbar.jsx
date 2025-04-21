import React from 'react';
import Link from 'next/link';

const Navbar = () => 
{
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">
      
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tight hover:text-indigo-200 transition-colors">BookList</Link>
          </div>
          
          <div className="flex space-x-4">
            <Link href="/"className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-indigo-700 transition-colors">Home</Link>
            <Link href="/bookadd"className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-indigo-700 transition-colors">Add Book</Link>
          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;