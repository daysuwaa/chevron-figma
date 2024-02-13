import React, { useState } from "react";
import close from "src/assets/IoCloseOutline.svg";

const DeactivateUserModal = ({ isActiveModalOpen, closeActiveModal }) => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const closeActiveModal1 = () => {
    closeActiveModal();
  };

  return (
    isActiveModalOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white w-[22rem] p-6 rounded lg:w-[23rem] md:w-[20rem]">
          <div className="flex justify-center ">
            <p className="mx-auto text-md font-semibold mb-2 text-[#4A5568]">
              Deactivate User
            </p>
            <button
              onClick={closeActiveModal}
              className="cursor-pointer justify-end"
            >
              <img src={close} alt="close" className="cursor-pointer" />
            </button>
          </div>
          {/* lineee */}
          <hr
            className="h-0.3 mb-2 border-b "
            style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
          />

          <div className="pt-3">
            <p className="text-[#4A5568] text-center text-sm">
              Are you sure you want to Deactivate this user?
            </p>
            <p className="text-[#4A5568] text-center text-sm mx-2">
              The payouts defined will cease to take effect immediately
            </p>
            {/* formsss */}

            {/* #3 password */}
            <div className="my-6">
              <form>
                <label
                  htmlFor="passpass"
                  className="text-[#4A5568] text-sm mb-2 block "
                >
                  Password
                </label>
                <div className="px-[10px] items-center h-[40px] flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    id="passpass"
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
                <label
                  htmlFor="redpass"
                  className="text-[#4A5568] text-sm mb-2 block"
                >
                  2FA Token
                </label>
                <div className="px-[10px] items-center h-[40px] flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
                  <input
                    type="text"
                    placeholder="Enter your 2FA Token"
                    id="redpass"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="font-normal w-[320px] h-8 outline-none text-lg"
                    style={{
                      color: "#718096",
                      fontSize: "16px",
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
          <button
            className="text-[#FF5655] mt-5 flex mx-auto w-full h-[40px] rounded-sm justify-center items-center"
            style={{ border: "1px solid #FF5655", padding: "0px 16px" }}
            onClick={closeActiveModal1}
          >
            Deactivate User
          </button>
        </div>
      </div>
    )
  );
};

export default DeactivateUserModal;
