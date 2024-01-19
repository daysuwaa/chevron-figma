import React, { useState } from "react";
import chevron from "../assets/chevron logo.png";

const General = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [timer, setTimer] = useState("");

  return (
    <div className="flex flex-col items-center mt-11">
      <div className="flex items-center">
        <img src={chevron} alt="logo" className="w-[42px] h-[42px]" />
        <p className="mt-1 ml-2 text-[#4A5568] font-semibold">Your Avatar</p>

        <div className="flex ml-[22rem]">
          <button
            className="h-[24px] mt-4 text-[#3B2773] rounded text-xs bg-white items-center w-[121px] text-center"
            style={{
              border: "1px solid var(--Button-Background-Alternate, #3B2773)",
            }}
          >
            Upload New Avatar
          </button>
        </div>
      </div>

      {/* the formsss */}
      <div
        className="bg-white w-[616px] h-[375px] mt-5 rounded"
        style={{
          boxShadow:
            "0px 0.073px 6.159px 0px rgba(0, 0, 0, 0.07), 0px 2.338px 17.029px 0px rgba(0, 0, 0, 0.05), 0px 9.853px 41px 0px rgba(0, 0, 0, 0.04), 0px 42px 136px 0px rgba(0, 0, 0, 0.02)",
        }}
      >
        {/* namee */}
        <div className="m-6">
          <form>
            <label className="text-[#4A5568] text-sm ">
              User / Organization Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-2"
              />
            </label>
            <div className="px-[20px] items-center h-[40px] flex w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                placeholder="Chevron Group"
                id="search"
                className="font-normal w-[320px] h-8 outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                }}
              />
            </div>
          </form>
        </div>
        {/* email address */}
        <div className="m-6  flex">
          <form className="mr-3">
            <label className="text-[#4A5568] text-sm ">
              Email Address
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2 "
              />
            </label>
            <div className="px-[20px]  items-center h-[40px] flex w-[274px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                placeholder="info@chevrongroup.com"
                id="search"
                className="font-normal w-[320px] h-8 outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                }}
              />
            </div>
          </form>
          {/* telephone */}
          <form>
            <label className="text-[#4A5568] text-sm ">
              Phone
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="mb-2"
              />
            </label>
            <div className="px-[20px] items-center h-[40px] flex w-[274px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                placeholder="+234 908 776 1245"
                id="search"
                className="font-normal w-[320px] h-8 outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                }}
              />
            </div>
          </form>
        </div>

        <div className="m-6">
          <form>
            <label className="text-[#4A5568] text-sm ">
              <input
                type="text"
                value={timer}
                onChange={(e) => setTimer(e.target.value)}
                className="mb-2"
              />
            </label>
            <div className="px-[20px] items-center h-[40px] flex w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                placeholder="Chevron Group"
                id="search"
                className="font-normal w-[320px] h-8 outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                }}
              />
            </div>
          </form>
        </div>

        {/* end of forms */}
      </div>
      {/* end of code */}
    </div>
  );
};
export default General;
