import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      // Send payment information to your server
      fetch('/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to process payment on server');
        }
        // Handle successful payment confirmation
        console.log('Payment processed successfully');
      })
      .catch(error => {
        setError('Payment failed. Please try again later.');
        console.error('Error processing payment:', error);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Secure Payment</h2>
      <label style={{ display: 'block', marginBottom: '10px' }}>Card Details:</label>
      <CardElement style={{ base: { fontSize: '16px' } }} />
      <button type="submit" disabled={!stripe} style={{ marginTop: '20px', width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Pay
      </button>
      {error && <div style={{ marginTop: '10px', color: 'red' }}>{error}</div>}
    </form>
  );
}

export default CheckoutForm;
