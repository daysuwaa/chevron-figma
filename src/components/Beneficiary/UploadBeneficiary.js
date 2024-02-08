import React, { useState } from "react";
import Modal from "react-modal";
import close from "src/assets/IoCloseOutline.svg";
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
              Beneficiary Name
            </label>
            <div className="px-[10px] mt-2 items-center text-center h-[40px] md:w-[550px] border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                value={bname}
                onChange={(e) => setNamee(e.target.value)}
                placeholder="Enter Beneficiary Name"
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
            <label className="text-[#4A5568] text-sm">Upload Beneficiary</label>
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
            Add Beneficiary
          </button>
        </Link>
      </div>
    </Modal>
  );
};

export default UploadBeneficiary;
