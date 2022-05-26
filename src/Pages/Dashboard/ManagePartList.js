import React from 'react';
import Swal from 'sweetalert2';
import { fetcher } from '../../api';

const ManagePartList = ({ part, index, refetch }) => {
  const { _id, image, description, name, price, quantity } = part;

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
        fetcher
          .delete(`/parts/${_id}`, {
            headers: {
              'Content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          })
          .then((res) => {
            //   console.log(res);
            if (res.data.deletedCount === 1) {
              refetch();
              Swal.fire('Deleted!', 'This part has been deleted.', 'success');
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td title={description}>{description.slice(0, 70)}..</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button
          onClick={handleDelete}
          className="btn btn-error text-white btn-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManagePartList;
