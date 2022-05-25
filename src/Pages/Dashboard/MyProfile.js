import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { fetcher } from '../../api';
import Spinner from '../../Component/Spinner';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [user, loading, uError] = useAuthState(auth);

  const {
    isLoading,
    error,
    data: profile,
    refetch,
  } = useQuery('user', async () => {
    return await fetcher.get(`user/${user.email}`);
  });

  // console.log(profile);

  // Form
  const { register, handleSubmit, reset } = useForm();

  if (loading || isLoading) {
    return <Spinner />;
  }

  if (uError || error) {
    console.log(uError);
    console.log(error);
  }

  if (user) {
    // console.log(user);
  }

  // Handle Submit
  const onSubmit = async (data) => {
    const updateData = {
      education: data?.education || profile?.data?.user.education,
      linkedin: data?.linkedin || profile?.data?.user.linkedin,
      location: data?.location || profile?.data?.user.location,
      phone: data?.phone || profile?.data?.user.phone,
    };
    // console.log(updateData);
    await fetcher.put(`/user/${user.email}`, updateData).then((res) => {
      // console.log(res);
      if (res.status === 200) {
        toast.success('Profile updated successfully!', {
          theme: 'colored',
        });
        reset();
        refetch();
      }
    });
  };
  return (
    <section>
      <section className="mt-2">
        <div className="text-center">
          <img
            className="rounded-full w-32 h-32 block mx-auto"
            src={user?.photoURL}
            alt={user?.displayName}
          />

          <h3 className=" text-2xl font-bold mt-4">{user?.displayName}</h3>
          <h3 className=" text-base  mt-2 mb-8">
            Email:{' '}
            <span className="text-primary text-lg font-bold">
              {user?.email}
            </span>
          </h3>

          <section className="flex flex-col lg:flex-row justify-center items-start">
            <div className="overflow-x-auto w-full lg:w-1/2 mx-auto p-8">
              <h3 className="text-center mb-12 text-xl font-medium tracking-wide">
                Your Profile Here !
              </h3>
              <table className="table table-zebra w-full mx-auto">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Role</th>
                    <td className="capitalize">{profile?.data?.user.role}</td>
                  </tr>
                  <tr>
                    <th>Education</th>
                    <td>{profile?.data?.user.education}</td>
                  </tr>

                  <tr>
                    <th>Location</th>
                    <td>{profile?.data?.user.location}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{profile?.data?.user.phone}</td>
                  </tr>
                  <tr>
                    <th>Linkedin</th>
                    <td>{profile?.data?.user.linkedin}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <section className="lg:w-1/2 w-full mx-auto">
              <h3 className="text-center mt-8 text-xl font-medium tracking-wide">
                You Can Update Your Profile Here !
              </h3>

              {/* <!-- Form  --> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  {/* Education */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Education</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your education"
                      className="input input-bordered"
                      {...register('education')}
                    />
                  </div>
                  {/* Address */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Location</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Location (city/district)"
                      className="input input-bordered"
                      {...register('location')}
                    />
                  </div>
                  {/* Phone */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Your Phone Number"
                      className="input input-bordered"
                      {...register('phone')}
                    />
                  </div>
                  {/* Linkedin */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Linkedin</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Linkedin Link"
                      className="input input-bordered"
                      {...register('linkedin')}
                    />
                  </div>

                  {/* Update */}
                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className="btn text-white btn-primary"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </section>
        </div>
      </section>
    </section>
  );
};

export default MyProfile;
