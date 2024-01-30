import React, { useState } from "react";
import { Link } from "react-router-dom";
import info from "src/assets/CkInfoOutline.svg";
import Scan from "src/assets/image 4.png";
import Tooltip from "@mui/material/Tooltip";

const Security = () => {
  const [cpassword, setCpassword] = useState("");
  const [npassword, setNpassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // toggle button function
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
  // checkbox function

  const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    return (
      <label className="flex items-center mt-2 space-x-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="form-checkbox h-4 w-4 text-green-500"
        />
        <span className="text-[#4A5568] text-xs">
          Also enable 2FA for approvals
        </span>
      </label>
    );
  };

  return (
    <div className="flex flex-col items-center mt-11">
      {/*1  white boxxx  */}
      <div
        className="bg-white w-[616px] h-[437px] mt-5 rounded"
        style={{
          boxShadow:
            "0px 0.073px 6.159px 0px rgba(0, 0, 0, 0.07), 0px 2.338px 17.029px 0px rgba(0, 0, 0, 0.05), 0px 9.853px 41px 0px rgba(0, 0, 0, 0.04), 0px 42px 136px 0px rgba(0, 0, 0, 0.02)",
        }}
      >
        <div className="m-6  ">
          <p className="text-[#4A5568] font-semibold text-sm">
            Change Password
          </p>
          <p className="text-[#718096] font-light text-xs pt-2">
            Forgot your password?
            <span className="text-[#3B2773] ml-2 text-xs underline font-[500]">
              <Link to="/error">Reset password </Link>
            </span>
          </p>
        </div>

        {/* formsssss */}
        <div className="m-6">
          <form>
            <label className="text-[#4A5568] text-sm ">
              Current Password
              <input
                type="text"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                className="mb-2"
              />
            </label>
            <div className="px-[10px] items-center h-[40px] flex w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                placeholder="Enter existing password"
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
              New password
              <input
                type="text"
                value={npassword}
                onChange={(e) => setNpassword(e.target.value)}
                className="mb-2"
              />
            </label>
            <div className="px-[10px] items-center h-[40px] flex w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                placeholder="Enter new password"
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
              Confirm Password
              <input
                type="text"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="mb-2"
              />
            </label>
            <div className="px-[10px] items-center h-[40px] flex w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                placeholder="Re-type password"
                id="search"
                className="font-normal w-[320px] h-8 outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                }}
              />
            </div>
          </form>
          {/* button */}
          <div
            className="h-[32px] mt-7 rounded bg-white px-[12px] items-center w-[144px] text-center"
            style={{
              border: " 1px solid var(--Button-Background-Alternate, #3B2773)",
            }}
          >
            <button className="text-[#1C065A] text-center items-centermt-2 text-sm">
              Update Password
            </button>
          </div>
        </div>
      </div>

      {/* second white box */}

      <div className="flex items-center mt-3 ">
        <p className="text-[#4A5568] text-sm">
          Activate 2 Factor Authentication
        </p>
        <Tooltip
          title="Fund your wallaet by paying into Guarantee Trust Account"
          placement="bottom"
        >
          <img src={info} alt="info" className=" ml-3 mr-[19rem] " />
        </Tooltip>
        <ToggleButton className="" />
      </div>

      {/* second box */}
      <div
        className="bg-white w-[614px] h-[321px] mt-5 rounded mb-5"
        style={{
          boxShadow:
            "0px 0.073px 6.159px 0px rgba(0, 0, 0, 0.07), 0px 2.338px 17.029px 0px rgba(0, 0, 0, 0.05), 0px 9.853px 41px 0px rgba(0, 0, 0, 0.04), 0px 42px 136px 0px rgba(0, 0, 0, 0.02)",
        }}
      >
        <div className="grid grid-cols-2 m-6">
          <div className="items-center justify-center">
            <p className="text-[#4A5568] font-normal text-lg mb-4">
              Enable 2FA
            </p>
            <div className="bg-[#E2E8F0] w-[235px] h-[181px] rounded ">
              <img
                src={Scan}
                alt="code"
                className=" items-center text-center w-[179px] h-[172px] mx-auto pr-2 pl-1 pt-5 pb-3"
              />
            </div>
          </div>

          {/* second grid */}
          <div className="mt-9">
            <p className="text-[#4A5568] text-sm font-normal">
              In order to turn on 2FA, use your mobile Authenticator app to scan
              the code, then enter the six-digit code provided by the app in the
              form below.
            </p>
            <div className="flex mt-3">
              <input
                type="text"
                id="search"
                className="font-normal w-[40px] mx-1 h-[40px] text-center outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                  border: "1px solid var(--gray-200, #E2E8F0)",
                }}
              />
              <input
                type="text"
                id="search"
                className="font-normal w-[40px] mx-1 h-[40px] text-center outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                  border: "1px solid var(--gray-200, #E2E8F0)",
                }}
              />
              <input
                type="text"
                id="search"
                className="font-normal w-[40px] mx-1 h-[40px] text-center outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                  border: "1px solid var(--gray-200, #E2E8F0)",
                }}
              />
              <input
                type="text"
                id="search"
                className="font-normal w-[40px] mx-1 h-[40px] text-center outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                  border: "1px solid var(--gray-200, #E2E8F0)",
                }}
              />
              <input
                type="text"
                id="search"
                className="font-normal w-[40px] mx-1 h-[40px] text-center outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                  border: "1px solid var(--gray-200, #E2E8F0)",
                }}
              />
              <input
                type="text"
                id="search"
                className="font-normal w-[40px] mx-1 h-[40px] text-center outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                  border: "1px solid var(--gray-200, #E2E8F0)",
                }}
              />
            </div>
            <Checkbox />

            {/* button */}
            <div
              className="h-[32px] mt-7 rounded bg-white px-[12px] items-center w-[100px] text-center"
              style={{
                border:
                  " 1px solid var(--Button-Background-Alternate, #3B2773)",
              }}
            >
              <button className="text-[#1C065A] text-center items-centermt-2 text-sm">
                Enable 2FA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
