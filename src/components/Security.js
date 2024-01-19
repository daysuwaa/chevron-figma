import React, { useState } from "react";
import { Link } from "react-router-dom";
import info from "../assets/CkInfoOutline.svg";

const Security = () => {
  const [cpassword, setCpassword] = useState("");
  const [npassword, setNpassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const showAlert3 = () => {
    alert("For added security, add 2 Factor Authentication to your account");
  };

  const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
      setIsActive(!isActive);
    };

    return (
      <button
        className={`h-5 w-9 flex justify-end rounded-full ${
          isActive ? "bg-green-500" : "bg-gray-100"
        } focus:outline-none transition  duration-300 ease-in-out`}
        onClick={toggleButton}
      >
        <span
          className={` flex h-full w-1/2 rounded-full ${
            isActive ? "bg-white" : "bg-gray-400"
          }`}
        ></span>
      </button>
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
        <img
          src={info}
          alt="info"
          className=" ml-3 mr-[19rem] "
          onClick={() => {
            showAlert3();
          }}
        />
        <ToggleButton className="" />
      </div>

      {/* second bo */}
      <div
        className="bg-white w-[614px] h-[321px] mt-5 rounded"
        style={{
          boxShadow:
            "0px 0.073px 6.159px 0px rgba(0, 0, 0, 0.07), 0px 2.338px 17.029px 0px rgba(0, 0, 0, 0.05), 0px 9.853px 41px 0px rgba(0, 0, 0, 0.04), 0px 42px 136px 0px rgba(0, 0, 0, 0.02)",
        }}
      ></div>
    </div>
  );
};

export default Security;
