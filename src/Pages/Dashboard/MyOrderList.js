import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { fetcher } from '../../api';

const MyOrderList = ({ order, index, refetch }) => {
  const { _id, address, partName, phone, quantity, paid } = order;
  const navigate = useNavigate();

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
        fetcher.delete(`/purchase/${_id}`);

        refetch();
        // Notify the user that the order is being cancelled
        Swal.fire('Cancelled!', 'Your order has been cancelled.', 'success');
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{partName}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td>{quantity}</td>
      <td>
        {paid ? (
          <span className="text-success uppercase font-semibold">Paid</span>
        ) : (
          <button
            onClick={() => navigate(`payment/${_id}`)}
            className="btn text-white btn-xs btn-success"
          >
            Pay Now
          </button>
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

export default MyOrderList;
