import React from 'react';

const Spinner = () => {
  return (
    <div
      className="fixed backdrop-blur-sm w-full h-full top-0 bottom-0 left-0 right-0 z-50"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <button className="spinner-btn absolute top-[47%] left-[47%]">
        <div className="loader bg-white p-4 rounded-full flex space-x-3">
          <div className="w-5 h-5 bg-primary rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-primary rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-primary rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-primary rounded-full animate-bounce"></div>
        </div>
      </button>
    </div>
    // <div className="min-h-screen flex justify-center items-center">
  );
};

export default Spinner;
