import React, { useState } from "react";
import search from "src/assets/CkSearch.svg";
import filter from "src/assets/FiFilter.svg";
import GetBeneficiaryModal from "./GetBeneficiaryModal";
import AddBeneficiaryModal from "./AddBeneficiaryModal";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
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
      name: <div className="font-bold text-[#4A5568]">BENEFICIARY LIST ID</div>,
      selector: (row) => (
        <Link to="/beneficiarypayments">
          <div className=" font-semibold text-[#1C065A]">{row.scheduleid}</div>
        </Link>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]"> LASTNAMES</div>,
      selector: (row) => <div className="text-[#1C065A]">{row.surname}</div>,
    },

    {
      name: <div className="font-bold text-[#4A5568]">RECIPIENT</div>,
      selector: (row) => <div className="text-[#1C065A]">{row.recipients}</div>,
    },
    {
      name: <div className="font-bold text-[#4A5568]">CREATED ON</div>,
      selector: (row) => <div className="text-[#1C065A]"> {row.lastlogin}</div>,
    },
  ];

  const data = [
    {
      id: 1,
      scheduleid: "BLPID000133B31",
      surname: "Ali Yaba Staff",
      recipients: "120",
      lastlogin: "13:45, 11 Sep 2023",
    },

    {
      id: 2,
      scheduleid: "BLPID000133B31",
      surname: "Ali Lekki Staff",
      recipients: "80",
      lastlogin: "13:45, 11 Sep 2023",
    },
    {
      scheduleid: "BLPID000133B31",
      surname: "Drivers & Cleaners",
      recipients: "83",
      lastlogin: "13:45, 11 Sep 2023",
    },
    {
      id: 4,
      scheduleid: "BLPID000133B31",
      surname: " My Escort ",
      recipients: "12",
      lastlogin: "13:45, 11 Sep 2023",
    },
  ];
  return (
    <div>
      <Navbar title="Schedules" />
      <div className="md:flex pt-8">
        <div className="px-[20px] h-10 mx-5 flex md:w-[320px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
          <img src={search} alt="searchicon" className="w-[16px]  " />
          <input
            type="text"
            placeholder="Search by Payment Id"
            id="search"
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
        {/* md  large */}
        <div className=" hidden sm:hidden md:hidden lg:flex ml-auto  px-5  ">
          <button
            className="mr-2 mb-3 text-[#1C065A] px-[12px]   text-[14px] sm:text-[16px] rounded bg-white  text-center  "
            style={{
              border: " 1px solid var(--Button-Background-Alternate, #3B2773)",
            }}
            onClick={openGetSchedule}
          >
            Get Beneficiary Template
          </button>
          <button
            className="mr-2 mb-3 bg-[#1C065A] px-[12px]   text-[14px] sm:text-[16px] rounded text-white  text-center  "
            style={{
              border: " 1px solid var(--Button-Background-Alternate, #3B2773)",
            }}
            onClick={openAddScheduleModal}
          >
            Add New Beneficiary
          </button>
        </div>
      </div>
      {/* xs screen */}

      <div className="block md:block lg:hidden ml-auto pt-5 md:mt-0  px-5  ">
        <button
          className="mr-2 mb-3 text-[#1C065A]  px-[12px]  text-[14px] rounded bg-white  text-center  "
          style={{
            border: " 1px solid var(--Button-Background-Alternate, #3B2773)",
          }}
          onClick={openGetSchedule}
        >
          Get Beneficiary Template
        </button>
        <button
          className="mr-2 mb-3 bg-[#1C065A] px-[12px]   text-[14px] rounded text-white  text-center  "
          style={{
            border: " 1px solid var(--Button-Background-Alternate, #3B2773)",
          }}
          onClick={openGetSchedule}
        >
          Add New Beneficiary
        </button>
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

      <GetBeneficiaryModal
        isOpen={isGetScheduleOpen}
        modalTitle={"Get Schedule Template"}
        handleClose={closeGetSchedule}
      />
      <AddBeneficiaryModal
        isOpen={isAddScheduleModalOpen}
        modalTitle={"Add New Schedule"}
        namee={"Schedule Name"}
        handleClose={closeAddScheduleModal}
      />
    </div>
  );
};

export default ScheduleTable;
