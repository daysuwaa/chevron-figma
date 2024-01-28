import React, { useState } from "react";
import man from "../assets/image 1.png";
import arrowdown from "../assets/FiChevronDown.svg";
import User from "../components/User";
import Modal from "react-modal";
import close from "../assets/IoCloseOutline.svg";
// import Tooltip from "@mui/material/Tooltip";

const Users = () => {
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
  const CustomModal = ({ isOpen, handleClose }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between items-center lg:w-[35rem] md:w-[30rem] w-full">
          <h2 className="text-md text-[#4A5568] mx-auto mb-4 font-semibold">
            Get Schedule Template
          </h2>

          <button onClick={handleClose} className="text-gray-600">
            <img src={close} alt="close" />
          </button>
        </div>
        {/* lineee */}
        <div
          className="w-full h-[2px] border-b "
          style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
        ></div>

        <div className="mt-4 flex">
          <p className="text-[#4A5568] text-sm mt-4">
            Use existing beneficiary list?
          </p>
        </div>

        <div className="my-2 pt-7 flex justify-start">
          <button
            className="bg-[#3B2774] text-white py-2 px-4 rounded"
            onClick={handleClose}
          >
            Get Template
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
    <div>
      <div
        className="flex px-[32px] py-[18px] justify-between h-[60px]"
        style={{ background: "#fff" }}
      >
        <p className="font-semibold tracking-wide ">Users</p>
        <div className="flex items-center">
          <img src={man} alt="arrow" className="w-[24px] h-[24px] mr-3" />
          <img src={arrowdown} alt="man" className="w-[14px] h-[14px]" />
        </div>
      </div>

      <div className="flex ml-auto justify-end items-center mx-2 px-[12px] mt-8 pb-5">
        <button
          className="bg-[#3B2774] h-[32px] w-[123px] rounded text-center text-white text-sm gap-8"
          onClick={openModal}
        >
          Add New User
        </button>
        <CustomModal isOpen={isModalOpen} handleClose={closeModal} />
      </div>

      <User />
    </div>
  );
};

export default Users;
