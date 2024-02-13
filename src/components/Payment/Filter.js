import React, { useState } from "react";

const Filter = ({ isOpen, onClose }) => {
  const [payment, setPayment] = useState("");
  const [amount, setAmount] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  return (
    <div
      className={`absolute transform -translate-x-[13.4rem] w-[320px] z-50 bg-white border rounded shadow-md p-4 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {/* payment id */}
      <div>
        <form>
          <label htmlFor="paymentt" className="text-[#4A5568] text-sm ">
            Payment Id
          </label>
          <div className="px-[10px] items-center mt-1  rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
            <input
              type="text"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              placeholder="Enter Payment Id"
              id="paymentt"
              className="font-normal h-8 outline-none"
              style={{
                color: "#718096",
                fontSize: "16px",
              }}
            />
          </div>
        </form>
      </div>
      {/* #2 email adress */}

      <form>
        <label htmlFor="amount" className="text-[#4A5568] text-sm ">
          Amount
        </label>
        <div className="px-[10px] items-center mt-1 rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            id="amount"
            className="font-normal h-8 outline-none text-lg"
            style={{
              color: "#718096",
              fontSize: "16px",
            }}
          />
        </div>
      </form>

      {/* beneficiary name */}

      <form>
        <label htmlFor="beneficiarynamee" className="text-[#4A5568] text-sm ">
          Beneficiary
        </label>
        <div className="px-[10px] items-center mt-1 rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
          <input
            type="text"
            value={beneficiary}
            onChange={(e) => setBeneficiary(e.target.value)}
            placeholder="Enter Beneficiary Name"
            id="beneficiarynamee"
            className="font-normal h-8 outline-none"
            style={{
              color: "#718096",
              fontSize: "16px",
            }}
          />
        </div>
      </form>
      <div className="flex">
        <form>
          <label htmlFor="startdate" className="text-[#4A5568] text-sm ">
            Start Date
          </label>
          <div className="px-[10px] items-center mt-1  rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
            <input
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              placeholder="Start date"
              id="startdate"
              className="font-normal w-[117px] h-8 outline-none"
              style={{
                color: "#718096",
                fontSize: "16px",
              }}
            />
          </div>
        </form>
        <form htmlFor="enddate">
          <div className="px-[10px] ml-2 items-center mt-7  rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
            <input
              type="date"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              placeholder="End date"
              id="enddate"
              className="font-normal w-[117px]  h-8 outline-none"
              style={{
                color: "#718096",
                fontSize: "16px",
              }}
            />
          </div>
        </form>
      </div>

      <button className="bg-[#7535fC] w-[283px] rounded mt-2 h-[37px] text-white">
        Apply
      </button>

      {/* Close button */}
      <button className="absolute top-0 right-0 m-2" onClick={onClose}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="IoCloseOutline">
            <path
              id="Vector (Stroke)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L12 10.9393L16.7197 6.21967C17.0126 5.92678 17.4874 5.92678 17.7803 6.21967C18.0732 6.51256 18.0732 6.98744 17.7803 7.28033L13.0607 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L12 13.0607L7.28033 17.7803C6.98744 18.0732 6.51256 18.0732 6.21967 17.7803C5.92678 17.4874 5.92678 17.0126 6.21967 16.7197L10.9393 12L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z"
              fill="#4A5568"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Filter;
