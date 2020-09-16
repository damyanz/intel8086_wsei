import React, { useState, useEffect } from "react";
import "./styles/styles.output.css";
import { REGISTERS_INITIAL } from "./constants";
import Register from "./components/Register";
import RegistersSelect from "./components/RegistersSelect";
import OperationButton from "./components/OperationButton";

function App() {
  const [registers, setRegisters] = useState(REGISTERS_INITIAL);

  const [r1, setR1] = useState(registers[0].name);
  const [r1Val, setR1Val] = useState(registers[0].value);

  const [r2, setR2] = useState(registers[1].name);
  const [r2Val, setR2Val] = useState(registers[1].value);

  const handleRegisterChange = (e) => {
    const { id, value } = e.target;
    setRegisters(
      registers.map((item) => (item.name === id ? { name: id, value } : item))
    );
  };

  const mov = () => {
    setRegisters(
      registers.map((register) =>
        register.name === r2 ? { ...register, value: r1Val } : register
      )
    );
  };

  const swap = () => {
    setRegisters(
      registers.map((register) =>
        register.name === r1
          ? { ...register, value: r2Val }
          : register.name === r2
          ? { ...register, value: r1Val }
          : register
      )
    );
  };

  const add = () => {
    setRegisters(
      registers.map((register) =>
        register.name === r1
          ? {
              ...register,
              value: Number(parseInt(r1Val, 2) + parseInt(r2Val, 2)).toString(
                2
              ),
            }
          : register
      )
    );
  };

  const sub = () => {
    setRegisters(
      registers.map((register) =>
        register.name === r1
          ? {
              ...register,
              value: Number(parseInt(r1Val, 2) - parseInt(r2Val, 2)).toString(
                2
              ),
            }
          : register
      )
    );
  };

  const COMMANDS = [
    {
      name: "MOV",
      func: mov,
    },
    {
      name: "SWAP",
      func: swap,
    },
    {
      name: "ADD",
      func: add,
    },
    { name: "SUB", func: sub },
  ];

  useEffect(() => {
    setR1Val(registers.find(({ name }) => name === r1).value);
    setR2Val(registers.find(({ name }) => name === r2).value);
  }, [r1, r2, registers]);

  const RegistersList = () => (
    <div className="p-12 flex flex-col md:w-1/3">
      {registers.map(({ name, value }) => (
        <Register
          key={name}
          name={name}
          value={value}
          onChange={handleRegisterChange}
        />
      ))}
    </div>
  );

  const RegistersSwitch = () => (
    <div className="flex md:w-1/3 p-12 items-center justify-center space-x-8 border-l border-r border-blue-300">
      <div className="flex-col">
        {
          <RegistersSelect
            registers={registers}
            selected={r1}
            setter={(event) => setR1(event.target.getAttribute("name"))}
          />
        }
      </div>
      <div className="flex-col">
        <RegistersSelect
          registers={registers}
          selected={r2}
          setter={(event) => setR2(event.target.getAttribute("name"))}
        />
      </div>
    </div>
  );

  const Operations = () => (
    <div className="w-1/3 flex flex-col items-center justify-evenly">
      {r1 === r2 ? (
        <span className="text-red-600">Proszę wybrać różne rejestry</span>
      ) : (
        COMMANDS.map(({ name, func }) => (
          <OperationButton
            key={`command-${name}`}
            name={name}
            onClick={() => func()}
          />
        ))
      )}
    </div>
  );

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="w-full flex-col items-center flex">
        <main className="max-w-screen-md w-full flex flex-col flex-1 bg-gray-300 border-l border-r border-b border-blue-300">
          <header className="flex flex-1 w-full justify-center items-center p-6 bg-blue-300 text-white uppercase">
            <h1 className="text-3xl font-bold">
              Emulator procesora Intel 8086
            </h1>
          </header>
          <div className="flex">
            <RegistersList />
            <RegistersSwitch />
            <Operations />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
