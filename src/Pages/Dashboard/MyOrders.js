import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { fetcher } from '../../api';
import Spinner from '../../Component/Spinner';
import auth from '../../firebase.init';
import MyOrderList from './MyOrderList';

const MyOrders = () => {
  const [user, loading, authError] = useAuthState(auth);

  const {
    isLoading,
    error,
    data: myOrder,
    refetch,
  } = useQuery(['purchase', user?.email], async () => {
    return await fetcher.get(`/purchase/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  });

  //   console.log(myOrder);

  if (loading || isLoading) {
    return <Spinner />;
  }
  if (authError || error) {
    console.log(authError);
    console.log(error);
  }

  return (
    <div>
      <h2 className="mb-4 text-xl">
        Dear{' '}
        <span className="text-primary font-semibold capitalize">
          {user?.displayName},
        </span>{' '}
        heres your orders:
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Part's Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrder?.data.map((order, index) => (
              <MyOrderList
                order={order}
                index={index}
                key={order._id}
                refetch={refetch}
              ></MyOrderList>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>#</th>
              <th>Part's Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
