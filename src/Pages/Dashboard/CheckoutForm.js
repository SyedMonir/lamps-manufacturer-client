import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Spinner from '../../Component/Spinner';

const CheckoutForm = ({ myIndividualOrder, totalPrice: price }) => {
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [transitionId, setTransitionId] = useState('');
  // console.log(myIndividualOrder);
  const { _id, name, email } = myIndividualOrder;
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  if (spinner) {
    return <Spinner />;
  }

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error?.message || '');
      setSuccess('');
    } else {
      // console.log('[PaymentMethod]', paymentMethod);
    }

    setSpinner(true);

    // Confirm Card Payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError.message);
      setSuccess('');
      setSpinner(false);
    } else {
      setCardError('');
      setSpinner(false);
      //   console.log('[PaymentIntent]', paymentIntent);
      setTransitionId(paymentIntent.id);
      setSuccess(`Congrats! Payment ${paymentIntent.status}`);
    }

    // Store Payment In Db
    const purchase = {
      booking: _id,
      transitionId: paymentIntent?.id,
    };
    fetch(`http://localhost:5000/purchase/${email}/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        setSpinner(false);
        // console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className="flex items-center  mt-8">
          <input id="termsConditions" type="checkbox" />
          <label
            className="text-xs text-gray-500 ml-2"
            htmlFor="termsConditions"
          >
            I agree to the terms and conditions.
          </label>
        </div>
        {/* Success */}
        {success && (
          <div className=" mt-2 mx-auto text-sm text-center">
            <p className="text-green-600">{success}!</p>
            <p>
              Your Transaction ID:{' '}
              <strong className="text-green-600">{transitionId}</strong>
            </p>
          </div>
        )}
        {/* Error */}
        {cardError && (
          <p className="text-red-500 mt-2 mx-auto text-sm">{cardError}</p>
        )}
        <div className="flex flex-col  pt-4">
          <button
            type="submit"
            disabled={!stripe || !clientSecret || cardError || success}
            className="btn flex items-center justify-center bg-primary text-sm font-medium w-full h-10 rounded text-white hover:shadow-lg hover:bg-slate-700"
          >
            Complete the purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
