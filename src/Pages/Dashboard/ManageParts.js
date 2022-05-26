import React from 'react';
import { useQuery } from 'react-query';
import { fetcher } from '../../api';
import Spinner from '../../Component/Spinner';
import ManagePartList from './ManagePartList';

const ManageParts = () => {
  const {
    isLoading,
    error,
    data: allPart,
    refetch,
  } = useQuery('allPart', async () => {
    return await fetcher.get(`/parts`);
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    console.log(error);
  }

  // console.log(allPart);
  return (
    <div>
      <h2 className="mb-4 text-xl">Here are all the Parts:</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full ">
          <thead>
            <tr>
              <th>#</th>
              <th>Part</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allPart?.data.map((part, index) => (
              <ManagePartList
                part={part}
                index={index}
                key={part._id}
                refetch={refetch}
              ></ManagePartList>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>#</th>
              <th>Part</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageParts;
