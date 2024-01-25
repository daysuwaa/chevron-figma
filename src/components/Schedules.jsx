import React, { useState } from "react";
import man from "../assets/image 1.png";
import arrowdown from "../assets/FiChevronDown.svg";
import computer from "../assets/computer.png";
import close from "../assets/IoCloseOutline.svg";
import Modal from "react-modal";

const Schedules = () => {
  const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
      setIsActive(!isActive);
    };

    return (
      <button
        className={`h-4 w-8 flex rounded-full ${
          isActive ? "bg-green-500 justify-end" : "bg-gray-200 justify-start"
        } focus:outline-none transition duration-300 ease-in-out`}
        onClick={toggleButton}
      >
        <span
          className={` flex h-full w-1/2 rounded-full ${
            isActive ? "bg-gray-100" : "bg-gray-100"
          }`}
        ></span>
      </button>
    );
  };
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
          <div className="ml-auto  mt-4">
            <ToggleButton className="justify-end" />
          </div>
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

  // second one

  const AddNewSchedule = ({ isOpen2, handleClose2 }) => {
    const [name, setName] = useState("");
    return (
      <Modal
        isOpen={isOpen2}
        onRequestClose={handleClose2}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between items-center lg:w-[35rem] md:w-[30rem] w-full ">
          <h2 className="text-md text-[#4A5568] mx-auto mb-4 font-semibold">
            Add New Schedule
          </h2>

          <button onClick={handleClose2} className="text-gray-600">
            <img src={close} alt="close" />
          </button>
        </div>
        {/* lineee */}
        <div
          className="w-full h-[2px] border-b "
          style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
        ></div>
        <div className="my-6">
          <form>
            <label className="text-[#4A5568] text-sm ">
              Schedule Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-2"
              />
            </label>
            <div className="px-[10px] items-center h-[40px] flex w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                placeholder="Enter Schedule Name"
                id="search"
                className="font-normal w-[320px] h-8 outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                }}
              />
            </div>
          </form>
        </div>

        <div className="my-6">
          <form>
            <label className="text-[#4A5568] text-sm ">
              Upload Schedule
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="mb-2"
              />
            </label>
            <div className="px-[10px] items-center h-[40px] flex w-[566px] rounded border border-[#CBD5E0] border-dashed border-focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                placeholder="Enter Schedule Name"
                id="search"
                className="font-normal w-[320px] h-8 outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                }}
              />
            </div>
          </form>
        </div>

        <div className="my-2 pt-7 flex justify-start">
          <button
            className="bg-[#3B2774] text-white py-2 px-4 rounded"
            onClick={handleClose2}
          >
            Get Template
          </button>
        </div>
      </Modal>
    );
  };
  // for the get schedule template
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // for the add schedule

  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
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
        <button
          className="bg-[#3B2774] h-[32px] w-[153px] rounded text-center text-white text-sm gap-8"
          onClick={openModal2}
        >
          Add New Schedule
        </button>
        <AddNewSchedule isOpen2={isModalOpen2} handleClose2={closeModal2} />
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
