import React, { useState } from "react";
import chevron from "src/assets/chevron logo.png";
import info from "src/assets/CkInfoOutline.svg";
import Tooltip from "@mui/material/Tooltip";
import ToggleButton from "../Stuff/ToggleButton";

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
        className="bg-white  mb-10 sm:mb-10  mb:mb-0 w-[290px] sm:w-[450px] md:w-[450px] lg:w-[616px] h-full mt-5 rounded "
        style={{
          boxShadow:
            "0px 0.073px 6.159px 0px rgba(0, 0, 0, 0.07), 0px 2.338px 17.029px 0px rgba(0, 0, 0, 0.05), 0px 9.853px 41px 0px rgba(0, 0, 0, 0.04), 0px 42px 136px 0px rgba(0, 0, 0, 0.02)",
        }}
      >
        {/* namee */}
        <div className="m-6 ">
          <form>
            <label htmlFor="user" className="text-[#4A5568] text-sm  ">
              User / Organization Name
            </label>
            <div className="px-[10px] items-center h-[40px] flex w-full lg:w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2  outline-blue-600">
              <input
                type="text"
                placeholder="Chevron Group"
                id="user"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
        <div className="m-6  hidden md:hidden lg:flex ">
          <form className="mr-3">
            <label htmlFor="mail" className="text-[#4A5568] text-sm ">
              Email Address
            </label>
            <div className="px-[10px]  items-center h-[40px] flex w-full lg:w-[274px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="email"
                placeholder="info@chevrongroup.com"
                id="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <label htmlFor="phone" className="text-[#4A5568] text-sm ">
              Phone
            </label>
            <div className="px-[10px] items-center h-[40px] flex w-full lg:w-[274px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="tel"
                placeholder="+234 908 776 1245"
                id="phone"
                className="font-normal w-[320px] h-8 outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                }}
              />
            </div>
          </form>
        </div>
        {/* small screen */}
        <div className="m-6 lg:hidden">
          <form>
            <label htmlFor="email" className="text-[#4A5568] text-sm ">
              Email
            </label>
            <div className="px-[10px] items-center h-[40px] flex w-full  rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                placeholder="info@chevrongroup.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="font-normal w-[320px]  outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                }}
              />
            </div>
          </form>
        </div>

        <div className="m-6 lg:hidden ">
          <label htmlFor="tele" className="text-[#4A5568] text-sm">
            Telephone
          </label>
          <div className="px-[10px] items-center h-[40px] mt-3 flex w-full  rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
            <input
              type="tel"
              placeholder="+234 908 776 1245"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="tele"
              className="font-normal w-[320px] h-8 outline-none"
              style={{
                color: "#718096",
                fontSize: "14px",
              }}
            />
          </div>
        </div>

        {/* timer  */}
        <div className="m-6">
          <label className="flex text-[#4A5568] text-sm mb-2">
            Interactive Timer
            <Tooltip
              title="Log me out if im inactive for this long"
              placement="bottom"
            >
              <img
                src={info}
                alt="alert"
                className="ml-2 mt-1 w-[14px] h-[14px] cursor-pointer"
              />
            </Tooltip>
          </label>

          <div className="px-[0px] items-center h-[40px] flex w-full lg:w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
            <select
              value={timer}
              className="outline-none w-full"
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
              <img
                src={info}
                alt="alert"
                className="ml-2 mt-1 w-[14px] h-[14px] cursor-pointer"
              />
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
