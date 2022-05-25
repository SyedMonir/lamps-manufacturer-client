import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { fetcher } from '../../api';
import Spinner from '../../Component/Spinner';
import auth from '../../firebase.init';

const AddReview = () => {
  const [user, loading, error] = useAuthState(auth);

  // Form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  if (user) {
    // console.log(user);
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
  }

  // Handle Submit
  const onSubmit = async (data) => {
    // console.log(data);
    if (data.star > 5 || data.star < 0) {
      toast.error('Please enter a valid star rating', {
        theme: 'colored',
      });
      return;
    }
    if (data.description.length < 10) {
      toast.error('Please enter a valid description!', {
        theme: 'colored',
      });
      return;
    }

    const review = {
      star: data.star,
      description: data.description,
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
    };

    const response = await fetcher.post('/review', review, {
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });

    if (response.status) {
      toast.success('Review submitted successfully!', {
        theme: 'colored',
      });
      reset();
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <h2 className="text-xl mb-4 px-4">
        Give us rating of your experience in this website! It will help us to
        improve!
      </h2>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Star</span>
              </label>
              <input
                type="number"
                placeholder="Minimum 0, Maximum 5"
                className="input input-bordered"
                {...register('star', {
                  required: true,
                })}
              />
              <span className="text-red-600 text-sm">
                {errors.star?.type === 'required' && '*Star is required'}
              </span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                type="text"
                placeholder="Description"
                {...register('description', {
                  required: true,
                })}
              ></textarea>
              <span className="text-red-600 text-sm">
                {errors.description?.type === 'required' &&
                  '*Description is required'}
              </span>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn text-white btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
