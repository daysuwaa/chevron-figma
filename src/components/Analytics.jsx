import React from "react";
import Anabar from "../components/Ana_bar";
import Anapie from "../components/Ana.pie";
import man from "../assets/image 1.png";
import arrowdown from "../assets/FiChevronDown.svg";
import icloud from "../assets/IoCloudDownloadOutline.svg";
const Analytics = () => {
  return (
    <div>
      {/* NAVBAR */}
      <div
        className="flex px-[32px] py-[18px] justify-between h-[60px]"
        style={{ background: "#fff" }}
      >
        <p className="font-semibold tracking-wide ">Analytical</p>
        <div className="flex items-center">
          <img src={man} alt="arrow" className="w-[24px] h-[24px] mr-3" />
          <img src={arrowdown} alt="man" className="w-[14px] h-[14px]" />
        </div>
      </div>

      {/* END OF NAV */}

      {/* the chartssss */}
      <div className="grid grid-cols-3 gap-4 mt-4 mx-7">
        <div className="col-span-2 bg-white p-4 text-center">
          <div
            className="flex  font-light tracking-wide"
            style={{
              color: "var(--Color-Gray-Gray-70, #4A5568)",
              fontSize: "14px",
              lineHeight: "24px",
            }}
          >
            <p>Inflows vs Outflows</p>
            <div className=" flex ml-auto">
              <p
                className="flex h-[28px] items-center mx-2"
                style={{
                  border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)",
                  borderRadius: "4px",
                  padding: "6px 12px",
                }}
              >
                Last 1 year <img src={arrowdown} alt=""></img>
              </p>
              <img
                src={icloud}
                alt="icloud"
                style={{
                  border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)",
                  borderRadius: "4px",
                  padding: "6px 12px",
                }}
              />
            </div>
          </div>
          <Anabar />
        </div>

        <div className="col-span-1 justify-center items-center bg-white p-4">
          <div className="flex-1">
            <p
              style={{
                color: "var(--Color-Gray-Gray-70, #4A5568",
                fontSize: "14px",
                lineHeight: "24px",
              }}
            >
              Cash overflow
            </p>
            <Anapie />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
