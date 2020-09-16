import React from "react";

const OperationButton = ({ name, onClick }) => (
  <button
    className="flex w-32 justify-center items-center py-2 px-2 text-white text-xl font-bold bg-blue-300"
    type="button"
    onClick={onClick}
  >
    {name}
  </button>
);

export default OperationButton;
