import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Toggle = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="ml-2 inline-block relative">
      <button
        className={`h-4 w-8 flex rounded-full ${
          isActive ? "bg-green-500 justify-end" : "bg-gray-200 justify-start"
        } focus:outline-none transition duration-300 ease-in-out`}
        onClick={handleToggle}
      >
        <span
          className={`flex h-full w-1/2 rounded-full ${
            isActive ? "bg-gray-100" : "bg-gray-100"
          }`}
        ></span>
      </button>

      {isActive && (
        <div className="absolute top-full">
          <Dropdown />
        </div>
      )}
    </div>
  );
};

export default Toggle;
