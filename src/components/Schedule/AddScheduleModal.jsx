import React, { useState } from "react";
import Modal from "react-modal";
import close from "src/assets/IoCloseOutline.svg";
import Draganddrop from "./Draganddrop";

const AddScheduleModal = ({ isOpen, handleClose, modalTitle }) => {
  const [scheduleename, setScheduleename] = useState("");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel={modalTitle}
      shouldCloseOnOverlayClick={false}
      className="absolute rounded top-1/2 md:left-1/2 left-[45%] transform -translate-x-1/2 bg-white -translate-y-1/2 p-[2rem] m-[2rem]"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="mt-5">
        <div className="flex items-center">
          <h2 className="text-md text-[#4A5568] mx-auto mb-2 font-semibold">
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
              className="text-[#4A5568] mr-auto text-sm pb-2 block"
            >
              Schedule Name
            </label>
            <div className="px-[10px] items-center  flex h-[40px] md:w-[550px] border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                value={scheduleename}
                onChange={(e) => setScheduleename(e.target.value)}
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
        <Draganddrop />
      </div>
    </Modal>
  );
};

export default AddScheduleModal;
