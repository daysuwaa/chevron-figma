import React, { useState } from "react";
import search from "src/assets/CkSearch.svg";
import filter from "src/assets/FiFilter.svg";
import GetScheduleModal from "./GetScheduleModal";
import AddScheduleModal from "./AddScheduleModal";
import DataTable from "react-data-table-component";
import Navbar from "../Stuff/Navbar";

const ScheduleTable = () => {
  const [isGetScheduleOpen, setIsGetScheduleOpen] = useState(false);
  const openGetSchedule = () => setIsGetScheduleOpen(true);
  const closeGetSchedule = () => setIsGetScheduleOpen(false);

  const [isAddScheduleModalOpen, setIsAddScheduleModalOpen] = useState(false);
  const openAddScheduleModal = () => setIsAddScheduleModalOpen(true);
  const closeAddScheduleModal = () => setIsAddScheduleModalOpen(false);

  const columns = [
    {
      name: <div className="font-bold text-[#4A5568]">SCHEDULE ID</div>,
      selector: (row) => (
        <div className=" font-semibold text-[#1C065A]">{row.scheduleid}</div>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]">SCHEDULE NAME</div>,
      selector: (row) => <div className="text-[#1C065A]">{row.name}</div>,
    },

    {
      name: <div className="font-bold text-[#4A5568]">RECIPIENT</div>,
      selector: (row) => <div className="text-[#1C065A]">{row.recipients}</div>,
    },
    {
      name: <div className="font-bold text-[#4A5568]">CREATED ON</div>,
      selector: (row) => <div className="text-[#1C065A]"> {row.lastlogin}</div>,
    },

    {
      name: <div className="font-bold text-[#4A5568]">ACTIONS</div>,
      selector: (row) => (
        <div className="flex">
          <div
            style={{
              border: "1px solid #EBB040",
              color: "#EBB040",
              padding: " 4.6px",
              justifyContent: "center",
              borderRadius: "4px",
              textAlign: "center",
              width: "100px",
              height: "30px",
              marginRight: "10px",
            }}
            onClick={openAddScheduleModal}
            className="cursor-pointer"
          >
            {row.status1}
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      scheduleid: "BLPID000133B31",
      name: "Lekki Branch Salaries",
      recipients: "120",
      lastlogin: "13:45, 11 Sep 2023",
      status1: "Edit Schedule",
    },

    {
      id: 2,
      scheduleid: "BLPID000133B31",
      name: "Yaba Branch Salaries",
      recipients: "80",
      lastlogin: "13:45, 11 Sep 2023",
      status1: "Edit Schedule",
    },
    {
      scheduleid: "BLPID000133B31",
      name: "Drivers Branch Salaries",
      recipients: "83",
      lastlogin: "13:45, 11 Sep 2023",
      status1: "Edit Schedule",
    },
    {
      id: 4,
      scheduleid: "BLPID000133B31",
      name: "Escort Branch Salaries",
      recipients: "12",
      lastlogin: "13:45, 11 Sep 2023",
      status1: "Edit Schedule",
    },
  ];
  return (
    <div>
      <Navbar title="Schedule" />
      <div className="lg:flex pt-8">
        <div className="px-[20px] mx-5 py-[6px] flex md:w-[320px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
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
          className="px-[20px] py-[12px] mx-5 mt-3 md:mx-5 md:mt-3 lg:mt-0 flex w-[100px] "
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
        <div className="ml-auto sm:mt-3 mt-3 md:mt-3 lg:flex lg:mt-0 px-5  ">
          <button
            className=" h-[40px] mr-2 text-[#1C065A]  w-[200px]  text-[14px] sm:text-[16px] rounded bg-white  text-center  "
            style={{
              border: " 1px solid var(--Button-Background-Alternate, #3B2773)",
            }}
            onClick={openGetSchedule}
          >
            Get Schedule Template
          </button>
          <button
            className="bg-[#3B2774] h-[40px] w-[153px] rounded text-center text-white text-sm gap-8"
            onClick={openAddScheduleModal}
          >
            Add New Schedule
          </button>
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
        <DataTable columns={columns} data={data} className="" />
      </div>

      <GetScheduleModal
        isOpen={isGetScheduleOpen}
        modalTitle={"Get Schedule Template"}
        handleClose={closeGetSchedule}
      />
      <AddScheduleModal
        isOpen={isAddScheduleModalOpen}
        modalTitle={"Add New Schedule"}
        namee={"Schedule Name"}
        handleClose={closeAddScheduleModal}
      />
    </div>
  );
};

export default ScheduleTable;
