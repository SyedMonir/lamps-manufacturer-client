import React from 'react';
import { useQuery } from 'react-query';
import { fetcher } from '../../api';
import Spinner from '../../Component/Spinner';
import MakeAdminList from './MakeAdminList';

const MakeAdmin = () => {
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery('users', async () => {
    return await fetcher.get(`user/`, {
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

  // console.log(users);
  return (
    <div>
      <h2 className="mb-4 text-xl">Make Admin: </h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th>Role</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.data.map((user, index) => (
              <MakeAdminList
                user={user}
                index={index}
                key={user._id}
                refetch={refetch}
              ></MakeAdminList>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th>Role</th>
              <th>Make Admin</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
