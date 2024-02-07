// GetScheduleModal.jsx
import React, { useState } from "react";
import Modal from "react-modal";
import close from "src/assets/IoCloseOutline.svg";

const Delete_modal = ({ isOpen, handleClose, modalTitle }) => {
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
      <div className="flex items-center">
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
      <div className="mt-4 flex text-center justify-center">
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
