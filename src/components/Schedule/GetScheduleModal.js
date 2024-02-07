import React, { useState } from "react";
import Modal from "react-modal";
import close from "src/assets/IoCloseOutline.svg";
import Toggle from "./Toggle";
import Dropdown from "./Dropdown";

const GetScheduleModal = ({
  isOpen,
  handleClose,
  modalTitle,
  //   handleButtonClick,
}) => {
  const [isActive, setIsActive] = useState(false);
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
        className="w-full h-[2px] border-b  "
        style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
      ></div>
      <div className="mt-4 flex items-center justify-between relative">
        <p className="text-[#4A5568] text-sm">Use existing Schedule list?</p>
        <Toggle />
        {isActive && (
          <div className="absolute top-full left-0 w-[100rem] z-10">
            <Dropdown />
          </div>
        )}
      </div>

      <div className="my-2">
        <button
          className={`bg-[#3B2774] text-white py-2 px-4 ${
            isActive ? "pt-7 flex justify-start" : "mt-[5rem] "
          }
          } rounded`}
          onClick={handleClose}
        >
          Get Template
        </button>
      </div>
    </Modal>
  );
};

export default GetScheduleModal;
