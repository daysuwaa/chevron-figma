import React from "react";
import Modal from "react-modal";
import close from "src/assets/IoCloseOutline.svg";
import { Link } from "react-router-dom";

const UploadSchedule = ({
  isOpen,
  handleClose,
  modalTitle,
  sname,
  snamee,
  setNamee,
}) => {
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
              htmlFor="schedulenamee"
              className="text-[#4A5568] mr-auto text-sm "
            >
              {snamee}
            </label>
            <div className="px-[10px] mt-2 items-center text-center h-[40px] md:w-[550px] border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                value={sname}
                onChange={(e) => setNamee(e.target.value)}
                placeholder="Enter Schedule Name"
                id="schedulenamee"
                className="font-normal mt-1 w-full h-8 outline-none"
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
          </div>
          <p className="text-[12px] text-[#4A5568] underline">
            Choose a different file
          </p>
        </div>
        <Link to="/scheduletable">
          <button
            className="bg-[#3B2774] my-2 flex justify-start text-white py-2 px-4 rounded"
            onClick={handleClose}
          >
            Add Schedule
          </button>
        </Link>
      </div>
    </Modal>
  );
};

export default UploadSchedule;
