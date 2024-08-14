'use client';

import { useRouter } from 'next/navigation';

const SuccessPage = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-green-100'>
      <div className='bg-white p-8 rounded-lg shadow-md text-center'>
        <h1 className='text-3xl font-bold text-green-600 mb-4'>
          Payment Successful!
        </h1>
        <p className='text-lg mb-6'>Thank you for subscribing.</p>
        <button
          onClick={() => router.push('/')}
          className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300'
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
