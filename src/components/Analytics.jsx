import React from "react";
import Anabar from "../components/Ana_bar";
import Anapie from "../components/Ana.pie";
import Anawave from "../components/Ana_wave";
import Anawave2 from "../components/Ana_wave2";
import Anawave3 from "../components/Ana_wave3";
import millify from "millify";
import man from "../assets/image 1.png";
import arrowdown from "../assets/FiChevronDown.svg";
import icloud from "../assets/IoCloudDownloadOutline.svg";
import redarrow from "../assets/Redarrow.svg";
import greenarow from "../assets/Green.svg";

const Analytics = () => {
  const money1 = millify(953.2013, {
    precision: 2, // number of d.p
    lowercase: true, // Use lowercase abbreviations
    decimalSeparator: ",", // Custom decimal separator
    units: ["K"], // Custom units
  });

  const money2 = millify(11.219, {
    precision: 3, // Number of decimal places
  });

  const money3 = millify(14, {
    precision: 3, // Number of decimal places
  });

  const graphs = (title, money, arrow, text, text2, color, graph) => {
    return (
      <div className="col-span-2 bg-white p-4 text-center">
        <div>
          <div className="flex mx-7 mt-7">
            <p className="text-[#4A5568]">{title}</p>
            <img
              src={icloud}
              alt="icloud"
              className="ml-auto"
              style={{
                border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)",
                borderRadius: "4px",
                padding: "6px 12px",
              }}
            />
          </div>
          <div className="flex">
            <h3 className="text-[#1C065A] text-2xl font-bold ml-7 mr-2">
              N{money}
            </h3>
            <img src={arrow} alt="greenarrow" className="w-[25px] h-[25px]" />
          </div>
          <div className="ml-7">
            <p className=" text-[10px] " style={{ color: color }}>
              {text}
              <span className="text-[#718096] text-[10px] ml-1">{text2}</span>
            </p>
          </div>
          {graph}
        </div>
      </div>
    );
  };

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
        {/* <div className="col-span-2 bg-white p-4 text-center"> */}
        <div className="flex  font-light tracking-wide text-[#4A5568] text-sm">
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
              Last 1 year <img src={arrowdown} alt="" />
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
      <div className="col-span-1 justify-center items-center bg-white p-5">
        <p className="font-light tracking-wide text-[#4A5568] text-sm">
          Schedule distribution
        </p>
        <div className="flex items-center justify-center">
          <Anapie />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4 mx-7">
        <div className="w-[335px]">
          {graphs(
            "Total Payouts",
            money1,
            greenarow,
            "+12%",
            "from last month",
            "#38A169",
            <Anawave />
          )}
        </div>

        <div className="w-[335px]">
          {graphs(
            "Total Beneficiaries",
            money2,
            greenarow,
            "+8%",
            "from last month",
            "#38A169",
            <Anawave2 />
          )}
        </div>

        <div className="w-[335px]">
          {graphs(
            "Active Schedules",
            money3,
            redarrow,
            "-4%",
            "from last month",
            "#FF5655",
            <Anawave3 />
          )}
        </div>
      </div>

      {/* end of code */}
    </div>
  );
};

export default Analytics;
