import React from "react";
import Navbar from "../Layout/Navbar";
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
    account_details,
    name,
    email,
    total_paid,
    monthly_salary,
    date
  ) => {
    return (
      <div>
        <Link to="/payment">
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
              {tab}
              <span className="text-[#4A5568] font-normal">
                / Payment-detail {schedule_detail}
              </span>
            </p>
          </div>
        </Link>

        {/* chevron salaries */}
        <div className="lg:grid grid-cols-3">
          <div className="hidden md:block col-span-2 bg-white lg:mx-7 md:mx-3">
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
              className="mx-3 h-[2px] border-b my-9 "
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
            </div>
          </div>
          {/* xs sm */}
          <div className="md:hidden block col-span-2 bg-white mx-3 lg:mx-7">
            <div className="mx-3 md:mx-7 pt-6">
              <h5 className="text-[#1C065A] font-[500] text-[14px]">{group}</h5>
              <p className="text-[14px] font-light text-[#4A5568]">{address}</p>
              <div className=" items-center ">
                <h5 className="font-light text-[14px] text-[#4A5568]">
                  Transaction Number
                </h5>
                <p className="ml-auto text-[#1C065A] font-[500]">
                  {transaction_no}
                </p>
              </div>
            </div>
            {/* second line */}

            <div
              className="mx-3 h-[2px] border-b my-7 "
              style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
            ></div>
            <div className="mx-3  ">
              <p className="text-[#1C065A] text-[10px] font-[500]">
                SCHEDULE DETAILS
              </p>
              <div className="flex mt-5">
                <p className="text-[#718096] text-[14px] font-light">
                  Schedule ID
                </p>
                <p className="text-[#718096] text-[14px] font-light ml-auto mr-[6.2rem]">
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
                  <p className="text-[#718096] text-[14px] font-light ml-auto mr-[2.9rem]">
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
              <button className="bg-[#3B2773] my-7 text-white h-[32px] text-[14px] rounded w-[147px]">
                Delete Receipt
              </button>
            </div>
          </div>

          <div className="cols-span-1">
            <div className="flex items-center mt-5 lg:mt-0 mx-3 md:mx-7">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="user 1" clip-path="url(#clip0_511_22106)">
                  <g id="Group">
                    <g id="Group_2">
                      <g id="Group_3">
                        <path
                          id="Vector"
                          d="M20 39.2188C30.6142 39.2188 39.2188 30.6142 39.2188 20C39.2188 9.38578 30.6142 0.78125 20 0.78125C9.38578 0.78125 0.78125 9.38578 0.78125 20C0.78125 30.6142 9.38578 39.2188 20 39.2188Z"
                          fill="#7535FC"
                        />
                      </g>
                      <g id="Group_4">
                        <path
                          id="Vector_2"
                          d="M20 35.625C27.4747 35.625 33.5341 32.1272 33.5341 27.8125C33.5341 23.4978 27.4747 20 20 20C12.5253 20 6.46582 23.4978 6.46582 27.8125C6.46582 32.1272 12.5253 35.625 20 35.625Z"
                          fill="#EDEFF1"
                        />
                      </g>
                      <g id="Group_5">
                        <path
                          id="Vector_3"
                          d="M20 20C24.3147 20 27.8125 16.5022 27.8125 12.1875C27.8125 7.87278 24.3147 4.375 20 4.375C15.6853 4.375 12.1875 7.87278 12.1875 12.1875C12.1875 16.5022 15.6853 20 20 20Z"
                          fill="#EDEFF1"
                        />
                      </g>
                    </g>
                    <g id="Group_6">
                      <path
                        id="Vector_4"
                        d="M20 29.375L26.3058 21.3251C24.3771 20.4733 22.2439 20 20 20C17.7561 20 15.6229 20.4733 13.6942 21.3251L20 29.375Z"
                        fill="#D3D3D3"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_511_22106">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className="ml-4">
                <p className="text-[#1C065A] text-[14px] font-bold">{name}</p>
                <p className="text-[#718096] text-[12px]">{email}</p>
              </div>
            </div>
            <div
              className="w-full h-[2px] border-b my-7"
              style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
            ></div>
            <div className="flex mx-3 md:mx-7 items-center">
              <h1 className="text-[#1C065A] text-[16px] font-[600]">
                Recent Payment
              </h1>

              <Link
                to="*"
                className="underline ml-auto text-[12px] text-[#4A5568]"
              >
                View all
              </Link>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="FiChevronRight">
                  <path
                    id="Vector (Stroke)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.14645 2.64645C4.34171 2.45118 4.65829 2.45118 4.85355 2.64645L7.85355 5.64645C8.04882 5.84171 8.04882 6.15829 7.85355 6.35355L4.85355 9.35355C4.65829 9.54882 4.34171 9.54882 4.14645 9.35355C3.95118 9.15829 3.95118 8.84171 4.14645 8.64645L6.79289 6L4.14645 3.35355C3.95118 3.15829 3.95118 2.84171 4.14645 2.64645Z"
                    fill="#4A5568"
                  />
                </g>
              </svg>
            </div>
            <div className="flex mx-3 md:mx-7 bg-[#EBE3FC] px-[16px] py-[12px] rounded mt-4">
              <p className="text-[#718096] text-[14px]">Total Paid:</p>
              <p className="ml-auto text-[#1C065A] text-[14px] font-[600]">
                {total_paid}
              </p>
            </div>
            <div className="grid-cols-2 grid-rows-6 mx-3 md:mx-7">
              <div className="flex mt-5">
                <p className="text-[#1C065A] text-[14px] font-[600] ">
                  {monthly_salary}
                </p>
                <p className="ml-auto text-[#718096] text-[14px] font-[300]">
                  {date}
                </p>
              </div>
              <p className="text-[#718096] text-[14px]  font-[300]">
                Monthly Salary
              </p>
              <div className="flex mt-5">
                <p className="text-[#1C065A] text-[14px] font-[600] ">
                  {monthly_salary}
                </p>
                <p className="ml-auto text-[#718096] text-[14px] font-[300]">
                  {date}
                </p>
              </div>
              <p className="text-[#718096] text-[14px]  font-[300]">
                Monthly Salary
              </p>
              <div className="flex mt-5">
                <p className="text-[#1C065A] text-[14px] font-[600] ">
                  {monthly_salary}
                </p>
                <p className="ml-auto text-[#718096] text-[14px] font-[300]">
                  {date}
                </p>
              </div>
              <p className="text-[#718096] text-[14px]  font-[300]">
                Monthly Salary
              </p>
              <div className="flex mt-5">
                <p className="text-[#1C065A] text-[14px] font-[600] ">
                  {monthly_salary}
                </p>
                <p className="ml-auto text-[#718096] text-[14px] font-[300]">
                  {date}
                </p>
              </div>
              <p className="text-[#718096] text-[14px]  font-[300]">
                Monthly Salary
              </p>
              <div className="flex mt-5">
                <p className="text-[#1C065A] text-[14px] font-[600] ">
                  {monthly_salary}
                </p>
                <p className="ml-auto text-[#718096] text-[14px] font-[300]">
                  {date}
                </p>
              </div>
              <p className="text-[#718096] text-[14px]  font-[300]">
                Monthly Salary
              </p>
              <div className="flex mt-5">
                <p className="text-[#1C065A] text-[14px] font-[600] ">
                  {monthly_salary}
                </p>
                <p className="ml-auto text-[#718096] text-[14px] font-[300]">
                  {date}
                </p>
              </div>
              <p className="text-[#718096] text-[14px]  font-[300]">
                Monthly Salary
              </p>
            </div>
          </div>
        </div>

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
        "001122345",
        "Segun Adebayo",
        "segun.ade@gmail.com",
        "12,430,900.00",
        "650,000.00",
        "12th August, 2023."
      )}
      {/* end of the first column */}
    </div>
  );
};

export default Details;
