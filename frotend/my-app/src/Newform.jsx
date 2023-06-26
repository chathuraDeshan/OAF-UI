import React from 'react';
import logo from './image/1.png';

function Newform() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-[822px] h-[662px] bg-teal-900 rounded-[65px] flex justify-center">
        <div
          className="absolute left-0 top-0 w-[417px] h-[662px] bg-no-repeat opacity-20 rounded-[65px]"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="relative flex flex-col items-center justify-center h-full  ">
          <h1 className="text-white text-4xl font-bold mb-10">Create an Account</h1>
          <form className="flex flex-col items-center ">
            <input
              type="text"
              placeholder="Full Name"
              className="w-72 h-12 px-4 mb-5 rounded"
            />
            <input
              type="text"
              placeholder="Employer Number"
              className="w-72 h-12 px-4 mb-8 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-72 h-12 px-4 mb-8 rounded"
            />
            <input
              type="password"
              placeholder="Re Enter Password"
              className="w-72 h-12 px-4 mb-8 rounded"
            />
            <button className="w-32 h-10 bg-[#E65F2B] text-white font-bold rounded">
              Create Account
            </button>
          </form>
          <h6 className="text-white text-sm mt-4 ">
            Already have an account <a className = "text-[#E65F2B]" href = "#">Login </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Newform;
