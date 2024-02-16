import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";

const BeneficiaryTable = () => {
  const columns = [
    {
      name: <div className="font-bold text-[#4A5568]">BENEFICIARY NAME</div>,
      selector: (row) => (
        <Link to="/beneficiaries/tables">
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
              marginRight: "10px",
              flexShrink: "0",
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
      <Link to="/beneficiaries/table">
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
        <div className="px-[20px] items-center h-10 mx-5 flex md:w-[320px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="CkSearch" clip-path="url(#clip0_1052_442)">
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
          className="px-[20px]  h-10 items-center mx-5 mt-3 md:mx-5 sm:mt-3 md:mt-0 lg:mt-0 flex w-[100px] "
          style={{
            borderRadius: "4px",
            border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)",
          }}
        >
          <svg
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

          <p className="font-light text-[ #718096] text-sm ml-1.5">Filter</p>
        </div>
      </div>

      <hr className="w-full border-b mt-4 bg-[#CBD5E0]" />
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
