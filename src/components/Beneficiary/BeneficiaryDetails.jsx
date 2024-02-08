import React, { useState } from "react";
import search from "src/assets/CkSearch.svg";
import filter from "src/assets/FiFilter.svg";
import GetBeneficiaryModal from "./GetBeneficiaryModal";
import AddBeneficiaryModal from "./AddBeneficiaryModal";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Navbar from "../Stuff/Navbar";

const BeneficiaryTable = () => {
  const columns = [
    {
      name: <div className="font-bold text-[#4A5568]">BENEFICIARY NAME</div>,
      selector: (row) => (
        <Link to="/beneficiarypayments">
          <div className=" font-semibold text-[#1C065A]">
            {row.beneficiaryname}
          </div>
        </Link>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]"> BENEFICIARY EMAIL</div>,
      selector: (row) => <div className="text-[#1C065A]">{row.email}</div>,
    },

    {
      name: <div className="font-bold text-[#4A5568]">AMOUNT RECEIVED</div>,
      selector: (row) => (
        <div className="text-[#1C065A]">{row.amountreceived}</div>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]">LAST PAYMENT</div>,
      selector: (row) => (
        <div className="text-[#1C065A]"> {row.lastpayment}</div>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]">DATE ADDED</div>,
      selector: (row) => <div className="text-[#1C065A]"> {row.date}</div>,
    },
    {
      name: <div className="font-bold text-[#3B2773]">ACTIONS</div>,
      selector: (row) => (
        <div className="flex">
          <div
            style={{
              border: "1px solid #3B2773",
              color: "#3B2773",
              padding: " 4.6px",
              justifyContent: "center",
              borderRadius: "4px",
              textAlign: "center",
              width: "100px",
              height: "30px",
              marginRight: "10px",
            }}
            className="cursor-pointer"
          >
            {row.action}
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      beneficiaryname: "Segun Adebayo",
      email: "seguna@gmail.com",
      amountreceived: "N180,000.00",
      lastpayment: "13:45, 11 Sep 2023",
      date: "13:45, 11 Sep 2023",
      action: "Export All Payment",
    },

    {
      id: 2,
      beneficiaryname: "Mark Chandler",
      email: "markc@gmail.com",
      amountreceived: "N280,000.00",
      lastpayment: "13:45, 11 Sep 2023",
      date: "13:45, 11 Sep 2023",
      action: "Export All Payment",
    },
    {
      id: 5,
      beneficiaryname: "Mark Chandler",
      email: "markc@gmail.com",
      amountreceived: "N280,000.00",
      lastpayment: "13:45, 11 Sep 2023",
      date: "13:45, 11 Sep 2023",
      action: "Export All Payment",
    },
    {
      id: 6,
      beneficiaryname: "Mark Chandler",
      email: "marka@gmail.com",
      amountreceived: "N280,000.00",
      lastpayment: "13:45, 11 Sep 2023",
      date: "13:45, 11 Sep 2023",
      action: "Export All Payment",
    },
    {
      id: 7,
      beneficiaryname: "Randy Orton",
      email: " randy0@gmail.com ",
      amountreceived: "N280,000.00",
      lastpayment: "13:45, 11 Sep 2023",
      date: "13:45, 11 Sep 2023",
      action: "Export All Payment",
    },
    {
      id: 8,
      beneficiaryname: "Mark Chandler",
      email: "marka@gmail.com",
      amountreceived: "N180,000.00",
      lastpayment: "13:45, 11 Sep 2023",
      date: "13:45, 11 Sep 2023",
      action: "Export All Payment",
    },
    {
      id: 9,
      beneficiaryname: "Randy Orton",
      email: " randy0@gmail.com ",
      amountreceived: "N280,000.00",
      lastpayment: "13:45, 11 Sep 2023",
      date: "13:45, 11 Sep 2023",
      action: "Export All Payment",
    },
    {
      id: 10,
      beneficiaryname: "Segun Adebayo",
      email: "seguna@gmail.com",
      amountreceived: "N120,000.00",
      lastpayment: "13:45, 11 Sep 2023",
      date: "13:45, 11 Sep 2023",
      action: "Export All Payment",
    },
  ];
  return (
    <div>
      <Navbar title="Beneficiary" />
      <Link to="/beneficiarytable">
        <div className="flex mx-3 md:mx-7 my-5 items-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="FiChevronLeft">
              <path
                id="Vector (Stroke)"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.16244 3.08748C9.39024 3.31529 9.39024 3.68463 9.16244 3.91244L6.07492 6.99996L9.16244 10.0875C9.39024 10.3153 9.39024 10.6846 9.16244 10.9124C8.93463 11.1402 8.56529 11.1402 8.33748 10.9124L4.83748 7.41244C4.60967 7.18463 4.60967 6.81529 4.83748 6.58748L8.33748 3.08748C8.56529 2.85967 8.93463 2.85967 9.16244 3.08748Z"
                fill="#1C065A"
              />
            </g>
          </svg>
          <p className="text-[14px] font-semibold mx-2 text-[#1C065A]">
            Beneficiaries
            <span className="text-[#4A5568] font-normal">
              / Beneficiary-detail (BLPSCID0013B31)
            </span>
          </p>
        </div>
      </Link>
      <div className="md:flex pt-8">
        <div className="px-[20px] h-10 mx-5 flex md:w-[320px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
          <img src={search} alt="searchicon" className="w-[16px]  " />
          <input
            type="text"
            placeholder="Search by Beneficiary Name or Email"
            id="bbsearchh"
            className="font-light w-[320px]  outline-none"
            style={{
              color: "#718096",
              fontSize: "14px",
              marginLeft: "6px",
              backgroundColor: "#F6F6F6",
            }}
          />
        </div>
        <div
          className="px-[20px] h-10 items-center mx-5 mt-3 md:mx-5 sm:mt-3 md:mt-0 lg:mt-0 flex w-[100px] "
          style={{
            borderRadius: "4px",
            border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)",
          }}
        >
          <img src={filter} alt="searchicon" className="w-[16px] " />
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

      <div
        className="w-full border-b mt-4 "
        style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
      ></div>
      <div
        style={{ border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)" }}
        className="mx-5"
      >
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default BeneficiaryTable;
