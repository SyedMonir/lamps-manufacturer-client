import React from 'react';
import Swal from 'sweetalert2';

const MakeAdminList = ({ user, index, refetch }) => {
  const { email, role, userName } = user;

  const makeAdmin = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to make admin?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, do it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/admin/${email}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data?.modifiedCount) {
              // Notify the user that the order is being cancelled
              Swal.fire('Successful!', `Made admin: ${email}`, 'success');
              refetch();
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{userName}</td>
      <td className="capitalize font-bold">
        {role === 'admin' ? (
          <span className="text-primary uppercase">{role}</span>
        ) : role ? (
          role
        ) : (
          'user'
        )}
      </td>
      <td>
        {role === 'user' ? (
          <button
            onClick={makeAdmin}
            className="btn capitalize text-white btn-xs btn-success"
          >
            Make Admin
          </button>
        ) : (
          '--'
        )}
      </td>
    </tr>
  );
};

export default MakeAdminList;
