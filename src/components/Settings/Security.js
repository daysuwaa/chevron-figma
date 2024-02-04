import React, { useState } from "react";
import { Link } from "react-router-dom";
import info from "src/assets/CkInfoOutline.svg";
import Scan from "src/assets/image 4.png";
import Tooltip from "@mui/material/Tooltip";
import ToggleButton from "../Stuff/ToggleButton";

const Security = () => {
  const [cpassword, setCpassword] = useState("");
  const [npassword, setNpassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // toggle button function

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
    <div className="flex flex-col items-center mt-11 mb-9 ">
      {/*1  white boxxx  */}
      <div
        className="bg-white h-[437px] mt-5 rounded w-[290px] sm:w-[450px] md:w-[450px] lg:w-[616px]"
        style={{
          boxShadow:
            "0px 0.073px 6.159px 0px rgba(0, 0, 0, 0.07), 0px 2.338px 17.029px 0px rgba(0, 0, 0, 0.05), 0px 9.853px 41px 0px rgba(0, 0, 0, 0.04), 0px 42px 136px 0px rgba(0, 0, 0, 0.02)",
        }}
      >
        <div className="m-6 ">
          <p className="text-[#4A5568] font-semibold text-[18px]">
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
            <label htmlFor="ccpassword" className="text-[#4A5568] text-sm">
              Current Password
            </label>
            <div className="px-[10px] items-center h-[40px] flex lg:w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="password"
                placeholder="Enter existing password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                id="ccpassword"
                className="font-normal w-[320px] h-8 outline-none text-[#4A5568] text-[14px]"
              />
            </div>
          </form>
        </div>
        <div className="m-6">
          <form>
            <label htmlFor="npassword" className="text-[#4A5568] text-sm ">
              New password
            </label>
            <div className="px-[10px] items-center h-[40px] flex lg:w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="password"
                placeholder="Enter new password"
                value={npassword}
                onChange={(e) => setNpassword(e.target.value)}
                id="npassword"
                className="font-normal w-[320px] h-8 outline-none text-[#4A5568] text-[14px] "
              />
            </div>
          </form>
        </div>
        <div className="m-6">
          <form>
            <label htmlFor="c-password" className="text-[#4A5568] text-sm ">
              Confirm Password
            </label>
            <div className="px-[10px] items-center h-[40px] flex lg:w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="password"
                placeholder="Re-type password"
                id="c-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="font-normal w-[320px] h-8 outline-none text-[#4A5568] text-[14px]"
              />
            </div>
          </form>
          {/* button */}

          <button
            className="text-[#1C065A]  items-center text-sm h-[32px] mt-7 rounded bg-white   w-[144px] text-center"
            style={{
              border: " 1px solid var(--Button-Background-Alternate, #3B2773)",
            }}
          >
            Update Password
          </button>
        </div>
      </div>

      {/* activate ... */}
      <div className="flex items-center mt-3  ">
        <p className="text-[#4A5568] text-sm">
          Activate 2 Factor Authentication
        </p>
        <Tooltip
          title="Fund your wallaet by paying into Guarantee Trust Account"
          placement="bottom"
        >
          <img src={info} alt="info" className=" lg:ml-3 lg:mr-[19rem] px-3 " />
        </Tooltip>
        <ToggleButton className="" />
      </div>

      {/* second box */}
      <div
        className="bg-white w-[290px] sm:w-[450px] md:w-[450px] lg:w-[616px] mt-5 rounded mb-5"
        style={{
          boxShadow:
            "0px 0.073px 6.159px 0px rgba(0, 0, 0, 0.07), 0px 2.338px 17.029px 0px rgba(0, 0, 0, 0.05), 0px 9.853px 41px 0px rgba(0, 0, 0, 0.04), 0px 42px 136px 0px rgba(0, 0, 0, 0.02)",
        }}
      >
        <div className="lg:grid lg:grid-cols-2 m-6 ">
          <div className="mx-auto">
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
            {/* all those boxes */}
            <div className="flex mt-3  ">
              <form>
                <input
                  type="numbers"
                  id="number"
                  className="font-normal mr-1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-center outline-none"
                  style={{
                    color: "#718096",
                    fontSize: "14px",
                    border: "1px solid var(--gray-200, #E2E8F0)",
                  }}
                />
              </form>
              <form>
                <input
                  type="number"
                  id="number2"
                  className="font-normal mx-1  w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-center outline-none"
                  style={{
                    color: "#718096",
                    fontSize: "14px",
                    border: "1px solid var(--gray-200, #E2E8F0)",
                  }}
                />
              </form>
              <form>
                <input
                  type="number"
                  id="number3"
                  className="font-normal w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-1  text-center outline-none"
                  style={{
                    color: "#718096",
                    fontSize: "14px",
                    border: "1px solid var(--gray-200, #E2E8F0)",
                  }}
                />
              </form>
              <form>
                <input
                  type="number"
                  id="number4"
                  className="font-normal w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-1  text-center outline-none"
                  style={{
                    color: "#718096",
                    fontSize: "14px",
                    border: "1px solid var(--gray-200, #E2E8F0)",
                  }}
                />
              </form>

              <form>
                <input
                  type="number"
                  id="number5"
                  className="font-normal w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-1  text-center outline-none"
                  style={{
                    color: "#718096",
                    fontSize: "14px",
                    border: "1px solid var(--gray-200, #E2E8F0)",
                  }}
                />
              </form>

              <form>
                <input
                  type="text"
                  id="search"
                  className="font-normal w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-1  text-center outline-none"
                  style={{
                    color: "#718096",
                    fontSize: "14px",
                    border: "1px solid var(--gray-200, #E2E8F0)",
                  }}
                />
              </form>
            </div>
            <Checkbox />

            {/* button */}

            <button
              className="text-[#1C065A] text-center  text-sm h-[32px] mt-7 rounded bg-white ] items-center w-[100px] "
              style={{
                border:
                  " 1px solid var(--Button-Background-Alternate, #3B2773)",
              }}
            >
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
