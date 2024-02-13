import React, { useState } from "react";
import millify from "millify";
import Inflow from "./Inflows";
import Outflow from "./Outflows";
import CopyToClipboard from "../Utility/Copy";
import payments from "src/assets/FiCreditCard.svg";
import calendar from "src/assets/FiCalendar.svg";
import wallet from "src/assets/IoWalletOutline.svg";
import winfo from "src/assets/CkInfoOutline-2.svg";
import info from "src/assets/CkInfoOutline.svg";
import Tooltip from "@mui/material/Tooltip";
import Navbarr from "../Layout/Navbar";
import Filter from "./Filter";

const Payment = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const handleFilterClick = () => setFilterOpen(!isFilterOpen);

  const money1 = millify(953.2, {
    precision: 2,
    lowercase: true,
    decimalSeparator: ",",
    units: ["K"],
  });

  const money2 = millify(98.25, {
    precision: 2,
    lowercase: true,
    decimalSeparator: ",",
    units: ["K"],
  });

  const money3 = millify(125.25, {
    precision: 2,
    lowercase: true,
    decimalSeparator: ",",
    units: ["M"],
  });

  const styling = (bgcolor, text, icons, money, tcols, icon) => {
    return (
      <div
        className="container px-4 md:px-5 py-5 my-4 h-full"
        style={{
          borderRadius: "4px",
          boxShadow: "0px 3px 12px 0px rgba(197, 197, 197, 0.25)",
          backgroundColor: bgcolor,
        }}
      >
        <div className="flex justify-between">
          <p
            style={{
              color: tcols,
              fontSize: "14px",
              lineHeight: "24px",
            }}
            className="font-light pt-2"
          >
            {text}
          </p>
          <img src={icons} alt="pay" className="w-[39px] h-[39px]" />
        </div>
        <p
          className="font-bold pb-4"
          style={{
            color: tcols,
            fontSize: "32px",
          }}
        >
          {money}
        </p>
        <div className="flex items-center">
          <p style={{ color: tcols, fontSize: "12px" }}>
            The total amount of payments you’ve made
          </p>
          <Tooltip
            title="Fund your wallaet by paying into Guarantee Trust Account"
            placement="bottom"
          >
            <img
              src={icon}
              alt="arrowright"
              className="w-[12px] h-[12px] ml-1"
            />
          </Tooltip>
        </div>
      </div>
    );
  };

  // created a constant
  const [activeTab, setActiveTab] = useState("outflow");

  return (
    <div
      style={{ backgroundColor: "#F6F6F6" }}
      className="w-full h-full overflow-auto"
    >
      {/* navbar */}
      <Navbarr title="Payment" />

      {/* framesssss */}
      <div className="grid grid-cols-1 md:grid-cols-3 mx-5 md:mx-7 gap-4">
        {styling("#22085C", "Total Payments", payments, money1, "#FFF", winfo)}

        {styling(
          "var(--Color-Base-Background-Color-5, #38A169",
          "Wallet Balance",
          calendar,
          money2,
          "#FFF",
          winfo
        )}

        {styling(
          "var(--Surface-Primary, #FFF)",
          "All Beneficiaries",
          wallet,
          money3,
          "#4A5568",
          info
        )}
      </div>
      {/* end of frames */}

      {/* lineee */}
      <hr className="bg-[#CBD5E0] w-full h-0.3 mt-9" />

      {/* the second side */}

      <div className=" sm:grid sm:grid-cols-1 md:grid-cols-2 md:m-5 my-5 md:my:0 flex flex-col sm:items-center">
        {/* First component */}
        <div className="flex">
          <p className="flex tracking-wide mr-auto lg:mr-0  items-center font-light mx-5  md:mx:0  text-[#1C065A] text-sm ">
            My account
            <Tooltip
              title="Fund your wallet by paying into Guarantee Trust Wallet"
              placement="bottom"
            >
              <svg
                className="mx-[1px] w-[10px] cursor-pointer"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="CkInfoOutline" clipPath="url(#clip0_1050_818)">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6ZM6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM5.97963 4.00007C6.25577 4.00007 6.47963 3.77621 6.47963 3.50007C6.47963 3.22393 6.25577 3.00007 5.97963 3.00007C5.70349 3.00007 5.47963 3.22393 5.47963 3.50007C5.47963 3.77621 5.70349 4.00007 5.97963 4.00007ZM6.47963 5.00014V5.50014V8.50014V9.00014H5.47963V8.50014V5.50014V5.00014H6.47963Z"
                    fill="#4A5568"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1050_818">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Tooltip>
          </p>

          <CopyToClipboard />
        </div>

        {/* searchhhhh */}
        <div className=" hidden sm:hidden lg:flex mb-2   md:mb-0">
          <div className="px-[20px] h-[40px]  mx-5 items-center flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="CkSearch" clipPath="url(#clip0_1052_442)">
                <path
                  id="Vector"
                  d="M15.5895 14.4126L11.2368 10.06C12.1869 8.81104 12.6271 7.24788 12.4684 5.68671C12.3097 4.12555 11.5639 2.68294 10.382 1.65074C9.20005 0.618553 7.67016 0.0738449 6.10184 0.126823C4.53352 0.1798 3.04388 0.826508 1.93428 1.93611C0.824677 3.04571 0.177969 4.53535 0.124991 6.10367C0.0720139 7.67199 0.616722 9.20188 1.64891 10.3838C2.68111 11.5658 4.12371 12.3115 5.68488 12.4702C7.24605 12.6289 8.80921 12.1887 10.0581 11.2386L14.4108 15.5913C14.5684 15.745 14.7799 15.8311 15.0001 15.8311C15.2203 15.8311 15.4318 15.745 15.5895 15.5913C15.7456 15.4349 15.8333 15.2229 15.8333 15.002C15.8333 14.781 15.7456 14.569 15.5895 14.4126ZM1.83346 6.33329C1.83346 5.44327 2.09738 4.57324 2.59184 3.83322C3.08631 3.0932 3.78911 2.51642 4.61138 2.17583C5.43365 1.83523 6.33845 1.74612 7.21136 1.91975C8.08428 2.09339 8.8861 2.52197 9.51544 3.15131C10.1448 3.78064 10.5734 4.58247 10.747 5.45538C10.9206 6.32829 10.8315 7.23309 10.4909 8.05536C10.1503 8.87763 9.57354 9.58043 8.83352 10.0749C8.0935 10.5694 7.22347 10.8333 6.33346 10.8333C5.14041 10.8319 3.99664 10.3573 3.15303 9.51371C2.30943 8.6701 1.83487 7.52633 1.83346 6.33329Z"
                  fill="#718096"
                />
              </g>
              <defs>
                <clipPath id="clip0_1052_442">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <input
              type="text"
              placeholder="Search by Payment Id"
              id="searchy"
              className="font-light w-full items-center outline-none text-[#718096] text-[14px] ml-4 bg-[#F6F6F6]   "
            />
          </div>

          {/* the filter */}

          <div className="flex mb-2 mx-5  lg:ml-auto">
            <div className="relative ">
              <button
                className="px-[20px] h-[40px] grid-cols-2 items-center  flex rounded border border-[#CBD5E0]"
                onClick={handleFilterClick}
              >
                <svg
                  className="mt-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="FiFilter">
                    <path
                      id="Vector (Stroke)"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.728678 1.71933C0.837917 1.48389 1.07387 1.33325 1.33342 1.33325H14.6668C14.9263 1.33325 15.1623 1.48389 15.2715 1.71933C15.3807 1.95478 15.3434 2.23222 15.1758 2.4304L10.0001 8.55068V13.9999C10.0001 14.231 9.88046 14.4455 9.68391 14.567C9.48737 14.6885 9.24194 14.6995 9.03528 14.5962L6.36861 13.2629C6.14276 13.1499 6.00009 12.9191 6.00009 12.6666V8.55068L0.824377 2.4304C0.656779 2.23222 0.61944 1.95478 0.728678 1.71933ZM2.77029 2.66659L7.1758 7.8761C7.27758 7.99645 7.33342 8.14897 7.33342 8.30659V12.2546L8.66676 12.9212V8.30659C8.66676 8.14897 8.7226 7.99645 8.82438 7.8761L13.2299 2.66659H2.77029Z"
                      fill="#718096"
                    />
                  </g>
                </svg>

                <p className="font-light text-[#718096] text-[14px] ml-2">
                  Filter
                </p>
              </button>
              <Filter
                isOpen={isFilterOpen}
                onClose={() => setFilterOpen(false)}
              />
            </div>
            {/* end */}
          </div>
        </div>
        {/* sm&md */}
        <div className="flex sm:flex lg:hidden mb-2   md:mb-0">
          <div className="px-[20px] h-[40px]  mx-5 items-center flex  w-[320px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="CkSearch" clipPath="url(#clip0_1052_442)">
                <path
                  id="Vector"
                  d="M15.5895 14.4126L11.2368 10.06C12.1869 8.81104 12.6271 7.24788 12.4684 5.68671C12.3097 4.12555 11.5639 2.68294 10.382 1.65074C9.20005 0.618553 7.67016 0.0738449 6.10184 0.126823C4.53352 0.1798 3.04388 0.826508 1.93428 1.93611C0.824677 3.04571 0.177969 4.53535 0.124991 6.10367C0.0720139 7.67199 0.616722 9.20188 1.64891 10.3838C2.68111 11.5658 4.12371 12.3115 5.68488 12.4702C7.24605 12.6289 8.80921 12.1887 10.0581 11.2386L14.4108 15.5913C14.5684 15.745 14.7799 15.8311 15.0001 15.8311C15.2203 15.8311 15.4318 15.745 15.5895 15.5913C15.7456 15.4349 15.8333 15.2229 15.8333 15.002C15.8333 14.781 15.7456 14.569 15.5895 14.4126ZM1.83346 6.33329C1.83346 5.44327 2.09738 4.57324 2.59184 3.83322C3.08631 3.0932 3.78911 2.51642 4.61138 2.17583C5.43365 1.83523 6.33845 1.74612 7.21136 1.91975C8.08428 2.09339 8.8861 2.52197 9.51544 3.15131C10.1448 3.78064 10.5734 4.58247 10.747 5.45538C10.9206 6.32829 10.8315 7.23309 10.4909 8.05536C10.1503 8.87763 9.57354 9.58043 8.83352 10.0749C8.0935 10.5694 7.22347 10.8333 6.33346 10.8333C5.14041 10.8319 3.99664 10.3573 3.15303 9.51371C2.30943 8.6701 1.83487 7.52633 1.83346 6.33329Z"
                  fill="#718096"
                />
              </g>
              <defs>
                <clipPath id="clip0_1052_442">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input
              type="text"
              placeholder="Search by Payment Id"
              id="searchbox"
              className="font-light w-full items-center outline-none text-[#718096] text-[14px] ml-4 bg-[#F6F6F6]   "
            />
          </div>

          {/* the filter */}

          <div className="flex mb-2 mx-5   ml-auto">
            <div className="relative ">
              <button
                className="px-[20px] h-[40px] grid-cols-2 items-center  flex rounded border border-[#CBD5E0]"
                onClick={handleFilterClick}
              >
                <svg
                  className="mt-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="FiFilter">
                    <path
                      id="Vector (Stroke)"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.728678 1.71933C0.837917 1.48389 1.07387 1.33325 1.33342 1.33325H14.6668C14.9263 1.33325 15.1623 1.48389 15.2715 1.71933C15.3807 1.95478 15.3434 2.23222 15.1758 2.4304L10.0001 8.55068V13.9999C10.0001 14.231 9.88046 14.4455 9.68391 14.567C9.48737 14.6885 9.24194 14.6995 9.03528 14.5962L6.36861 13.2629C6.14276 13.1499 6.00009 12.9191 6.00009 12.6666V8.55068L0.824377 2.4304C0.656779 2.23222 0.61944 1.95478 0.728678 1.71933ZM2.77029 2.66659L7.1758 7.8761C7.27758 7.99645 7.33342 8.14897 7.33342 8.30659V12.2546L8.66676 12.9212V8.30659C8.66676 8.14897 8.7226 7.99645 8.82438 7.8761L13.2299 2.66659H2.77029Z"
                      fill="#718096"
                    />
                  </g>
                </svg>

                <p className="font-light text-[#718096] text-[14px] ml-2">
                  Filter
                </p>
              </button>
              <Filter
                isOpen={isFilterOpen}
                onClose={() => setFilterOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* end of the  straight stuff */}
      {/* the tab stufff */}
      <div className="flex justify-between items-center px-5 md:px-7 ml-auto ">
        <div>
          <button
            className={` py-2 md:px-4 text-[14px] ${
              activeTab === "outflow"
                ? " text-[#1C065A] border-b-2 border-[#1C065A]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("outflow")}
          >
            Outflow
          </button>
          <button
            className={`mx-[2rem] px-4 py-2 text-[14px] ${
              activeTab === "inflow"
                ? " text-[#1C065A] border-b-2 border-[#1C065A]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("inflow")}
          >
            Inflow
          </button>
        </div>

        <button className="bg-[#3B2773] px-3 rounded h-8 mb-[10px] text-white text-[10px] sm:text-[14px]">
          Export Payments
        </button>
      </div>

      {activeTab === "inflow" ? <Inflow /> : <Outflow />}
    </div>
    // end of code
  );
};

export default Payment;
