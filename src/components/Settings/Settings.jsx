import React, { useState } from "react";
import man from "src/assets/image 1.png";
import arrowdown from "src/assets/FiChevronDown.svg";
import General from "./General";
import Security from "./Security";
import SessHis from "./SessionHistory";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div>
      <div
        className="flex px-4 md:px-[32px] py-[18px] justify-between h-[60px]"
        style={{ background: "#fff" }}
      >
        <p className="font-semibold tracking-wide ">Settings</p>
        <div className="flex items-center">
          <img src={man} alt="arrow" className="w-[24px] h-[24px] mr-3" />
          <img src={arrowdown} alt="man" className="w-[14px] h-[14px]" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">
        <div>
          <button
            className={`px-4 py-2 text-[14px] ${
              activeTab === "General"
                ? "font-bold text-[#1C065A] border-b-2 border-[#1C065A]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("General")}
          >
            General
          </button>
          <button
            className={`px-4 py-2 text-[14px] ${
              activeTab === "Security"
                ? "font-bold text-[#1C065A] border-b-2 border-[#1C065A]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Security")}
          >
            Security
          </button>

          <button
            className={`px-4 py-2 text-[14px] ${
              activeTab === "SessHis"
                ? "font-bold text-[#1C065A] border-b-2 border-[#1C065A]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("SessHis")}
          >
            Session History
          </button>
        </div>
        {/* long ass line */}
        <div
          className="w-full border-b mt-4"
          style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
        ></div>
      </div>

      {/* if tab is active its on general else its on security else its on sesshis */}
      {activeTab === "General" ? (
        <General />
      ) : activeTab === "Security" ? (
        <Security />
      ) : (
        <SessHis />
      )}
    </div>
  );
};

export default Settings;
