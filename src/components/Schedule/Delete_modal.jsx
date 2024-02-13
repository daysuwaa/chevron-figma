import React from "react";
import Modal from "react-modal";

const Delete_modal = ({ isOpen, handleClose, modalTitle }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel={modalTitle}
      shouldCloseOnOverlayClick={false}
      className="absolute rounded top-1/2 md:left-1/2 left-[43%] transform -translate-x-1/2 bg-white -translate-y-1/2 p-[2rem] m-[2rem]"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="flex items-center">
        <h2 className="text-md text-[#4A5568] mx-auto mb-2  font-semibold">
          {/* Get Schedule Template */}
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L12 10.9393L16.7197 6.21967C17.0126 5.92678 17.4874 5.92678 17.7803 6.21967C18.0732 6.51256 18.0732 6.98744 17.7803 7.28033L13.0607 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L12 13.0607L7.28033 17.7803C6.98744 18.0732 6.51256 18.0732 6.21967 17.7803C5.92678 17.4874 5.92678 17.0126 6.21967 16.7197L10.9393 12L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z"
                fill="#4A5568"
              />
            </g>
          </svg>
        </button>
      </div>
      <hr className=" h-[2px] border-b text-[#CBD5E0]  " />
      <div className="mt-4  flex text-center item-center">
        <p className="text-[#4A5568] text-sm">
          Are you sure you want to delete this schedule?
          <p>This action cannot be reversed!</p>
        </p>
      </div>

      <div className="mt-5  justify-center flex">
        <button
          onClick={handleClose}
          className="  text-[#FF5655] h-[32px] text-[14px] rounded w-[147px]  "
          style={{
            border: "1px solid var(--Color-Base-Background-Color-4, #FF5655)",
          }}
        >
          Delete Schedule
        </button>
      </div>
    </Modal>
  );
};

export default Delete_modal;
