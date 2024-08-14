import React from 'react';

interface PlanCardProps {
  title: string;
  price: string;
  description: string[];
  buttonText: string;
  onClick: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg p-5 bg-white'>
      <div className='font-bold text-xl mb-2'>{title}</div>
      <p className='text-3xl font-bold mb-4'>{price}</p>
      <ul className='mb-6'>
        {description.map((item, index) => (
          <li key={index} className='text-gray-700 text-base'>
            {item}
          </li>
        ))}
      </ul>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PlanCard;
