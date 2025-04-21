// import BookDetails from '@/components/BookDetails';
// import React from 'react';

// const Page = ({ params }) => {
//   return <BookDetails params={params} />;
// };

// export default Page;

import BookDetails from '@/components/BookDetails';
import axios from 'axios';

async function getBookData(id)
{
  try 
  {
    const response = await axios.get(`https://deployment-railway-production.up.railway.app/books/singledata/${id}`);
    return response.data;
  } 
  catch (error) 
  {
    console.error('Error fetching book data:', error);
    return null;
  }
}

export default async function Page({ params })
{
  const { id } = params;
  const book = await getBookData(id);

  if (!book) 
  {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg text-red-600">Failed to load book details.</p>
      </div>
    );
  }

  return <BookDetails book={book} />;
}