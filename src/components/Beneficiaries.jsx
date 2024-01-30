import React, { useState } from "react";
import man from "../assets/image 1.png";
import arrowdown from "../assets/FiChevronDown.svg";
import computer from "../assets/computer.png";
import close from "../assets/IoCloseOutline.svg";
import upload from "../assets/IoCloudUploadOutline.svg";
import Modal from "react-modal";

const Beneficiaries = () => {
  // handles the files upload
  const handleFileUpload = (e) => {
    const selectedFiles = e.target.files;
    console.log(selectedFiles);
  };
  // for the toggle button
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
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -40%)",
      padding: "2rem",
      margin: "2rem",
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
        <div className="flex items-center lg:w-[35rem] md:w-[30rem] w-[14rem]">
          <h2 className="text-md text-[#4A5568] mx-auto mb-4 font-semibold">
            Get Beneficiary Template
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

  const AddBeneficiary = ({ isOpen2, handleClose2 }) => {
    const [namee, setNamee] = useState("");

    return (
      <Modal
        isOpen={isOpen2}
        onRequestClose={handleClose2}
        contentLabel="Example Modal"
        className=" w-[23rem] pb-7 my-[4rem] mx-auto justify-center flex lg:w-[40rem] md:w-[39rem] sm:w-[30rem] bg-white border"
        style={{
          border: "1px solid var(--Button-Background-Alternate, #3B2773",
        }}
      >
        <div className="mt-5">
          <div className="flex items-center ">
            <h2 className="text-md text-[#4A5568] md:mx-auto  mx-[5rem] mb-4 font-semibold">
              Add New Beneficiary
            </h2>
            <button onClick={handleClose2} className="text-gray-600">
              <img src={close} alt="close" className="mb-2" />
            </button>
          </div>
          {/* lineee */}
          <div
            className="md:w-full w-[19rem]  mx-auto h-[2px] border-b "
            style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
          ></div>

          {/* Beneficiary name */}
          <div className=" my-6">
            <form className="">
              <label className="text-[#4A5568] mr-auto text-sm ">
                Beneficiary Name
              </label>
              <div className="px-[10px] mt-2 h-[40px] md:w-[550px] border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
                <input
                  type="text"
                  value={namee}
                  onChange={(e) => setNamee(e.target.value)}
                  placeholder="Enter Beneficiary Name"
                  id="search"
                  className="font-normal w-full  h-8 outline-none"
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
              <label className="text-[#4A5568] text-sm ">
                Upload Beneficiary
              </label>
              <div className=" mx-auto items-center text-[#4A5568] justify-center w-full rounded border border-[#CBD5E0] border-dashed border-focus-within:outline outline-2 px-10">
                <img src={upload} alt="upload" className=" mx-auto mt-4" />
                <p className="text-center text-[14px]  font-light">
                  Drag and drop your files here
                </p>
                <div className="flex items-center mt-6">
                  <div className="flex-grow h-[1px] bg-[#718096] opacity-[0.4]"></div>
                  <div className="mx-4">or</div>
                  <div className="flex-grow h-[1px] bg-[#718096] opacity-[0.4]"></div>
                </div>
                <label className="bg-gray-200 flex mx-auto h-[32px] px-[12px] mt-9 text-[14px] items-center rounded-sm w-[107px] cursor-pointer">
                  Browse files
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    accept=".pdf, .doc, .docx"
                  />
                </label>
                <p className="text-xs flex justify-center my-4">
                  Max File size: 200mb
                </p>
              </div>
            </div>
          </div>

          <div className="my-2 pt-7 flex justify-start">
            <button
              className="bg-[#3B2774] text-white py-2 px-4 rounded"
              onClick={closeModal2}
            >
              Add Beneficiary
            </button>
          </div>
        </div>
      </Modal>
    );
  };
  // for the get Beneficiary template
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // for the add Beneficiary

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
        <p className="font-semibold tracking-wide ">Beneficiaries</p>
        <div className="flex items-center">
          <img src={man} alt="arrow" className="w-[24px] h-[24px] mr-3" />
          <img src={arrowdown} alt="man" className="w-[14px] h-[14px]" />
        </div>
      </div>

      {/* button */}
      <div className="flex ml-auto justify-end items-center mx-5  mt-8">
        <button
          className="bg-[#3B2774] h-[32px] w-[153px] rounded text-center text-white text-sm gap-8"
          onClick={openModal2}
        >
          Add Beneficiary List
        </button>
        <AddBeneficiary isOpen2={isModalOpen2} handleClose2={closeModal2} />
      </div>

      {/* centered image with text below */}
      <div className="flex flex-col items-center mt-[8rem]">
        <img src={computer} alt="" className="mb-4" />
        <p className="text-center text-[#1C065A] font-light tracking-wide text-[18px] sm:text-xl">
          No Beneficiaries added
        </p>
        <p className="text-center text-[#718096] font-light tracking-wide text-sm mx-3">
          {" "}
          You do not have any Beneficiaries. <br></br>
          Click the button below to get a template for beneficiaries
        </p>

        <div
          className="h-[48px] mt-4 rounded bg-white  sm:w-[251px] w-[200px] text-center flex items-center justify-center"
          style={{
            border: " 1px solid var(--Button-Background-Alternate, #3B2773)",
          }}
        >
          <button
            className="text-[#1C065A] text-[14px] sm:text-[16px]"
            onClick={openModal}
          >
            Get Beneficiary Template
          </button>
          <CustomModal isOpen={isModalOpen} handleClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Beneficiaries;
