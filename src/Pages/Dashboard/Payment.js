import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetcher } from '../../api';
import Spinner from '../../Component/Spinner';
import auth from '../../firebase.init';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51L0jvzHaTsAY8k0UaZNRYzC0I4PthEDehphxpAvGwzisuzD0RazpJzNLu7ye1QaHw6hOLy56esnqIVd2gY4TLsyO00OpdHCRMa'
);

const Payment = () => {
  const { id } = useParams();
  const [user, loading, authError] = useAuthState(auth);

  const {
    isLoading,
    error,
    data: myIndividualOrder,
  } = useQuery(['purchase', id], async () => {
    return await fetcher.get(`/purchase/${user?.email}/${id}`, {
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  });

  // console.log(myIndividualOrder?.data);

  if (isLoading || loading) {
    return <Spinner />;
  }

  if (error || authError) {
    console.log('An error has occurred: ' + error.message);
    console.log(authError);
  }

  const calculatePrice = () => {
    const price = parseInt(myIndividualOrder?.data?.price) || 30;
    const totalUnit = parseInt(myIndividualOrder?.data?.quantity) * price;

    // const tax = totalUnit * 0.1;
    // const shipping = totalUnit * 0.05;
    // const total = totalUnit + tax + shipping;

    return totalUnit;
  };

  const totalPrice = calculatePrice();
  // console.log(totalPrice);

  return (
    <>
      <div className="flex flex-col px-4 justify-center items-center">
        <div className="bg-white rounded mt-4 shadow-lg py-6 px-8 w-full lg:w-1/2 border">
          <h2 className="text-lg font-medium">
            Purchase Id:{' '}
            <span className="text-primary">
              {myIndividualOrder?.data.partID}
            </span>
          </h2>
          <div className="flex items-end">
            <p className="text-base font-semibold focus:outline-none ">
              {myIndividualOrder?.data.partName}
            </p>
            <span className="text-xl ml-auto font-bold">
              ${' '}
              <span className="text-primary">
                {myIndividualOrder?.data.price
                  ? myIndividualOrder?.data.price
                  : 30}
              </span>
            </span>
            <span className="text-sm text-gray-500 mb-px">/unit</span>
          </div>
          <div className="mt-4">
            {/* Quantity */}
            <div className="flex items-end justify-between">
              <span className="text-sm font-semibold">Quantity</span>
              <span className="text-xl font-semibold text-primary mb-px">
                {myIndividualOrder?.data.quantity}
              </span>
            </div>
            {/* Tax */}
            <div className="flex items-end justify-between mt-3">
              <span className="text-sm font-semibold">Tax</span>
              <span className="text-base font-semibold text-primary mb-px">
                10%
              </span>
            </div>
            {/* Shipping */}
            <div className="flex items-end justify-between mt-3">
              <span className="text-sm font-semibold">Shipping</span>
              <span className="text-base font-semibold text-primary mb-px">
                5%
              </span>
            </div>
          </div>
          <div className=" mt-4 border-t pt-4">
            <div className="flex items-end justify-between">
              <span className="font-semibold">You need to pay</span>
              <span className="font-semibold">
                $ <span className="text-primary text-xl">{}</span>
              </span>
            </div>
            <span className="text-xs text-gray-500 mt-2">
              *You will get 10 Piece free with this purchase
            </span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded mt-4 shadow-lg py-6 px-8 w-full lg:w-1/2 border">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              myIndividualOrder={myIndividualOrder?.data}
              totalPrice={totalPrice}
            />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
