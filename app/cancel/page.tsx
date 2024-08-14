'use client';

import { useRouter } from 'next/navigation';

const CancelPage = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-red-100'>
      <div className='bg-white p-8 rounded-lg shadow-md text-center'>
        <h1 className='text-3xl font-bold text-red-600 mb-4'>
          Payment Canceled
        </h1>
        <p className='text-lg mb-6'>
          Your payment was not processed. Please try again.
        </p>
        <button
          onClick={() => router.push('/')}
          className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300'
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CancelPage;
