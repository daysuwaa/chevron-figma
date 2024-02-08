import React, { useState } from "react";
import Modal from "react-modal";
import close from "src/assets/IoCloseOutline.svg";

const GetScheduleModal = ({ isOpen, handleClose, modalTitle }) => {
  const [benefi, setBenfi] = useState("");
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
          left: "43%",
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
      <div className="flex items-center lg:w-[35rem] md:w-[30rem] w-[20rem]">
        <h2 className="text-md text-[#4A5568] mx-auto mb-3 font-semibold">
          {/* Get Schedule Template */}
          {modalTitle}
        </h2>
        <button onClick={handleClose} className="text-gray-600 ml-auto">
          <img src={close} alt="close" />
        </button>
      </div>
      <div
        className="w-full h-[2px] border-b  "
        style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
      ></div>
      <div className="mt-4 flex items-center justify-between ">
        <div className="my-6">
          <form>
            <label htmlFor="benefi" className="text-[#4A5568] text-sm ">
              Beneficiary List Name
            </label>
            <div className="px-[10px] items-center h-[40px] flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                value={benefi}
                onChange={(e) => setBenfi(e.target.value)}
                placeholder="Enter Beneficiary List Name"
                id="benefi"
                className="font-normal w-[320px] h-8 outline-none"
                style={{
                  color: "#718096",
                  fontSize: "16px",
                }}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="my-2">
        <button
          className="bg-[#3B2774] text-white py-2 px-4 $] rounded"
          onClick={handleClose}
        >
          Get Template
        </button>
      </div>
    </Modal>
  );
};

export default GetScheduleModal;
