import React, { useState } from "react";
import Anabar from "./Ana_bar";
import Anapie from "./Ana.pie";
import Anawave from "./Ana_wave";
import Anawave2 from "./Ana_wave2";
import Anawave3 from "./Ana_wave3";
import millify from "millify";
import Navbar from "../Layout/Navbar";
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

            <svg
              className="sm:ml-auto sm:mx-0 mx-auto mt-1 sm:mt-0 border border-[#CBD5E0] p-1 rounded"
              width="40"
              height="25"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="IoCloudDownloadOutline">
                <path
                  id="Vector (Stroke)"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.18122 3.40334C3.70925 2.10374 5.03007 0.875 7 0.875C9.11896 0.875 10.9251 2.31565 11.3232 4.64741C11.8628 4.71353 12.4417 4.87411 12.9256 5.18159C13.541 5.57267 14 6.20459 14 7.12031C14 8.00605 13.6227 8.66119 13.0022 9.07547C12.4068 9.473 11.6255 9.625 10.8281 9.625H8.75C8.50838 9.625 8.3125 9.42912 8.3125 9.1875C8.3125 8.94588 8.50838 8.75 8.75 8.75H10.8281C11.5347 8.75 12.1205 8.61202 12.5163 8.34776C12.8871 8.10026 13.125 7.7218 13.125 7.12031C13.125 6.54881 12.8594 6.17626 12.4563 5.92011C12.0328 5.65101 11.459 5.51699 10.9159 5.49009C10.7003 5.47941 10.5248 5.31321 10.5024 5.0986C10.2819 2.98961 8.76615 1.75 7 1.75C5.33226 1.75 4.26598 2.8502 3.91661 3.93983C3.86318 4.10647 3.71559 4.22524 3.54138 4.24179C2.77398 4.31469 2.0976 4.54149 1.62345 4.91323C1.16467 5.27293 0.875 5.78154 0.875 6.49688C0.875 7.21094 1.17716 7.75761 1.66866 8.13691C2.17071 8.52435 2.89061 8.75 3.71875 8.75H5.25C5.49162 8.75 5.6875 8.94588 5.6875 9.1875C5.6875 9.42912 5.49162 9.625 5.25 9.625H3.71875C2.74221 9.625 1.82147 9.3601 1.13408 8.82962C0.43612 8.29099 0 7.49234 0 6.49688C0 5.50268 0.421264 4.74391 1.08358 4.22464C1.66181 3.77129 2.40614 3.51244 3.18122 3.40334ZM7 5.6875C7.24162 5.6875 7.4375 5.88338 7.4375 6.125V11.6324L8.44088 10.6306C8.61187 10.4599 8.88888 10.4601 9.0596 10.6311C9.23032 10.8021 9.2301 11.0791 9.05912 11.2498L7.30912 12.9971C7.13832 13.1676 6.86168 13.1676 6.69088 12.9971L4.94088 11.2498C4.76989 11.0791 4.76968 10.8021 4.9404 10.6311C5.11112 10.4601 5.38813 10.4599 5.55912 10.6306L6.5625 11.6324V6.125C6.5625 5.88338 6.75838 5.6875 7 5.6875Z"
                  fill="#4A5568"
                />
              </g>
            </svg>
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
              <svg
                className="sm:ml-auto sm:mx-0 mx-auto mt-1 sm:mt-0 border border-[#CBD5E0] p-1 rounded"
                width="40"
                height="25"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="IoCloudDownloadOutline">
                  <path
                    id="Vector (Stroke)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.18122 3.40334C3.70925 2.10374 5.03007 0.875 7 0.875C9.11896 0.875 10.9251 2.31565 11.3232 4.64741C11.8628 4.71353 12.4417 4.87411 12.9256 5.18159C13.541 5.57267 14 6.20459 14 7.12031C14 8.00605 13.6227 8.66119 13.0022 9.07547C12.4068 9.473 11.6255 9.625 10.8281 9.625H8.75C8.50838 9.625 8.3125 9.42912 8.3125 9.1875C8.3125 8.94588 8.50838 8.75 8.75 8.75H10.8281C11.5347 8.75 12.1205 8.61202 12.5163 8.34776C12.8871 8.10026 13.125 7.7218 13.125 7.12031C13.125 6.54881 12.8594 6.17626 12.4563 5.92011C12.0328 5.65101 11.459 5.51699 10.9159 5.49009C10.7003 5.47941 10.5248 5.31321 10.5024 5.0986C10.2819 2.98961 8.76615 1.75 7 1.75C5.33226 1.75 4.26598 2.8502 3.91661 3.93983C3.86318 4.10647 3.71559 4.22524 3.54138 4.24179C2.77398 4.31469 2.0976 4.54149 1.62345 4.91323C1.16467 5.27293 0.875 5.78154 0.875 6.49688C0.875 7.21094 1.17716 7.75761 1.66866 8.13691C2.17071 8.52435 2.89061 8.75 3.71875 8.75H5.25C5.49162 8.75 5.6875 8.94588 5.6875 9.1875C5.6875 9.42912 5.49162 9.625 5.25 9.625H3.71875C2.74221 9.625 1.82147 9.3601 1.13408 8.82962C0.43612 8.29099 0 7.49234 0 6.49688C0 5.50268 0.421264 4.74391 1.08358 4.22464C1.66181 3.77129 2.40614 3.51244 3.18122 3.40334ZM7 5.6875C7.24162 5.6875 7.4375 5.88338 7.4375 6.125V11.6324L8.44088 10.6306C8.61187 10.4599 8.88888 10.4601 9.0596 10.6311C9.23032 10.8021 9.2301 11.0791 9.05912 11.2498L7.30912 12.9971C7.13832 13.1676 6.86168 13.1676 6.69088 12.9971L4.94088 11.2498C4.76989 11.0791 4.76968 10.8021 4.9404 10.6311C5.11112 10.4601 5.38813 10.4599 5.55912 10.6306L6.5625 11.6324V6.125C6.5625 5.88338 6.75838 5.6875 7 5.6875Z"
                    fill="#4A5568"
                  />
                </g>
              </svg>
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
