import React from 'react';
import Swal from 'sweetalert2';
import { fetcher } from '../../api';

const MyOrderList = ({ order, index, refetch }) => {
  const { _id, address, partName, phone, quantity, paid } = order;

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetcher.delete(`/purchase/${_id}`);

        // Notify the user that the order is being deleted
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
      refetch();
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
          <button className="btn text-white btn-xs btn-success">Pay Now</button>
        )}
      </td>
      <td>
        <button
          onClick={handleDelete}
          className="btn btn-error text-white btn-xs"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default MyOrderList;
