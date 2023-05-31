'use client'; // Error components must be Client Components
 
import { useEffect } from 'react';
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div>
      <h2 className='text-3xl'>Something went wrong!</h2>
      <button className='text-4xl p-3 bg-slate-600'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}