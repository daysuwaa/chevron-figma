import React, { useState } from "react";
import Anabar from "./Ana_bar";
import Anapie from "./Ana.pie";
import Anawave from "./Ana_wave";
import Anawave2 from "./Ana_wave2";
import Anawave3 from "./Ana_wave3";
import millify from "millify";
import Navbar from "../Stuff/Navbar";
import icloud from "src/assets/IoCloudDownloadOutline.svg";
import redarrow from "src/assets/Redarrow.svg";
import greenarow from "src/assets/Green.svg";

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

  const [month, setMonth] = useState("");
  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  const graphs = (title, money, arrow, text, text2, color, graph) => {
    return (
      <div className="col-span-2 mb-4 bg-white  p-4 text-start sm:text-center">
        <div>
          <div className="flex mx-1 mt-3">
            <p className="text-[#4A5568]">{title}</p>
            <img
              src={icloud}
              alt="icloud"
              className="sm:ml-auto sm:mx-0 mx-auto mt-1 sm:mt-0"
              style={{
                border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)",
                borderRadius: "4px",
                padding: "6px 12px",
              }}
            />
          </div>
          <div className="flex sm:mx-1 mx-auto mt-1">
            <h3 className="text-[#1C065A] text-2xl font-bold  ">N{money}</h3>
            <img src={arrow} alt="greenarrow" className="w-[25px] h-[25px]" />
          </div>
        </div>
        <div className="text-start mt-1">
          <p className="text-[10px] " style={{ color: color }}>
            {text}
            <span className="text-[#718096] text-[10px] ml-1">{text2}</span>
          </p>
        </div>
        {graph}
      </div>
    );
  };

  return (
    <div className="h-full">
      {/* NAVBAR */}
      <Navbar title="Analytics" />
      {/* END OF NAV */}
      {/* the chartssss */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-4 mx-3 md:mx-7">
        {/* Column with bar chart */}
        <div className="col-span-1 lg:col-span-2 bg-white p-4 text-center">
          <div className="lg:flex md:flex sm:flex font-light tracking-wide text-[#4A5568] text-sm">
            <p>Inflows vs Outflows</p>
            <div className="flex mt-2  justify-center  sm:mt-0 sm:ml-auto">
              <p
                className="flex h-[28px] mx-2 items-center sm:mx-2"
                style={{
                  border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)",
                  borderRadius: "4px",
                  padding: "6px 12px",
                }}
              >
                <select
                  value={month}
                  className="outline-none w-full"
                  onChange={handleChange}
                >
                  <option value="month1">Last 1 month</option>
                  <option value="month2">Last 2 months</option>
                  <option value="month 3">Last 5 Months</option>
                  <option value="month6">Last 1 year</option>
                </select>
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

        {/* Column with pie chart */}
        <div className="col-span-1 justify-center items-center bg-white p-5">
          <p className="font-light tracking-wide text-[#4A5568] text-sm">
            Schedule distribution
          </p>
          <div className="flex items-center justify-center">
            <Anapie />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-6  lg:grid-cols-3 md:grid-cols-1 mx-3 md:mx-7 gap-4 ">
        <div className="w-full">
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

        <div className="w-full">
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

        <div className="w-full mb-5">
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
