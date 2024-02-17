import React, { useState } from "react";

const Dropdown = () => {
  const [timer, setTimer] = useState("Ford");

  const handleChange = (e) => {
    setTimer(e.target.value);
  };

  return (
    <div className="mt-2">
      <label className="text-[#4A5568] text-sm mb-2">Beneficiary List</label>
      <div className="px-2 items-center h-[40px] mt-2 w-[13.2rem] md:w-[29rem] lg:w-[34.2rem] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600 mb-2">
        <select
          id="scheduledrop"
          value={timer}
          className="outline-none w-full mt-2 content-center"
          onChange={handleChange}
        >
          <option value="bene">Beneficiary</option>
          <option value="ficiary">Ficiary</option>
          {/* More options */}
        </select>
      </div>
    </div>
  );
};
export default Dropdown;
