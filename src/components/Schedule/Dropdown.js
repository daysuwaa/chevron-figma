import React, { useState } from "react";

const Dropdown = () => {
  const [timer, setTimer] = useState("Ford");

  const handleChange = (e) => {
    setTimer(e.target.value);
  };

  return (
    <div className="mt-2  absolute top-full right-[-1.2rem] ">
      <label className="text-[#4A5568] text-sm mb-2">Interactive Timer</label>
      <div className="px-2 items-center h-[40px] mt-2 w-[29.2rem] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600 mb-2">
        <select
          value={timer}
          className="outline-none w-full  mt-2 content-center"
          onChange={handleChange}
        >
          <option value="Ford">5 mins</option>
          <option value="Volvo">10 mins</option>
          <option value="Fiat">20 mins</option>
          <option value="Audi">1 hour</option>
        </select>
      </div>
    </div>
  );
};
export default Dropdown;
