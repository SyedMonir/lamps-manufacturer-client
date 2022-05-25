import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { fetcher } from '../../api';
import Spinner from '../../Component/Spinner';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  // Form
  const { register, handleSubmit, reset } = useForm();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
  }

  if (user) {
    // console.log(user);
  }

  // Handle Submit
  const onSubmit = async (data) => {
    // console.log(data);

    await fetcher.put(`/user/${user.email}`, data).then((res) => {
      // console.log(res);
      if (res.status === 200) {
        toast.success('Profile updated successfully!', {
          theme: 'colored',
        });
        reset();
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

          <h3 className=" text-2xl font-bold ">{user?.displayName}</h3>
          <p className=" ">
            Email: <span className="text-primary">{user?.email}</span>
          </p>
        </div>

        <section className="lg:w-1/2 mx-auto">
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
                <button type="submit" className="btn text-white btn-primary">
                  Update
                </button>
              </div>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
};

export default MyProfile;
