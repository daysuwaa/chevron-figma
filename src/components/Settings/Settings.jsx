import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import General from "./General";
import Security from "./Security";
import SessHis from "./SessionHistory";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div>
      <Navbar title="Settings" />
      <div className="flex flex-col items-center mt-4">
        <div>
          <button
            className={`mx-4 my-2 text-[14px] ${
              activeTab === "General"
                ? "font-bold text-[#1C065A] border-b-2 border-[#1C065A]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("General")}
          >
            General
          </button>
          <button
            className={`mx-4 my-2 text-[14px] ${
              activeTab === "Security"
                ? "font-bold text-[#1C065A] border-b-2 border-[#1C065A]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Security")}
          >
            Security
          </button>

          <button
            className={`mx-4 my-2 text-[14px] ${
              activeTab === "SessHis"
                ? "font-bold text-[#1C065A] border-b-2 border-[#1C065A]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("SessHis")}
          >
            Session History
          </button>
        </div>
      </div>
      <hr className="bg-[#CBD5E0] w-full h-0.3 mt-5" />
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
