'use client';

import PlanCard from '../components/PlanCard';
import { loadStripe } from '@stripe/stripe-js';

export default function PlansPage() {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  );

  const handleSelectPlan = async (priceId: string) => {
    const stripe = await stripePromise;

    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });

    const session = await response.json();

    if (session.error) {
      console.error(session.error);
      return;
    }

    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-4xl font-bold mb-8'>Choose Your Plan</h1>
      <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-3'>
        <PlanCard
          title='Free'
          price='$0'
          description={['Basic Support', 'Access to limited features']}
          buttonText='Choose Free'
          onClick={() => handleSelectPlan('price_1Pnh6cB1wuWDugMWKhGICKUn')}
        />
        <PlanCard
          title='Basic'
          price='$10/mo'
          description={['Standard Support', 'Access to most features']}
          buttonText='Choose Basic'
          onClick={() => handleSelectPlan('price_1Pnh7cB1wuWDugMW03VEPslR')}
        />
        <PlanCard
          title='Premium'
          price='$30/mo'
          description={['Priority Support', 'Access to all features']}
          buttonText='Choose Premium'
          onClick={() => handleSelectPlan('price_1Pnh8iB1wuWDugMWhCy7jo8u')}
        />
      </div>
    </div>
  );
}
