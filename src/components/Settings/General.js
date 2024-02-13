import React, { useState } from "react";
import chevron from "src/assets/chevron logo.png";
import Tooltip from "@mui/material/Tooltip";
import ToggleButton from "../Layout/ToggleButton";

const General = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [timer, setTimer] = useState("");
  const handleChange = (event) => {
    setTimer(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-11">
      <div className="flex items-center">
        <img src={chevron} alt="logo" className="w-[42px] h-[42px]" />
        <p className="mt-1  text-[#4A5568] font-semibold">Your Avatar</p>

        <div className="flex justify-start ml-[2rem] sm:ml-[12rem] md:ml-[12rem] lg:ml-[22rem]">
          <button
            className="h-[24px] mt-4 text-[#3B2773] rounded text-xs bg-white items-center px-2 text-center"
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
        className="bg-white  mb-10 sm:mb-10  mb:mb-0 w-[290px] sm:w-[450px] md:w-[450px] lg:w-[616px] h-full mt-5 rounded "
        style={{
          boxShadow:
            "0px 0.073px 6.159px 0px rgba(0, 0, 0, 0.07), 0px 2.338px 17.029px 0px rgba(0, 0, 0, 0.05), 0px 9.853px 41px 0px rgba(0, 0, 0, 0.04), 0px 42px 136px 0px rgba(0, 0, 0, 0.02)",
        }}
      >
        {/* namee */}
        <div className="m-6">
          <form>
            <label htmlFor="user" className="text-[#4A5568] text-sm pb-2 block">
              User / Organization Name
            </label>
            <input
              type="text"
              placeholder="Chevron Group"
              id="user"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="font-normal px-4 text-[#718096] text-[14px] items-center h-[40px] flex w-full  rounded border border-[#CBD5E0] focus-within:outline outline-2  outline-blue-600"
            />
          </form>
        </div>

        {/* email address */}
        <div className="m-6 hidden md:hidden lg:flex">
          <form className="mr-3" style={{ width: "50%" }}>
            <label htmlFor="mail" className="text-[#4A5568] text-sm pb-2 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="info@chevrongroup.com"
              id="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="font-normal px-4 items-center h-[40px] w-full inline-block rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600 text-[#718096] text-[14px]"
            />
          </form>
          {/* telephone */}
          <form style={{ width: "50%" }}>
            <label
              htmlFor="phone"
              className="text-[#4A5568] text-sm pb-2 block"
            >
              Phone
            </label>
            <input
              type="number"
              placeholder="+234 908 776 1245"
              id="phone"
              autoComplete="number"
              className="font-normal w-full px-4 items-center h-[40px] inline-block rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600 text-[#718096] text-[14px]"
            />
          </form>
        </div>

        {/* small screen */}
        <div className="m-6 lg:hidden">
          <form>
            <label
              htmlFor="email"
              className="text-[#4A5568] text-sm pb-2 block "
            >
              Email
            </label>
            <input
              type="email"
              placeholder="info@chevrongroup.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              autoComplete="email"
              className=" px-4 items-center h-[40px] flex w-full  rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600 font-normal  text-[#718096] text-[14px]"
            />
          </form>
          <form>
            <label
              htmlFor="tele"
              className="text-[#4A5568] text-sm mt-6 pb-2 block"
            >
              Telephone
            </label>

            <input
              type="number"
              placeholder="+234 908 776 1245"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="tele"
              autoComplete="number"
              className=" px-4 items-center h-[40px] flex w-full  rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600 font-normal  text-[#718096] text-[14px]"
            />
          </form>
        </div>

        {/* timer  */}
        <div className="m-6">
          <label htmlFor="timer" className="flex text-[#4A5568] text-sm pb-2">
            Interactive Timer
            <Tooltip
              title="Log me out if im inactive for this long"
              placement="bottom"
            >
              <svg
                className="ml-2 mt-1 w-[14px] h-[14px] cursor-pointer"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="CkInfoOutline" clipPath="url(#clip0_1050_818)">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6ZM6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM5.97963 4.00007C6.25577 4.00007 6.47963 3.77621 6.47963 3.50007C6.47963 3.22393 6.25577 3.00007 5.97963 3.00007C5.70349 3.00007 5.47963 3.22393 5.47963 3.50007C5.47963 3.77621 5.70349 4.00007 5.97963 4.00007ZM6.47963 5.00014V5.50014V8.50014V9.00014H5.47963V8.50014V5.50014V5.00014H6.47963Z"
                    fill="#4A5568"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1050_818">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Tooltip>
          </label>

          <div className="px-4 items-center h-[40px] flex w-full lg:w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
            <select
              id="timer"
              value={timer}
              className="outline-none w-full text-[#4A5568] text-sm"
              onChange={handleChange}
            >
              <option value="Ford">5 mins</option>
              <option value="Volvo">10 mins</option>
              <option value="Fiat">20 mins</option>
              <option value="Fiat">1 hour</option>
            </select>
          </div>

          <div className="flex mt-6">
            <p className="text-[#4A5568] text-sm">Email Notifications</p>
            <Tooltip
              title="Notify me when a payment schedule starts"
              placement="bottom"
            >
              <svg
                className="ml-2 mt-1 w-[14px] h-[14px] cursor-pointer"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="CkInfoOutline" clipPath="url(#clip0_1050_818)">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6ZM6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM5.97963 4.00007C6.25577 4.00007 6.47963 3.77621 6.47963 3.50007C6.47963 3.22393 6.25577 3.00007 5.97963 3.00007C5.70349 3.00007 5.47963 3.22393 5.47963 3.50007C5.47963 3.77621 5.70349 4.00007 5.97963 4.00007ZM6.47963 5.00014V5.50014V8.50014V9.00014H5.47963V8.50014V5.50014V5.00014H6.47963Z"
                    fill="#4A5568"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1050_818">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Tooltip>
            <div className="ml-auto">
              <ToggleButton />
            </div>
          </div>
        </div>

        {/* end of forms */}
      </div>
      {/* end of code */}
    </div>
  );
};
export default General;
