import React from "react";
import classNames from "classnames";

const RegisterButton = ({ name, isSelected, setter }) => (
  <span
    name={name}
    onClick={setter}
    className={classNames("flex text-2xl font-bold p-1 cursor-pointer", {
      "text-white bg-blue-300": isSelected,
      "text-gray-500": !isSelected,
    })}
  >
    {name}
  </span>
);

export default RegisterButton;
