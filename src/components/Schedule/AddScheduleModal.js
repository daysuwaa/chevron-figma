// AddScheduleModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import close from "src/assets/IoCloseOutline.svg";
import ScheduleTable from "./Schedule-table";
import upload from "src/assets/IoCloudUploadOutline.svg";
import UploadSchedule from "./UploadSchedule";

const AddScheduleModal = ({
  isOpen,
  handleClose,
  modalTitle,
  name,
  namee,
  setName,
}) => {
  const [isScheduleTableOpen, setIsScheduleTableOpen] = useState(false);
  const closeScheduleTable = () => setIsScheduleTableOpen(false);

  const [isUploadScheduleOpen, setIsUploadScheduleOpen] = useState(false);
  const openUploadSchedule = () => setIsUploadScheduleOpen(true);
  const closeUploadSchedule = () => setIsUploadScheduleOpen(false);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel={modalTitle}
      shouldCloseOnOverlayClick={false}
      className="absolute top-1/2 md:left-1/2 left-[43%] transform -translate-x-1/2 bg-white -translate-y-1/2 p-[2rem] m-[2rem]"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="mt-5">
        <div className="flex items-center">
          <h2 className="text-md text-[#4A5568] mx-auto mb-4 font-semibold">
            {modalTitle}
          </h2>
          <button onClick={handleClose} className="text-gray-600">
            <img src={close} alt="close" className="mb-2" />
          </button>
        </div>
        <div
          className="md:w-full w-[19rem] mx-auto h-[2px] border-b"
          style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
        ></div>
        <div className="my-6">
          <form>
            <label
              htmlFor="schedulename"
              className="text-[#4A5568] mr-auto text-sm"
            >
              {namee}
            </label>
            <div className="px-[10px] items-center  flex h-[40px] md:w-[550px] border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Schedule Name"
                id="schedulename"
                className="font-normal w-full outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                }}
              />
            </div>
          </form>
        </div>
        <div className="my-6">
          <div className="md:mx-auto">
            <label className="text-[#4A5568] text-sm">Upload Schedule</label>
            <div className="mx-auto items-center mt-1 text-[#4A5568] justify-center w-full rounded border border-[#CBD5E0] border-dashed border-focus-within:outline outline-2 px-10">
              <img src={upload} alt="upload" className="mx-auto mt-4" />
              <p className="text-center text-[14px] font-light">
                Drag and drop your files here
              </p>
              <div className="flex items-center mt-6">
                <div className="flex-grow h-[1px] bg-[#718096] opacity-[0.4]"></div>
                <div className="mx-4">or</div>
                <div className="flex-grow h-[1px] bg-[#718096] opacity-[0.4]"></div>
              </div>
              <button
                onClick={openUploadSchedule}
                className="bg-gray-200 flex mx-auto h-[32px] px-[12px] mt-9 text-[14px] items-center rounded-sm w-[107px] cursor-pointer"
              >
                Browse files
              </button>
              <p className="text-xs flex justify-center my-4">
                Max File size: 200mb
              </p>
            </div>
          </div>
        </div>

        <button className="bg-[#3B2774] my-2 flex justify-start text-white py-2 px-4 rounded opacity-20">
          Add Schedule
        </button>

        {isScheduleTableOpen && (
          <ScheduleTable
            isOpen={isScheduleTableOpen}
            modalTitle={"Add New Schedule"}
            namee={"Schedule Name"}
            handleClose={closeScheduleTable}
          />
        )}
        <UploadSchedule
          snamee="Add New schedule"
          isOpen={isUploadScheduleOpen}
          modalTitle={"Add New Schedule"}
          handleClose={closeUploadSchedule}
        />
      </div>
    </Modal>
  );
};

export default AddScheduleModal;
