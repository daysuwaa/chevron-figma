import React from "react";
import Navbar from "./Navbar";
import user from "src/assets/user 1.svg";
import { Link } from "react-router-dom";

const Details = () => {
  const deets = (
    tab,
    schedule_detail,
    group,
    address,
    transaction_no,
    schedule_id,
    paidon,
    schedulename,
    paymentstatus,
    amount,
    bank_details,
    account_details
  ) => {
    return (
      <div>
        <Link to="/scheduletable">
          <div className="flex mx-7 my-5 items-center">
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
              {tab}
              <span className="text-[#4A5568] font-normal">
                / Payment-detail {schedule_detail}
              </span>
            </p>
          </div>
        </Link>

        {/* chevron salaries */}
        <div className="grid grid-cols-3">
          <div className="col-span-2 bg-white mx-7">
            <div className="flex mx-7 pt-6">
              <h5 className="text-[#1C065A] font-[500] text-[14px]">{group}</h5>
              <div className="flex ml-auto items-center ">
                <h5 className="font-light text-[14px] mx-2 mr- text-[#4A5568]">
                  Transaction Number
                </h5>
              </div>
            </div>
            {/* second line */}
            <div className="flex mx-7  ">
              <p className="text-[14px] font-light text-[#4A5568]">{address}</p>
              <p className="ml-auto text-[#1C065A] font-[500]">
                {transaction_no}
              </p>
            </div>

            <div
              className="w-full h-[2px] border-b my-9 "
              style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
            ></div>
            <div className="mx-7  ">
              <p className="text-[#1C065A] text-[10px] font-[500]">
                SCHEDULE DETAILS
              </p>
              <div className="flex mt-5">
                <p className="text-[#718096] text-[14px] font-light">
                  Schedule ID
                </p>
                <p className="text-[#718096] text-[14px] font-light ml-auto mr-[6.3rem]">
                  Paid On
                </p>
              </div>
              <div className="flex">
                <p className="text-[#1C065A] text-[14px] font-[500]">
                  {schedule_id}
                </p>
                <p className="text-[#1C065A] text-[14px] font-[500] ml-auto ">
                  {paidon}
                </p>
              </div>
              <div className="mt-3 ">
                <div className="flex">
                  <p className="text-[#718096] text-[14px] font-light">
                    Schedule Name
                  </p>
                  <p className="text-[#718096] text-[14px] font-light ml-auto mr-[3rem]">
                    Payment Status
                  </p>
                </div>
                <div className="flex">
                  <p className="text-[#1C065A] text-[14px] font-[500]">
                    {schedulename}
                  </p>
                  <p className="text-[#1C065A] text-[14px] font-[500] ml-auto mr-[5.1rem]">
                    {paymentstatus}
                  </p>
                </div>
              </div>
              <div
                className="w-full h-[2px] border-b my-9"
                style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
              ></div>
              <p className="font-thin text-[#718096] text-[12px]">
                Amount Paid
              </p>
              <p className="text-[#1C065A] text-[18px] font-semibold">
                {amount}
              </p>
              <div className="flex">
                <p className=" text-[#718096] text-[14px]">Beneficiary Bank:</p>
                <p className="text-[#1C065A] text-[14px] ml-1">
                  {bank_details}
                </p>
              </div>
              <div className="flex">
                <p className=" text-[#718096] text-[14px]">Account Number:</p>
                <p className="text-[#1C065A] text-[14px] ml-1">
                  {account_details}
                </p>
              </div>
              <button className="bg-[#3B2773] my-9 text-white h-[32px] text-[14px] rounded w-[147px]">
                Delete Schedule
              </button>
            </div>
          </div>

          <div className="cols-span-1">ldjsnakm</div>
        </div>
        <button>Delete Schedule</button>
        {/* end pf grid */}
      </div>
    );
  };
  return (
    <div>
      <Navbar title="Payment" />
      {deets(
        "Payment",
        "BLPSCID0013B31",
        "Chevron Group ",
        "1 Chevron Drive, Lekki Phase I, Lagos.",
        "BLPSCID0013B31",
        "BLS0001332",
        "12th September, 2023.",
        "Mothly Salary",
        "Sucessful",
        "N650,000.00",
        " First Bank",
        "001122345"
      )}
      {/* end of the first column */}
    </div>
  );
};

export default Details;
