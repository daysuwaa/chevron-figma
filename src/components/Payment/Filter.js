import React, { useState } from "react";
import close from "src/assets/IoCloseOutline.svg";

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
          <label htmlFor="payment" className="text-[#4A5568] text-sm ">
            Payment Id
          </label>
          <div className="px-[10px] items-center mt-1  rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
            <input
              type="text"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              placeholder="Enter Payment Id"
              id="payment"
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
        <label htmlfor="amount" className="text-[#4A5568] text-sm ">
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
        <label htmlFor="beneficiaryname" className="text-[#4A5568] text-sm ">
          Beneficiary
        </label>
        <div className="px-[10px] items-center mt-1 rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
          <input
            type="text"
            value={beneficiary}
            onChange={(e) => setBeneficiary(e.target.value)}
            placeholder="Enter Beneficiary Name"
            id="beneficiaryname"
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
              value={beneficiary}
              onChange={(e) => setBeneficiary(e.target.value)}
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
              value={beneficiary}
              onChange={(e) => setBeneficiary(e.target.value)}
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
        <img src={close} />
      </button>
    </div>
  );
};

export default Filter;
