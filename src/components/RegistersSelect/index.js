import React from "react";
import RegisterButton from "../RegisterButton";

const RegistersSelect = ({ registers, selected, setter }) =>
  registers.map(({ name }) => (
    <RegisterButton
      key={`btn-${name}`}
      name={name}
      isSelected={name === selected}
      setter={setter}
    />
  ));

export default RegistersSelect;
