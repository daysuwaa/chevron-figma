import React, { useState } from "react";
import millify from "millify";
import Inflow from "../components/Inflows";
import Outflow from "../components/Outflows";
import payments from "../assets/FiCreditCard.svg";
import calendar from "../assets/FiCalendar.svg";
import wallet from "../assets/IoWalletOutline.svg";
import man from "../assets/image 1.png";
import arrowdown from "../assets/FiChevronDown.svg";
import winfo from "../assets/CkInfoOutline-2.svg";
import info from "../assets/CkInfoOutline.svg";
import gtb from "../assets/image 2.png";
import copy from "../assets/IoCopyOutline.svg";
import search from "../assets/CkSearch.svg";
import filter from "../assets/FiFilter.svg";

const Payment = () => {
  const money1 = millify(953.2, {
    precision: 2, // number of d.p
    lowercase: true, // Use lowercase abbreviations
    decimalSeparator: ",", // Custom decimal separator
    units: ["K"], // Custom units
  });

  const money2 = millify(98.25, {
    precision: 2, // Number of decimal places
    lowercase: true, // Use lowercase abbreviations
    decimalSeparator: ",", // Custom decimal separator
    units: ["K"], // Custom units
  });

  const money3 = millify(125.25, {
    precision: 2, // Number of decimal places
    lowercase: true, // Use lowercase abbreviations
    decimalSeparator: ",", // Custom decimal separator
    units: ["M"], // Custom units
  });

  const styling = (bgcolor, text, icons, money, tcols, icon) => {
    return (
      <div
        className="container px-4 md:px-7 py-5 my-4 h-[166px]"
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
          <img src={icon} alt="arrowright" className="w-[12px] h-[12px] ml-1" />
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
      <div className="grid grid-cols-1 md:grid-cols-3 mx-4  gap-4">
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
        className="w-full border-b mt-4"
        style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
      ></div>

      {/* second side */}
      <div className="flex justify-between p-4 sm:grid-cols-2 ">
        {/* Two p tags on the extreme left */}
        <div className="flex">
          <p
            className="flex mt-3 tracking-wide font-light"
            style={{ color: "var(--Text-Primary, #1C065A)", fontSize: "14px" }}
          >
            My account:{" "}
            <img
              src={info}
              alt="arrowright"
              className="w-[14px] h-[14px] mx-2 mt-1 "
            />
          </p>

          <button
            className="flex items-center"
            style={{
              background: "var(--Button-Background-Alternate, #3B2773)",
              padding: "6px 12px",
              borderRadius: "4px",
            }}
            onClick={copyToClipboard}
          >
            <img src={gtb} alt="gtbimage" className="w-4 h-4"></img>
            <p className="text-white ml-2 text-base">0012345678</p>
            <img src={copy} alt="copy" className="ml-1 w-4 h-4"></img>
          </button>
        </div>

        {/* Two p tags on the extreme right */}
        <div className="flex">
          <div className="px-[20px] mx-5 py-[6px] flex w-[320px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
            <img src={search} alt="searchicon" className="w-[16px]" />
            <input
              type="text"
              placeholder="Search by Payment Id"
              id="search"
              className="font-light w-[320px] h-8 outline-none"
              style={{
                color: "#718096",
                fontSize: "14px",
                marginLeft: "6px",
                backgroundColor: "#F6F6F6",
              }}
            />
          </div>
          <div
            className="px-[20px] py-[12px] flex w-[100px] "
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
      {/* end of the  straight stuff */}
      {/* the tab stufff */}
      <div className="flex justify-between items-center mx-5 ">
        <div>
          <button
            className={`px-4 py-2 text-[14px] ${
              activeTab === "outflow"
                ? "font-bold text-[#1C065A] border-b-2 border-[#1C065A]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("outflow")}
          >
            Outflow
          </button>
          <button
            className={`px-4 py-2 text-[14px] ${
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
          <p className="text-white text-base">Export Payments</p>
        </button>
      </div>

      {activeTab === "inflow" ? <Inflow /> : <Outflow />}
    </div>
    // end of code
  );
};

export default Payment;
