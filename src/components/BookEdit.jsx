"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const BookEdit = ({ book, id }) => 
{
  const router = useRouter();

  const [formData, setFormData] = useState({ Title: book.Title , Author: book.Author , Price: book.Price, Description: book.Description , ISBN: book.ISBN , bookImage: book.bookImage , });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => 
  {
    setFormData({ Title: book.Title , Author: book.Author , Price: book.Price, Description: book.Description , ISBN: book.ISBN , bookImage: book.bookImage , });
  }, [book]);

  const handleChange = (e) => 
  {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    setLoading(true);
    setError('');

    try 
    {
      const response = await axios.patch(`https://deployment-railway-production.up.railway.app/books/update/${id}`,formData);
      console.log('Update response:', response.data);
      alert('Book updated successfully!');
      router.push('/');
    } 
    catch (err) 
    {
      console.error('Error updating book:', err.response ? err.response.data : err.message);
      setError('Failed to update book. Please try again.');
    } 
    finally 
    {
      setLoading(false);
    }
  };

  if (!book) 
  {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg text-gray-600">No book data received.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">

        <h1 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Edit Book</h1>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label htmlFor="Title" className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" name="Title" value={formData.Title} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>

          <div>
            <label htmlFor="Author" className="block text-sm font-medium text-gray-700">Author</label>
            <input type="text" name="Author" value={formData.Author} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>

          <div>
            <label htmlFor="Price" className="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" name="Price" value={formData.Price} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>

          <div>
            <label htmlFor="Description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="Description" value={formData.Description} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" rows="4" />
          </div>

          <div>
            <label htmlFor="ISBN" className="block text-sm font-medium text-gray-700">ISBN</label>
            <input type="text" name="ISBN" value={formData.ISBN} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>

          <div>
            <label htmlFor="bookImage" className="block text-sm font-medium text-gray-700">Book Image URL</label>
            <input type="text" name="bookImage" value={formData.bookImage} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:bg-gray-400" >
            {loading ? 'Updating...' : 'Update Book'}
          </button>

        </form>

      </div>
      
    </div>
  );
};

export default BookEdit;