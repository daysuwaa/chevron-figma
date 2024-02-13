import React, { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`h-4 w-8 flex rounded-full ${
        isActive ? "bg-green-500 justify-end" : "bg-gray-200 justify-start"
      } focus:outline-none transition duration-300 ease-in-out`}
      onClick={toggleButton}
    >
      <span
        className={` flex h-full w-1/2 rounded-full ${
          isActive ? "bg-gray-100" : "bg-gray-100"
        }`}
      ></span>
    </button>
  );
};

export default ToggleButton;
