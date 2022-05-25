import React from 'react';
import { useForm } from 'react-hook-form';

const AddPart = () => {
  // Form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Handle Submit
  const onSubmit = async (data) => {};
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="mt-8">
          <div className="text-sm font-bold text-gray-700 tracking-wide">
            Email Address
          </div>
          <input
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
            type="email"
            placeholder="unknown@exapmle.com"
            {...register('email', {
              required: true,
            })}
          />
          <span className="text-red-600 text-sm">
            {errors.email?.type === 'required' && '*Email is required'}
          </span>
        </div>
        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="bg-primary text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:shadow-lg"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPart;
