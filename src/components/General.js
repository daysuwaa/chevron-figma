import React, { useState } from "react";
import chevron from "../assets/chevron logo.png";
import info from "../assets/CkInfoOutline.svg";
import Tooltip from "@mui/material/Tooltip";

const General = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [timer, setTimer] = useState("");
  const handleChange = (event) => {
    setTimer(event.target.value);
  };

  const showAlert1 = () => {
    alert("Log me out if I'm inactive for this long");
  };

  const showAlert2 = () => {
    alert("Notify me via email whenever a payment schedule starts");
  };

  const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
      setIsActive(!isActive);
    };

    return (
      <button
        className={`h-4 w-8 flex rounded-full ${
          isActive ? "bg-green-500 justify-end" : "bg-gray-100 justify-start"
        } focus:outline-none transition duration-300 ease-in-out`}
        onClick={toggleButton}
      >
        <span
          className={` flex h-full w-1/2 rounded-full ${
            isActive ? "bg-gray-100" : "bg-gray-400"
          }`}
        ></span>
      </button>
    );
  };

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
            <div className="px-[10px] items-center h-[40px] flex w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
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
            <div className="px-[10px]  items-center h-[40px] flex w-[274px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
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
            <div className="px-[10px] items-center h-[40px] flex w-[274px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
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

        {/* timer  */}
        <div className="m-6">
          <form>
            <label className="flex text-[#4A5568] text-sm ">
              Interactive Timer
              <img
                src={info}
                alt="alert"
                onClick={() => {
                  showAlert1();
                }}
                className="w-[14px] h-[14px] ml-2  mt-1 "
              />
            </label>

            <div className="px-[0px] items-center h-[40px] flex w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
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
          </form>

          <div className="flex mt-6">
            <p className="text-[#4A5568] text-sm">Email Notifications</p>
            <Tooltip
              title="Choose whether to receive notifications via mail"
              placement="bottom"
            >
              <img
                src={info}
                alt="alert"
                className="ml-2 mt-1 w-[14px] h-[14px]"
                onClick={() => {
                  showAlert2();
                }}
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
