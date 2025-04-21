"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const BookList = () => 
{
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => 
  {
    const fetchBooks = async () => 
    {
      try 
      {
        const response = await axios.get("https://deployment-railway-production.up.railway.app/books/get");
        setBooks(response.data);
        setLoading(false);
      } 
      catch (err) 
      {
        setError('Failed to load books.');
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const deleteBook = async (id) => 
  {
    if (!confirm('Are you sure you want to delete this book?')) 
    {
        return;
    }
    try 
    {
      await axios.delete(`https://deployment-railway-production.up.railway.app/books/delete/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      alert('Book deleted successfully!');
    } 
    catch (err) 
    {
      console.error('Error deleting book:', err);
      alert('Failed to delete book. Please try again.');
    }
  };

  if (loading)
  {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading books...</p>
      </div>
    );
  }

  if (error) 
  {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Book List</h1>
        <hr className="mb-6 border-gray-300" />

        {books.length === 0 
        ? 
        (
          <p className="text-lg text-gray-600 text-center">No books available.</p>
        ) 
        : 
        (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => 
            (
              <li key={book._id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between" >

                <div className="flex flex-col items-center">
                  <img src={book.bookImage} alt={book.Title} className="w-24 h-24 object-cover rounded-md mb-4" onError={(e) => (e.target.src = '/fallback-image.jpg')} />
                  <h3 className="text-xl font-semibold text-gray-800">{book.Title}</h3>
                  <h5 className="text-gray-600">{book.Author}</h5>
                  <span className="text-indigo-600 font-medium">${book.Price}</span>
                  <p className="text-gray-500 text-sm">{book.PublishedDate}</p>
                </div>

                <div className="mt-4 flex justify-center space-x-2">
                  <Link href={`/bookdetails/${book._id}`} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                   View
                  </Link>
                  <Link href={`/bookedit/${book._id}`} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                    Edit
                  </Link>
                  <button onClick={() => deleteBook(book._id)} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors" >Delete</button>
                </div>

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BookList;