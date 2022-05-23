import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetcher } from '../../api';
import Spinner from '../../Component/Spinner';
import auth from '../../firebase.init';

const PartPurchase = () => {
  const { partID } = useParams();

  const [user, loading, authError] = useAuthState(auth);
  //   console.log(user);

  const {
    isLoading,
    error,
    data: part,
  } = useQuery(['part', partID], async () => {
    return await fetcher.get(`parts/${partID}`);
  });

  // Form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/user/${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, [user?.email]);

  if (loading) {
    return <Spinner />;
  }

  if (authError) {
    console.log(authError);
  }

  //   const data = fetcher.get(`/user/${user.email}`);
  //   console.log(data);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    console.log('An error has occurred: ' + error.message);
  }

  // Handle Purchase
  const onSubmit = async (data) => {
    console.log(data);
    if (data?.quantity > part?.data.quantity) {
      alert('Not enough parts in stock');
    }
    // const { data } = await fetcher.post(`/user/${user.email}/purchase`, {
    //   partID,
    // });

    reset();
  };

  return (
    <section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div>
            <p className="text-lg text-center">
              Dear <span className="text-primary">{user?.displayName}</span>,
              Congratulation you got free test product please confirm is that
              you email <span className="text-primary">{user?.email}</span>
            </p>
          </div>
          <div className="lg:w-4/5 mx-auto flex flex-wrap border m-4">
            <img
              alt={part?.data.name}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={part?.data.image}
            />
            <div className="lg:w-1/2 w-full p-4 lg:px-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center">
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
                {part?.data.name}
              </h1>
              {/* <div className="flex mb-4">
                <span className="flex items-center">
                  <Link to={'/'} className="text-gray-600 hover:underline">
                    4 Reviews
                  </Link>
                </span>
              </div> */}
              <p className="leading-relaxed pb-2 border-b-2">
                {part?.data.description}
              </p>
              <div className="flex justify-between  items-center my-4">
                <div className="flex">
                  <p>
                    Available in stock:{' '}
                    <span className="text-primary text-xl font-semibold">
                      {part?.data.quantity}
                    </span>{' '}
                  </p>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="title-font font-medium text-xl text-gray-900">
                    ${' '}
                    <span className="text-primary text-3xl font-bold">
                      {part?.data.price}
                    </span>{' '}
                    / Per-Part
                  </span>
                </div>
              </div>
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full  mb-4">
                  <label className="label">
                    <span className="label-text">Quantity:</span>
                    <span className="label-text-alt">
                      *Minimum 100+ Order Acceptable
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Add your quantity"
                    className="input input-bordered w-full "
                    {...register('quantity', {
                      required: true,
                      //   min: 100,
                      //   max: part?.data.quantity,
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt mx-auto text-red-600 text-sm">
                      {errors.quantity?.type === 'required' &&
                        '*Quantity is required'}
                      {errors.min?.type === 'required' &&
                        '*Minimum 100+ Order Acceptable'}
                      {errors.max?.type === 'required' &&
                        '*Insufficient Quantity'}
                    </span>
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="flex text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:shadow-lg rounded"
                  >
                    Go to purchases
                  </button>
                </div>
              </form>
              {/*  */}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PartPurchase;
