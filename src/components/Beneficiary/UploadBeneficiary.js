import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const UploadBeneficiary = ({
  isOpen,
  handleClose,
  modalTitle,
  bname,
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
          <h2 className="text-md text-[#4A5568] mx-auto  font-semibold">
            {modalTitle}
          </h2>
          <button onClick={handleClose} className="text-gray-600">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="IoCloseOutline">
                <path
                  id="Vector (Stroke)"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L12 10.9393L16.7197 6.21967C17.0126 5.92678 17.4874 5.92678 17.7803 6.21967C18.0732 6.51256 18.0732 6.98744 17.7803 7.28033L13.0607 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L12 13.0607L7.28033 17.7803C6.98744 18.0732 6.51256 18.0732 6.21967 17.7803C5.92678 17.4874 5.92678 17.0126 6.21967 16.7197L10.9393 12L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z"
                  fill="#4A5568"
                />
              </g>
            </svg>
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
              Beneficiary Name
            </label>
            <div className="px-[10px] items-center text-center h-[40px] md:w-[550px] border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                value={bname}
                onChange={(e) => setNamee(e.target.value)}
                placeholder="Enter Beneficiary Name"
                id="schedulenamee"
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
            <label className="text-[#4A5568] text-sm">Upload Beneficiary</label>
          </div>
          <p className="text-[12px] text-[#4A5568] underline">
            Choose a different file
          </p>
        </div>
        <Link to="/beneficiarytable">
          <button
            className="bg-[#3B2774] my-2 flex justify-start text-white py-2 px-4 rounded"
            onClick={handleClose}
          >
            Add Beneficiary
          </button>
        </Link>
      </div>
    </Modal>
  );
};

export default UploadBeneficiary;
