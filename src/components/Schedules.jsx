import React, { useState } from "react";
import man from "../assets/image 1.png";
import arrowdown from "../assets/FiChevronDown.svg";
import computer from "../assets/computer.png";
import close from "../assets/IoCloseOutline.svg";
import Modal from "react-modal";

const Schedules = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "2rem",
    },
  };

  // Modal component
  const CustomModal = ({ isOpen, handleClose }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Modal Title</h2>
          <button onClick={handleClose} className="text-gray-600">
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="mt-4">
          {/* Your modal content goes here */}
          <p>Cras mattis consectetur purus sit amet fermentum...</p>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-[#3B2774] text-white py-2 px-4 rounded"
            onClick={handleClose}
          >
            Save Changes
          </button>
        </div>
      </Modal>
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#F6F6F6] h-full">
      {/* navbar */}
      <div
        className="flex px-[32px] py-[18px] justify-between h-[60px]"
        style={{ background: "#fff" }}
      >
        <p className="font-semibold tracking-wide ">Schedules</p>
        <div className="flex items-center">
          <img src={man} alt="arrow" className="w-[24px] h-[24px] mr-3" />
          <img src={arrowdown} alt="man" className="w-[14px] h-[14px]" />
        </div>
      </div>

      {/* button */}
      <div className="flex ml-auto justify-end items-center mx-5 px-[12px] mt-8">
        <button className="bg-[#3B2774] h-[32px] w-[153px] rounded text-center text-white text-sm gap-8">
          Add New Schedule
        </button>
      </div>

      {/* centered image with text below */}
      <div className="flex flex-col items-center mt-[8rem]">
        <img src={computer} alt="" className="mb-4" />
        <p className="text-center text-[#1C065A] font-light tracking-wide text-xl">
          No schedules created
        </p>
        <p className="text-center text-[#718096] font-light tracking-wide text-sm">
          {" "}
          You do not have any schedules. <br></br>
          Click the button below to generate a template for one
        </p>

        <div
          className="h-[48px] mt-4 rounded bg-white w-[251px] text-center flex items-center justify-center"
          style={{
            border: " 1px solid var(--Button-Background-Alternate, #3B2773)",
          }}
        >
          <button className="text-[#1C065A]" onClick={openModal}>
            {" "}
            Get Schedule Template
          </button>

          <CustomModal isOpen={isModalOpen} handleClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Schedules;
