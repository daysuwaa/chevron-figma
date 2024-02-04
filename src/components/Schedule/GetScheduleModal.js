// GetScheduleModal.jsx
import React from "react";
import { ModalTitle } from "react-bootstrap";
import Modal from "react-modal";
import close from "src/assets/IoCloseOutline.svg";
import Toggle from "../Stuff/ToggleButton";

const GetScheduleModal = ({
  isOpen,
  handleClose,
  modalTitle,
  handleButtonClick,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel={modalTitle}
      shouldCloseOnOverlayClick={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          top: "40%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -40%)",
          padding: "2rem",
          margin: "2rem",
          backgroundColor: "#fff",
          border: "1px solid var(--Button-Background-Alternate, #3B2773)",
        },
      }}
    >
      <div className="flex items-center lg:w-[35rem] md:w-[30rem] w-[14rem]">
        <h2 className="text-md text-[#4A5568] mx-auto mb-4 font-semibold">
          {/* Get Schedule Template */}
          {modalTitle}
        </h2>
        <button onClick={handleClose} className="text-gray-600">
          <img src={close} alt="close" />
        </button>
      </div>
      <div
        className="w-full h-[2px] border-b "
        style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
      ></div>
      <div className="mt-4 flex">
        <p className="text-[#4A5568] text-sm mt-4">
          Use existing Schedule list?
        </p>
        <div className="ml-auto  mt-4">
          <Toggle className="justify-end" />
        </div>
      </div>
      <div className="my-2 pt-7 flex justify-start">
        <button
          className="bg-[#3B2774] text-white py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Get Template
        </button>
      </div>
    </Modal>
  );
};

export default GetScheduleModal;
