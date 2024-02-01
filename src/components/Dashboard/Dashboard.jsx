import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import Barchat from "./Barchart";
import Piechart from "./Piechart";
import man from "src/assets/image 1.png";
import arrowdown from "src/assets/FiChevronDown.svg";
import arrowright2 from "src/assets/FiChevronRight-2.svg";
import arrowright from "src/assets/FiChevronRight.svg";
import users from "src/assets/FiUsers.svg";
import payments from "src/assets/FiCreditCard.svg";
import clock from "src/assets/BsClock.svg";
import Table from "./Table";

const Dashboard = () => {
  // moneyyy
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

  const [month, setMonth] = useState("");
  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  // the dashboard - frames
  const styling = (bgcolor, text, icons, money, link, tcols, arrow) => {
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
        <div className="items-center">
          <Link
            to="/chevron/error"
            className="underline items-center flex"
            style={{ color: tcols, fontSize: "12px" }}
          >
            {link}
            <img
              src={arrow}
              alt="arrowright"
              className="w-[12px] h-[12px] ml-1"
            />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{ backgroundColor: "#F6F6F6" }}
      className="w-full h-full overflow-auto "
    >
      {/* nav- dashbord side */}
      <div
        className="flex px-4 md:px-[32px] py-[18px] justify-between h-[60px]"
        style={{ background: "#fff" }}
      >
        <p className="font-semibold tracking-wide ">Dashboard</p>
        <div className="flex items-center">
          <img src={man} alt="arrow" className="w-[24px] h-[24px] mr-3" />
          <img src={arrowdown} alt="man" className="w-[14px] h-[14px]" />
        </div>
      </div>
      {/* end of nav */}

      {/* framesssss */}
      <div className="grid grid-cols-1 md:grid-cols-3 mx-3 md:mx-7 pb-7 gap-4">
        {styling(
          "#22085C",
          "Total Payments",
          payments,
          money1,
          "View payouts",
          "#FFF",
          arrowright
        )}

        {styling(
          "var(--Color-Base-Background-Color-5, #38A169)",
          "Wallet Balance",
          users,
          money2,
          "View payments",
          "#FFF",
          arrowright
        )}

        {styling(
          "var(--Surface-Primary, #FFF)",
          "All Beneficiaries",
          clock,
          money3,
          "View beneficiaries",
          "#4A5568",
          arrowright2
        )}
      </div>
      {/* end of frames */}

      {/* barrrssssss */}

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 md:gap-4 mx-3 md:mx-7 my-5">
        {" "}
        <div className="col-span-1 lg:col-span-2 bg-white p-4 text-center">
          <div
            className="lg:flex md:flex font-light tracking-wide"
            style={{
              color: "var(--Color-Gray-Gray-70, #4A5568)",
              fontSize: "14px",
              lineHeight: "24px",
            }}
          >
            <p className="">Payout Overview</p>
            <p
              className="lg:flex lg:ml-auto md:flex md:ml-auto sm:flex sm:ml-auto"
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
          </div>
          <Barchat />
        </div>
        <div className="col-span-1 justify-center items-center bg-white p-5">
          <p className="font-light tracking-wide text-[#4A5568] text-sm">
            Schedule distribution
          </p>
          <div className="flex items-center justify-center">
            <Piechart />
          </div>
          <div className="grid grid-cols-1 ">
            <div className="flex col-span-1 mx-auto  items-center">
              <p className="bg-[#6FCF97] w-[12px] h-[12px] mr-1"></p>
              <p className="text-[#1C065A] font-light text-[12px]">
                Credit:
                <span className="text-[#1C065A] font-semibold text-[12px]">
                  N1,560,230.00
                </span>
              </p>
            </div>
            <div className="flex col-span-1 mx-auto items-center">
              <p className="bg-[#EB5757] w-[12px] h-[12px] mr-1"></p>
              <p className="text-[#1C065A] font-light text-[12px]">
                Debit:
                <span className="text-[#1C065A] font-semibold text-[12px]">
                  N1,560,230.00
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* receipts payoutsss */}
      <div className="py-7">
        {/* <div className="bg-white max-w-full h-[355px] mx-7"> */}
        <div className="bg-white max-w-full mx-3 md:mx-7 h-[355px]">
          {" "}
          {/* Adjusted margin for smaller screens */}
          <div className="flex justify-between py-7 mx-5">
            <p
              className=""
              style={{
                color: "var(--Color-Gray-Gray-70, #4A5568",
                fontSize: "14px",
                lineHeight: "24px",
              }}
            >
              Recent Payouts
            </p>
            <Link
              to="/error"
              style={{
                color: "var(--Color-Gray-Gray-70, #4A5568",
                fontSize: "12px",
                lineHeight: "24px",
              }}
              className="underline font-thin"
            >
              View all
            </Link>
          </div>
          <div
            style={{
              alignItems: "flex-end",
              borderRadius: "4px",
              margin: "0rem 1.2rem 0 1.2rem",
              height: "260px",
            }}
            className="flex-1"
          >
            {/* imported table */}
            <Table className=" text-slate-700" style={{ color: "#4A5568" }} />
          </div>
        </div>
      </div>
    </div>
    // end of code
  );
};

export default Dashboard;
