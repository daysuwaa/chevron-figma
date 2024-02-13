import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import computer from "src/assets/computer.png";
import GetScheduleModal from "./GetScheduleModal";
import AddScheduleModal from "./AddScheduleModal";

const Schedules = () => {
  const [isGetScheduleOpen, setIsGetScheduleOpen] = useState(false);
  const openGetSchedule = () => setIsGetScheduleOpen(true);
  const closeGetSchedule = () => setIsGetScheduleOpen(false);

  const [isAddScheduleModalOpen, setIsAddScheduleModalOpen] = useState(false);
  const openAddScheduleModal = () => setIsAddScheduleModalOpen(true);
  const closeAddScheduleModal = () => setIsAddScheduleModalOpen(false);

  return (
    <div className="bg-[#F6F6F6] h-full">
      <Navbar title="Schedules" />

      <div className="flex ml-auto justify-end items-center mx-5 md:px-[10px] mt-8">
        <button
          className="bg-[#3B2774] rounded text-center px-3 h-[32px] text-white text-sm gap-8"
          onClick={openAddScheduleModal}
        >
          Add New Schedule
        </button>
      </div>

      <div className="flex flex-col items-center mt-[8rem]">
        <img src={computer} alt="" className="mb-4" />
        <p className="text-center text-[#1C065A] font-light tracking-wide text-xl">
          No schedules created
        </p>
        <p className="text-center text-[#718096] font-light tracking-wide text-sm mx-3">
          You do not have any schedules.
          <br />
          Click the button below to generate a template for one
        </p>
        <button
          className="py-2 px-3 text-[#1C065A] text-[14px] sm:text-[16px] mt-4 rounded bg-white  text-center flex items-center justify-center"
          style={{
            border: " 1px solid var(--Button-Background-Alternate, #3B2773)",
          }}
          onClick={openGetSchedule}
        >
          Get Schedule Template
        </button>

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
    </div>
  );
};

export default Schedules;
