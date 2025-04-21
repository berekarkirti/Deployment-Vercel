// "use client";
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const BookDetails = () => {
//   const router = useRouter();
//   const { id } = router.query; // Use router.query for client-side
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Wait for id to be available
//     if (!router.isReady) return;

//     console.log('Fetching book with id:', id); // Debug log for id
//     if (!id) {
//       setError('No ID provided.');
//       setLoading(false);
//       return;
//     }

//     const fetchBookDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://deployment-railway-production.up.railway.app/books/singledata/${id}`
//         );
//         console.log('API Response:', response.data); // Debug log for response
//         setBook(response.data);
//       } catch (err) {
//         console.error('API Error:', err.response ? err.response.data : err.message); // Detailed error logging
//         setError('Failed to load book details.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookDetails();
//   }, [router.isReady, id]); // Add router.isReady as a dependency

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <p className="text-lg text-gray-600">Loading book details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <p className="text-lg text-red-600">{error}</p>
//       </div>
//     );
//   }

//   if (!book) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <p className="text-lg text-gray-600">No book data received.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
//         <div className="space-y-4">
//           <img
//             src={book.bookImage || 'https://via.placeholder.com/128'}
//             alt={book.Title}
//             className="w-32 h-32 object-cover rounded-lg mx-auto"
//             onError={(e) => (e.target.src = 'https://via.placeholder.com/128')}
//           />
//           <h2 className="text-xl font-bold text-indigo-600">Title: {book.Title}</h2>
//           <p className="text-lg text-gray-700">Author: {book.Author}</p>
//           <p className="text-lg text-gray-700">Price: ${book.Price}</p>
//           <p className="text-gray-600">Published Date: {book.PublishedDate}</p>
//           <p className="text-gray-600">Description: {book.Description}</p>
//           <p className="text-gray-600">ISBN: {book.ISBN}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;

"use client";
import React from 'react';

const BookDetails = ({ book }) => 
{
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
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-4">
          <img src={book.bookImage || 'https://via.placeholder.com/128'} alt={book.Title} className="w-32 h-32 object-cover rounded-lg mx-auto" onError={(e) => (e.target.src = 'https://via.placeholder.com/128')}/>
          <h2 className="text-xl font-bold text-indigo-600">Title: {book.Title}</h2>
          <p className="text-lg text-gray-700">Author: {book.Author}</p>
          <p className="text-lg text-gray-700">Price: ${book.Price}</p>
          <p className="text-gray-600">Published Date: {book.PublishedDate}</p>
          <p className="text-gray-600">Description: {book.Description}</p>
          <p className="text-gray-600">ISBN: {book.ISBN}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;