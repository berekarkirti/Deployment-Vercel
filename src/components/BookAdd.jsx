"use client";

import axios from 'axios';
import React, { useState } from 'react';

const BookAdd = () => 
{
  const [book, setBook] = useState({ Title: '', Author: '', Price: '', Description: '', ISBN: '', PublishedDate: '', });

  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    try 
    {
      const response = await axios.post("https://deployment-railway-production.up.railway.app/books/create",book);
      console.log(response.data);
      alert('Book Added!');
      setBook({ Title: '', Author: '', Price: '', Description: '', ISBN: '', PublishedDate: '', });
    } 
    catch (error) 
    {
      console.error('Error adding book:', error);
      alert('Failed to add book. Please try again.');
    }
  };

  const handleChange = (e) => 
  {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">

        <h1 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Add a New Book</h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label htmlFor="Title" className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" name="Title" value={book.Title} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>

          <div>
            <label htmlFor="Author" className="block text-sm font-medium text-gray-700">Author</label> 
            <input type="text" name="Author" value={book.Author} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>

          <div>
            <label htmlFor="Price" className="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" name="Price" value={book.Price} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>

          <div>
            <label htmlFor="Description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="Description" value={book.Description} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" rows="4" />
          </div>

          <div>
            <label htmlFor="ISBN" className="block text-sm font-medium text-gray-700">ISBN</label>
            <input type="text" name="ISBN" value={book.ISBN} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>

          <div>
            <label htmlFor="PublishedDate" className="block text-sm font-medium text-gray-700">Published Date</label>
            <input type="date" name="PublishedDate" value={book.PublishedDate} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors" >Add Book</button>

        </form>

      </div>
      
    </div>
  );
};

export default BookAdd;