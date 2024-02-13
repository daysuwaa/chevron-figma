import React, { useState } from "react";
import { Link } from "react-router-dom";
import Scan from "src/assets/image 4.png";
import Tooltip from "@mui/material/Tooltip";
import ToggleButton from "../Layout/ToggleButton";

const Security = () => {
  const [cpassword, setCpassword] = useState("");
  const [npassword, setNpassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    return (
      <label className="flex items-center mt-2 space-x-2">
        <input
          id="check"
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
            <label
              htmlFor="ccpassword"
              className="text-[#4A5568] text-sm pb-2 block"
            >
              Current Password
            </label>

            <input
              type="password"
              placeholder="Enter existing password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              id="ccpassword" // Add id attribute
              autoComplete="current-password"
              className="font-normal px-4 text-[#718096] text-[14px] items-center h-[40px] flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600"
            />
          </form>
        </div>
        <div className="m-6">
          <form>
            <label
              htmlFor="npassword"
              className="text-[#4A5568] text-sm pb-2 block"
            >
              New password
            </label>

            <input
              type="password"
              placeholder="Enter new password"
              value={npassword}
              onChange={(e) => setNpassword(e.target.value)}
              id="npassword" // Add id attribute
              autoComplete="new-password"
              className="font-normal px-4 text-[#718096] text-[14px] items-center h-[40px] flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600"
            />
          </form>
        </div>
        <div className="m-6">
          <form>
            <label
              htmlFor="confirmpassword"
              className="text-[#4A5568] text-sm pb-2 block"
            >
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Re-type password"
              id="confirmpassword"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              autoComplete="new-password"
              className="font-normal px-4 text-[#718096] text-[14px] items-center h-[40px] flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600"
            />
          </form>
          {/* button */}

          <button className="text-[#1C065A]  items-center text-sm h-[32px] border border-[#3B2773] mt-7 rounded bg-white px-3   text-center">
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
          <svg
            className="mx-2"
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
          <div>
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
                  id="num"
                  className="font-normal text-[#718096] text-[14px] border border-[#E2E8F0] mr-1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-center outline-none"
                />
              </form>
              <form>
                <input
                  type="number"
                  id="number2"
                  className="font-normal text-[#718096] text-[14px] border border-[#E2E8F0] mr-1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-center outline-none"
                />
              </form>
              <form>
                <input
                  type="number"
                  id="number3"
                  className="font-normal text-[#718096] text-[14px] border border-[#E2E8F0] mr-1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-center outline-none"
                />
              </form>
              <form>
                <input
                  type="number"
                  id="number4"
                  className="font-normal text-[#718096] text-[14px] border border-[#E2E8F0] mr-1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-center outline-none"
                />
              </form>

              <form>
                <input
                  type="number"
                  id="number5"
                  className="font-normal text-[#718096] text-[14px] border border-[#E2E8F0] mr-1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-center outline-none"
                />
              </form>

              <form>
                <input
                  type="text"
                  id="number6"
                  className="font-normal text-[#718096] text-[14px] border border-[#E2E8F0] mr-1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-center outline-none"
                />
              </form>
            </div>
            <Checkbox />

            {/* button */}

            <button className="text-[#1C065A] text-center border border-[#3B2773]  text-sm h-[32px] mt-7 rounded bg-white ] items-center w-[100px] ">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
