import React from 'react';
import { useQuery } from 'react-query';
import { fetcher } from '../../api';
import Spinner from '../../Component/Spinner';
import AllOrderList from './AllOrderList';

const ManageOrders = () => {
  const {
    isLoading,
    error,
    data: allPurchases,
    refetch,
  } = useQuery('allPurchases', async () => {
    return await fetcher.get(`/purchase`, {
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    console.log(error);
  }

  // console.log(allPurchases?.data);

  return (
    <div>
      <h2 className="mb-4 text-xl">Here are all the orders:</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Part Name</th>
              <th>Shipping</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {allPurchases?.data.map((orders, index) => (
              <AllOrderList
                orders={orders}
                index={index}
                key={orders._id}
                refetch={refetch}
              ></AllOrderList>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Part Name</th>
              <th>Shipping</th>
              <th>Cancel</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
