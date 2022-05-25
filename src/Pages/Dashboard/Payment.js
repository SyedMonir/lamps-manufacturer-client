import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetcher } from '../../api';
import Spinner from '../../Component/Spinner';
import auth from '../../firebase.init';

const Payment = () => {
  const { id } = useParams();
  const [user, loading, authError] = useAuthState(auth);

  const {
    isLoading,
    error,
    data: myIndividualOrder,
  } = useQuery(['purchase', id], async () => {
    return await fetcher.get(`/purchase/${user?.email}/${id}`);
  });

  console.log(myIndividualOrder?.data);

  if (isLoading || loading) {
    return <Spinner />;
  }

  if (error || authError) {
    console.log('An error has occurred: ' + error.message);
    console.log(authError);
  }

  const totalPrice = () => {
    const result =
      parseInt(myIndividualOrder?.data?.quantity) *
      parseInt(myIndividualOrder?.data?.price);

    const tax = result * 0.1;
    const shipping = result * 0.05;
    const total = result + tax + shipping;
    console.log(total);
  };
  totalPrice();

  return (
    <section>
      <div className="flex flex-col p-4">
        <h2 className="text-lg font-medium">Purchase Summary:</h2>
        <div className="bg-white rounded mt-4 shadow-lg py-6 px-8 lg:w-1/2 border">
          <p>Order Id: {myIndividualOrder?.data.partID}</p>
          <div className="flex items-end">
            <p className="text-base font-semibold focus:outline-none ">
              {myIndividualOrder?.data.partName}
            </p>
            <span className="text-xl ml-auto font-bold">
              ${' '}
              <span className="text-primary">
                {myIndividualOrder?.data.price}
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
              <span className="font-semibold">$ {} </span>
            </div>
            <span className="text-xs text-gray-500 mt-2">
              *You will get 10 Piece free with this purchase
            </span>
          </div>
          <div className="flex items-center  mt-8">
            <input id="termsConditions" type="checkbox" />
            <label
              className="text-xs text-gray-500 ml-2"
              htmlFor="termsConditions"
            >
              I agree to the terms and conditions.
            </label>
          </div>
          <div className="flex flex-col  pt-4">
            <button className="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700">
              Start Subscription
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
