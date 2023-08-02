import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

// Replace with your public Stripe key
const stripePromise = loadStripe('your-public-stripe-key');

const Payment = () => {
  return (
    <div className="payment">
      <h2>Support Our Work</h2>
      <p>Please consider making a donation to keep our content free and accessible to all.</p>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default Payment;
