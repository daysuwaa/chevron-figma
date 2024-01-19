import React, { useState } from "react";
import { Link } from "react-router-dom";

const Security = () => {
  const [cpassword, setCpassword] = useState("");
  const [npassword, setNpassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className="flex flex-col items-center mt-11">
      {/*1  white boxxx  */}
      <div
        className="bg-white w-[616px] h-[375px] mt-5 rounded"
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
        <div className="m-6">
          <form>
            <label className="text-[#4A5568] text-sm ">
              User / Organization Name
              <input
                type="text"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
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

        <div className="m-6">
          <form>
            <label className="text-[#4A5568] text-sm ">
              User / Organization Name
              <input
                type="text"
                value={npassword}
                onChange={(e) => setNpassword(e.target.value)}
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

        <div className="m-6">
          <form>
            <label className="text-[#4A5568] text-sm ">
              User / Organization Name
              <input
                type="text"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
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
      </div>

      {/* second white box */}

      <div
        className="bg-white w-[616px] h-[375px] mt-5 rounded"
        style={{
          boxShadow:
            "0px 0.073px 6.159px 0px rgba(0, 0, 0, 0.07), 0px 2.338px 17.029px 0px rgba(0, 0, 0, 0.05), 0px 9.853px 41px 0px rgba(0, 0, 0, 0.04), 0px 42px 136px 0px rgba(0, 0, 0, 0.02)",
        }}
      ></div>
    </div>
  );
};

export default Security;
