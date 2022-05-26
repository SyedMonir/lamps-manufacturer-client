import React from 'react';
import Swal from 'sweetalert2';
import { fetcher } from '../../api';

const AllOrderList = ({ orders, index, refetch }) => {
  const { _id, address, email, name, paid, partName, isShipped } = orders;

  const handleShipped = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to update the shipping status?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, shipped it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/purchase/shipped/${email}/${_id}`, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.modifiedCount) {
              refetch();
              // Notify the user that the order is being shipped
              Swal.fire('Shipped!', 'This order has been shipped.', 'success');
            }
          });
      }
    });
  };

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
          <span>
            {!isShipped ? (
              <button
                onClick={handleShipped}
                className="btn btn-xs bg-success text-white uppercase font-semibold hover:bg-white hover:text-slate-700"
              >
                Pending
              </button>
            ) : (
              <span className="text-success">Shipped</span>
            )}
          </span>
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
