import React from 'react';
import Swal from 'sweetalert2';
import { fetcher } from '../../api';

const AllOrderList = ({ orders, index, refetch }) => {
  const { _id, address, email, name, paid, partName } = orders;

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetcher.delete(`/purchase/${_id}`, {
          headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        refetch();
        // Notify the user that the order is being cancelled
        Swal.fire('Cancelled!', 'This order has been cancelled.', 'success');
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{partName}</td>
      <td>
        {paid ? (
          <button className="btn btn-xs bg-success text-white uppercase font-semibold hover:bg-white hover:text-slate-700">
            Pending{' '}
          </button>
        ) : (
          <span className="text-yellow-500 uppercase">Unpaid</span>
        )}
      </td>
      <td>
        {paid ? (
          <span className="text-success uppercase font-semibold">-</span>
        ) : (
          <button
            onClick={handleDelete}
            className="btn btn-error text-white btn-xs"
          >
            Cancel
          </button>
        )}
      </td>
    </tr>
  );
};

export default AllOrderList;
