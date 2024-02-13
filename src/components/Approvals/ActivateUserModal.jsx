import React, { useState } from "react";
import close from "src/assets/IoCloseOutline.svg";

const ActivateScheduleModal = ({ isInactiveModalOpen, closeInactiveModal }) => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  return (
    isInactiveModalOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded w-[22rem] lg:w-[27rem] md:w-[25rem]">
          <div className="flex justify-center">
            <p className="mx-auto text-md font-semibold mb-2 text-[#4A5568]">
              Activate Schedule
            </p>
            <button
              onClick={closeInactiveModal}
              className="cursor-pointer justify-end"
            >
              <img src={close} alt="close" className="cursor-pointer" />
            </button>
          </div>
          {/* lineee */}
          <div
            className="w-full h-[2px] border-b "
            style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
          ></div>
          <div className="pt-3">
            <p className="text-[#4A5568] text-center text-sm">
              Are you sure you want to Activate this user?
            </p>
            <p className="text-[#4A5568] text-center text-sm mx-2">
              The payouts defined in the schedule will take effect immediately.
            </p>
            {/* formsss */}

            {/* #3 password */}
            <div className="my-6">
              <form>
                <label className="text-[#4A5568] text-sm ">
                  Password
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-2"
                  />
                </label>
                <div className="px-[10px] items-center h-[40px] flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
                  <input
                    type="text"
                    placeholder="Enter Password"
                    id="search"
                    className="font-normal w-[320px] h-8 outline-none"
                    style={{
                      color: "#718096",
                      fontSize: "16px",
                    }}
                  />
                </div>
              </form>
            </div>
            <div className="my-6">
              <form>
                <label className="text-[#4A5568] text-sm ">
                  2FA Token
                  <input
                    type="text"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="mb-2"
                  />
                </label>
                <div className="px-[10px] items-center h-[40px] flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
                  <input
                    type="text"
                    placeholder="Enter your 2FA Token"
                    id="search"
                    className="font-normal w-[320px] h-8 outline-none text-lg"
                    style={{
                      color: "#718096",
                      fontSize: "16px",
                    }}
                  />
                </div>
              </form>
            </div>

            <button
              className="text-[#38A169] mt-5 flex mx-auto lg:w-[174px] md:w-full w-full h-[40px] rounded-sm justify-center items-center"
              style={{ border: "1px solid #38A169", padding: "0px 16px" }}
              onClick={closeInactiveModal}
            >
              Activate Schedule
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ActivateScheduleModal;
