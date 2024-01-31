import React, { useState } from "react";
import millify from "millify";
import Inflow from "./Inflows";
import Outflow from "./Outflows";
import payments from "src/assets/FiCreditCard.svg";
import calendar from "src/assets/FiCalendar.svg";
import wallet from "src/assets/IoWalletOutline.svg";
import man from "src/assets/image 1.png";
import arrowdown from "src/assets/FiChevronDown.svg";
import winfo from "src/assets/CkInfoOutline-2.svg";
import info from "src/assets/CkInfoOutline.svg";
import gtb from "src/assets/image 2.png";
import copy from "src/assets/IoCopyOutline.svg";
import search from "src/assets/CkSearch.svg";
import filter from "src/assets/FiFilter.svg";
import Tooltip from "@mui/material/Tooltip";

const Payment = () => {
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

  // the clipboard thingy
  const copyToClipboard = () => {
    const textToCopy = "0012345678";
    if (navigator.clipboard) return navigator.clipboard.writeText(textToCopy);

    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = textToCopy;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  // created a constant
  const [activeTab, setActiveTab] = useState("outflow");

  return (
    <div
      style={{ backgroundColor: "#F6F6F6" }}
      className="w-full h-full overflow-auto"
    >
      {/* nav- dashbord side */}
      <div
        className="flex px-4 md:px-[32px] py-[18px] justify-between h-[60px]"
        style={{ background: "#fff" }}
      >
        <p className="font-semibold tracking-wide ">Payment</p>
        <div className="flex items-center">
          <img src={man} alt="arrow" className="w-[24px] h-[24px] mr-3" />
          <img src={arrowdown} alt="man" className="w-[14px] h-[14px]" />
        </div>
      </div>
      {/* end of nav */}

      {/* framesssss */}
      <div className="grid grid-cols-1 md:grid-cols-3 mx-3 md:mx-7 gap-4">
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
      <div
        className="hidden md:block w-full border-b mt-4"
        style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
      ></div>

      {/* the second side */}

      <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 md:m-5 my-5 md:my:0 flex flex-col">
        {/* First component */}
        <div className="flex my-4">
          <p className="flex tracking-wide items-center font-light mx-3  md:mx:0  text-[#1C065A] text-sm ">
            My account
            <Tooltip
              title="Fund your wallet by paying into Guarantee Trust Wallet"
              placement="bottom"
            >
              <img
                src={info}
                alt="arrowright"
                className="mx-[1px] w-[10px] cursor-pointer"
              />
            </Tooltip>
          </p>
          <div className="md:ml-0 flex ml-auto mx-3  md:mx:0 md:my:0">
            <button
              className="flex bg-[#3B2773] w-[6.5rem] sm:w-[8.5rem] h-[2.5rem] py-[6px] px-[10px] rounded justify-center items-center text-white md:text-[13px] lg:text-[13px] sm:text-[13px] text-[10px]"
              onClick={copyToClipboard}
            >
              <img src={gtb} alt="gtblogo" className="text-center pr-1 " />
              0422822151
              <img src={copy} alt="copy" className="ml-1 w-4 h-4"></img>
            </button>
          </div>
        </div>

        {/* searchhhhh */}
        <div className="flex mb-2 md:mb-0">
          <div className="px-[20px] h-12 py-[6px] mx-2 flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
            <img src={search} alt="searchicon" className="w-[16px]" />
            <input
              type="text"
              placeholder="Search by Payment Id"
              id="search"
              className="font-light w-full items-center outline-none"
              style={{
                color: "#718096",
                fontSize: "14px",
                marginLeft: "6px",
                backgroundColor: "#F6F6F6",
              }}
            />
          </div>

          {/* the filter */}
          <div className="flex mb-2 mx-2 lg:ml-auto">
            <div
              className="px-[20px] grid-cols-2 py-[12px] h-12 flex w-[6.5rem]"
              style={{
                borderRadius: "4px",
                border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)",
              }}
            >
              <img
                src={filter}
                alt="searchicon"
                className="w-[16px] h-[16px] mt-1"
              />
              <p
                className="font-light"
                style={{
                  color: "var(--Color-Gray-Gray-60, #718096)",
                  fontSize: "14px",
                  marginLeft: "6px",
                }}
              >
                Filter
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* end of the  straight stuff */}
      {/* the tab stufff */}
      <div className="flex justify-between items-center px-3 md:px-7 ml-auto ">
        <div>
          <button
            className={` py-2 text-[14px] ${
              activeTab === "outflow"
                ? "font-bold text-[#1C065A] border-b-2 border-[#1C065A]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("outflow")}
          >
            Outflow
          </button>
          <button
            className={`px-[6px] py-2 text-[14px] ${
              activeTab === "inflow"
                ? "font-bold text-[#1C065A] border-b-2 border-[#1C065A]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("inflow")}
          >
            Inflow
          </button>
        </div>

        <button
          style={{
            background: "var(--Button-Background-Alternate, #3B2773)",
            padding: "0px 12px",
            borderRadius: "4px",
            height: "32px",
            marginBottom: "10px",
          }}
        >
          <p className="text-white text-[10px] sm:text-[14px]">
            Export Payments
          </p>
        </button>
      </div>

      {activeTab === "inflow" ? <Inflow /> : <Outflow />}
    </div>
    // end of code
  );
};

export default Payment;
