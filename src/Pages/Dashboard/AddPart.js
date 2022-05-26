import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { fetcher } from '../../api';

const AddPart = () => {
  // Form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Handle Submit
  const onSubmit = async (data) => {
    // console.log(data);
    const part = {
      name: data.name,
      description: data.description,
      price: parseInt(data.price),
      quantity: parseInt(data.quantity),
      image: data.image,
    };
    console.log(part);

    const response = await fetcher.post('/parts', part, {
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });

    console.log(response);

    if (response.status === 200) {
      toast.success('Added Part successfully!', {
        theme: 'colored',
      });
      reset();
    }
  };

  return (
    <div className="lg:w-1/2 w-full mx-auto p-4">
      <h2 className="mb-4 text-xl underline uppercase tracking-widest text-primary">
        Add Part:{' '}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Part Name */}
        <div className="mt-4">
          <div className="text-sm font-bold text-gray-700 tracking-wide">
            Name
          </div>
          <input
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            type="text"
            placeholder="Part Name"
            {...register('name', {
              required: true,
            })}
          />
          <span className="text-red-600 text-sm mt-1">
            {errors.name?.type === 'required' && '*Name is required'}
          </span>
        </div>
        {/* Image */}
        <div className="mt-4">
          <div className="text-sm font-bold text-gray-700 tracking-wide">
            Image
          </div>
          <input
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            type="text"
            placeholder="Image Link"
            {...register('image', {
              required: true,
            })}
          />
          <small>https://i.ibb.co/VWh69Sn/shade.jpg</small> <br />
          <span className="text-red-600 text-sm mt-1">
            {errors.image?.type === 'required' && '*Image is required'}
          </span>
        </div>
        {/* Price */}
        <div className="mt-4">
          <div className="text-sm font-bold text-gray-700 tracking-wide">
            Price
          </div>
          <input
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            type="number"
            placeholder="Price of single unit"
            {...register('price', {
              required: true,
            })}
          />
          <span className="text-red-600 text-sm mt-1">
            {errors.price?.type === 'required' && '*Price is required'}
          </span>
        </div>
        {/* Quantity */}
        <div className="mt-4">
          <div className="text-sm font-bold text-gray-700 tracking-wide">
            Quantity
          </div>
          <input
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            type="number"
            placeholder="Quantity of Unit"
            {...register('quantity', {
              required: true,
            })}
          />
          <span className="text-red-600 text-sm mt-1">
            {errors.quantity?.type === 'required' && '*Quantity is required'}
          </span>
        </div>
        {/* Description */}
        <div className="mt-4">
          <div className="text-sm font-bold text-gray-700 tracking-wide">
            Description
          </div>
          <textarea
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            type="text"
            placeholder="Details Description of part"
            {...register('description', {
              required: true,
            })}
          />
          <span className="text-red-600 text-sm mt-1">
            {errors.description?.type === 'required' &&
              '*Description is required'}
          </span>
        </div>
        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-primary text-gray-100 p-4 w-full rounded-full font-semibold font-display focus:outline-none focus:shadow-outline hover:shadow-lg uppercase tracking-widest"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPart;
