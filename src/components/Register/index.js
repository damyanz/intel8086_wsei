import React from "react";

const Register = ({ name, value, onChange }) => (
  <div className="md:flex md:items-center mb-6">
    <div>
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor={name}
      >
        {name}
      </label>
    </div>
    <div className="w-full">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
        id={name}
        type="text"
        pattern="[0-1]*"
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default Register;
