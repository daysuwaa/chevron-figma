import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import toast, { Toaster } from "react-hot-toast";
import GetScheduleModal from "./Delete_modal";
import { Link } from "react-router-dom";

const Schedule_payments = () => {
  const [isDeleteScheduleOpen, setIsDeleteScheduleOpen] = useState(false);
  const openDeleteModal = () => setIsDeleteScheduleOpen(true);
  const closeDeleteSchedule = () => setIsDeleteScheduleOpen(false);
  const deets = (
    tab,
    schedule_detail,
    grade,
    no_of_beneficiaries,
    sch_id,
    daypayable,
    createdon,
    timepayable,
    lastpayment,
    total_paid,
    monthly_salary,
    date
  ) => {
    const copyToClipboard = () => {
      const textToCopy = "BLPSCID0013B31";
      toast("Copied to clipboard!", {
        id: "copyy",
      });
      if (navigator.clipboard) return navigator.clipboard.writeText(textToCopy);

      const textArea = document.createElement("textarea");
      document.body.appendChild(textArea);
      textArea.value = textToCopy;
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    };

    return (
      <div>
        <Link to="/schedules/table">
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.16244 3.08748C9.39024 3.31529 9.39024 3.68463 9.16244 3.91244L6.07492 6.99996L9.16244 10.0875C9.39024 10.3153 9.39024 10.6846 9.16244 10.9124C8.93463 11.1402 8.56529 11.1402 8.33748 10.9124L4.83748 7.41244C4.60967 7.18463 4.60967 6.81529 4.83748 6.58748L8.33748 3.08748C8.56529 2.85967 8.93463 2.85967 9.16244 3.08748Z"
                  fill="#1C065A"
                />
              </g>
            </svg>
            <p className="text-[14px] font-semibold mx-2 text-[#1C065A]">
              {tab}
              <span className="text-[#4A5568] font-normal">
                / Schedule-detail {schedule_detail}
              </span>
            </p>
          </div>
        </Link>

        {/* chevron salaries */}
        {/* md7 lg screen */}
        <div className="lg:grid grid-cols-3">
          <div className="hidden md:block col-span-2 bg-white lg:mx-7 md:mx-3">
            <div className="flex mx-3 md:mx-7 pt-6">
              <h5 className="text-[#1C065A] font-[500] text-[14px]">{grade}</h5>
              <div
                className="flex ml-auto items-center "
                onClick={copyToClipboard}
              >
                <h5 className="font-light text-[14px] mr-2   text-[#4A5568]">
                  Schedule Id
                </h5>
                <svg
                  className="mr-5 cursor-pointer"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="IoCopyOutline">
                    <path
                      id="Vector (Stroke)"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.33594 3.375C3.80523 3.375 3.375 3.80523 3.375 4.33594V9.53906C3.375 10.0698 3.80523 10.5 4.33594 10.5H9.53906C10.0698 10.5 10.5 10.0698 10.5 9.53906V4.33594C10.5 3.80523 10.0698 3.375 9.53906 3.375H4.33594ZM2.625 4.33594C2.625 3.39101 3.39101 2.625 4.33594 2.625H9.53906C10.484 2.625 11.25 3.39101 11.25 4.33594V9.53906C11.25 10.484 10.484 11.25 9.53906 11.25H4.33594C3.39101 11.25 2.625 10.484 2.625 9.53906V4.33594Z"
                      fill="black"
                    />
                    <path
                      id="Vector (Stroke)_2"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.62389 0.750003L2.625 0.75L7.68857 0.750002C8.13545 0.751275 8.56366 0.92936 8.87965 1.24535C9.19564 1.56134 9.37373 1.98956 9.375 2.43643L9.37492 2.44531L9.3632 3.00781C9.35889 3.21487 9.18753 3.37923 8.98047 3.37492C8.77341 3.37061 8.60905 3.19925 8.61336 2.99219L8.62498 2.43451C8.62321 2.18727 8.52422 1.95059 8.34932 1.77568C8.17357 1.59993 7.93545 1.50084 7.68692 1.5H2.62559C2.32739 1.50102 2.04168 1.61993 1.8308 1.8308C1.61993 2.04168 1.50102 2.32739 1.5 2.6256V7.68692C1.50084 7.93545 1.59993 8.17357 1.77568 8.34932C1.95143 8.52507 2.18957 8.62417 2.4381 8.625H3C3.20711 8.625 3.375 8.7929 3.375 9C3.375 9.20711 3.20711 9.375 3 9.375H2.4375L2.43643 9.375C1.98955 9.37373 1.56134 9.19564 1.24535 8.87965C0.929358 8.56366 0.751273 8.13545 0.750002 7.68857L0.75 7.6875V2.62389C0.751468 2.12736 0.949368 1.65158 1.30047 1.30047C1.65158 0.949369 2.12736 0.751471 2.62389 0.750003Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </div>
            </div>
            {/* second line */}
            <div className="flex mx-7  ">
              <p className="text-[14px] font-light text-[#4A5568]">
                {no_of_beneficiaries}
              </p>
              <p className="ml-auto text-[#1C065A] text-[14px] font-[500]">
                {sch_id}
              </p>
            </div>
            <Toaster />

            <hr className="mx-5 h-[2px] border-b my-9 bg-[#CBD5E0]"></hr>
            <div className="mx-7  ">
              <p className="text-[#1C065A] text-[10px] font-[500]">
                SCHEDULE DETAILS
              </p>
              <div className="flex mt-5">
                <p className="text-[#718096] text-[14px] font-light">
                  Schedule ID
                </p>
                <p className="text-[#718096] text-[14px] font-light ml-auto mr-[4.8rem]">
                  Created On
                </p>
              </div>
              <div className="flex">
                <p className="text-[#1C065A] text-[14px] font-[500]">
                  {daypayable}
                </p>
                <p className="text-[#1C065A] text-[14px] font-[500] ml-auto ">
                  {createdon}
                </p>
              </div>
              <div className="mt-3 ">
                <div className="flex">
                  <p className="text-[#718096] text-[14px] font-light">
                    Time payable
                  </p>
                  <p className="text-[#718096] text-[14px] font-light ml-auto mr-[3.9rem]">
                    Last Payment
                  </p>
                </div>
                <div className="flex">
                  <p className="text-[#1C065A] text-[14px] font-[500]">
                    {timepayable}
                  </p>
                  <p className="text-[#1C065A] text-[14px] font-[500] ml-auto ">
                    {lastpayment}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* xs and sm */}
          <div className="md:hidden block col-span-2 bg-white mx-3 lg:mx-7">
            <div className="mx-3 md:mx-7 pt-6">
              <h5 className="text-[#1C065A] font-[500] text-[14px]">{grade}</h5>
              <p className="text-[14px] font-light text-[#4A5568]">
                {no_of_beneficiaries}
              </p>
              <div className="flex items-center " onClick={copyToClipboard}>
                <h5 className="font-light text-[14px] mr-2  text-[#4A5568]">
                  Schedule Id
                </h5>
                <svg
                  className="mr-9 cursor-pointer"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="IoCopyOutline">
                    <path
                      id="Vector (Stroke)"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.33594 3.375C3.80523 3.375 3.375 3.80523 3.375 4.33594V9.53906C3.375 10.0698 3.80523 10.5 4.33594 10.5H9.53906C10.0698 10.5 10.5 10.0698 10.5 9.53906V4.33594C10.5 3.80523 10.0698 3.375 9.53906 3.375H4.33594ZM2.625 4.33594C2.625 3.39101 3.39101 2.625 4.33594 2.625H9.53906C10.484 2.625 11.25 3.39101 11.25 4.33594V9.53906C11.25 10.484 10.484 11.25 9.53906 11.25H4.33594C3.39101 11.25 2.625 10.484 2.625 9.53906V4.33594Z"
                      fill="black"
                    />
                    <path
                      id="Vector (Stroke)_2"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.62389 0.750003L2.625 0.75L7.68857 0.750002C8.13545 0.751275 8.56366 0.92936 8.87965 1.24535C9.19564 1.56134 9.37373 1.98956 9.375 2.43643L9.37492 2.44531L9.3632 3.00781C9.35889 3.21487 9.18753 3.37923 8.98047 3.37492C8.77341 3.37061 8.60905 3.19925 8.61336 2.99219L8.62498 2.43451C8.62321 2.18727 8.52422 1.95059 8.34932 1.77568C8.17357 1.59993 7.93545 1.50084 7.68692 1.5H2.62559C2.32739 1.50102 2.04168 1.61993 1.8308 1.8308C1.61993 2.04168 1.50102 2.32739 1.5 2.6256V7.68692C1.50084 7.93545 1.59993 8.17357 1.77568 8.34932C1.95143 8.52507 2.18957 8.62417 2.4381 8.625H3C3.20711 8.625 3.375 8.7929 3.375 9C3.375 9.20711 3.20711 9.375 3 9.375H2.4375L2.43643 9.375C1.98955 9.37373 1.56134 9.19564 1.24535 8.87965C0.929358 8.56366 0.751273 8.13545 0.750002 7.68857L0.75 7.6875V2.62389C0.751468 2.12736 0.949368 1.65158 1.30047 1.30047C1.65158 0.949369 2.12736 0.751471 2.62389 0.750003Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </div>
            </div>
            {/* second line */}
            <div className="flex mx-3 ">
              <p className=" text-[#1C065A] text-[14px] font-[500]">{sch_id}</p>
            </div>
            <Toaster />

            <div
              className="mx-3 h-[2px] border-b my-7 "
              style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
            ></div>
            <div className="mx-3  ">
              <p className="text-[#1C065A] text-[10px] font-[500]">
                SCHEDULE DETAILS
              </p>
              <div className="flex mt-3">
                <p className="text-[#718096] text-[14px] font-light">
                  Schedule ID
                </p>
                <p className="text-[#718096] text-[14px] font-light ml-auto mr-[4.8rem]">
                  Created On
                </p>
              </div>
              <div className="flex">
                <p className="text-[#1C065A] text-[14px] font-[500]">
                  {daypayable}
                </p>
                <p className="text-[#1C065A] text-[14px] font-[500] ml-auto ">
                  {createdon}
                </p>
              </div>
              <div className="mt-3 ">
                <div className="flex">
                  <p className="text-[#718096] text-[14px] font-light">
                    Time payable
                  </p>
                  <p className="text-[#718096] text-[14px] font-light ml-auto mr-[3.9rem]">
                    Last Payment
                  </p>
                </div>
                <div className="flex">
                  <p className="text-[#1C065A] text-[14px] font-[500]">
                    {timepayable}
                  </p>
                  <p className="text-[#1C065A] text-[14px] font-[500] ml-auto ">
                    {lastpayment}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* second column */}
          <div className="cols-span-1">
            <div className="flex mx-3 md:mx-10 lg:mx-5 items-center mt-7 lg:mt-0">
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.14645 2.64645C4.34171 2.45118 4.65829 2.45118 4.85355 2.64645L7.85355 5.64645C8.04882 5.84171 8.04882 6.15829 7.85355 6.35355L4.85355 9.35355C4.65829 9.54882 4.34171 9.54882 4.14645 9.35355C3.95118 9.15829 3.95118 8.84171 4.14645 8.64645L6.79289 6L4.14645 3.35355C3.95118 3.15829 3.95118 2.84171 4.14645 2.64645Z"
                    fill="#4A5568"
                  />
                </g>
              </svg>
            </div>
            <div className="flex mx-3  md:mx-10 lg:mx-5 bg-[#EBE3FC] px-[16px] py-[12px] rounded mt-4">
              <p className="text-[#718096] text-[14px]">Total Paid:</p>
              <p className="ml-auto text-[#1C065A] text-[14px] font-[600]">
                {total_paid}
              </p>
            </div>
            <div className="grid-cols-2 grid-rows-6 mx-3  md:mx-10 lg:mx-5">
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
        {/* end of grid */}

        <button
          onClick={openDeleteModal}
          className=" my-9 text-[#FF5655] h-[32px] text-[14px] rounded w-[147px] mx-3  md:mx-10 lg:mx-7  "
          style={{
            border: "1px solid var(--Color-Base-Background-Color-4, #FF5655)",
          }}
        >
          Delete Schedule
        </button>
      </div>
    );
  };
  return (
    <div>
      <Navbar title="Schedules" />
      {deets(
        "Schedules",
        "(BLPSCID0013B31)",
        "Chevron Salaries Staff Grade 1A",
        "25 Beneficiaries",
        "BLPSCID0013B31",
        "26th of the Month",
        "12th September, 2023.",
        "12:00",
        "12th September, 2023.",
        "12,430,900.00",
        "650,000.00",
        "12th August, 2023."
      )}
      <GetScheduleModal
        isOpen={isDeleteScheduleOpen}
        modalTitle={"Delete Schedule?"}
        handleClose={closeDeleteSchedule}
      />
    </div>
  );
};

export default Schedule_payments;
