import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import User from "./User";
import Modal from "react-modal";

const Users = () => {
  const CustomModal = ({ isOpen, handleClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const handleChange = (event) => {
      setRole(event.target.value);
    };

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={false}
        className="absolute rounded top-1/2 left-[43%] md:left-1/2 w-[350px] md:w-[640px] transform -translate-x-1/2 bg-white -translate-y-1/2 p-[2rem] m-[2rem]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="flex justify-between items-center ">
          <h2 className="text-md  text-[#4A5568] mx-auto mb-2 font-semibold">
            Add New User
          </h2>

          <button onClick={handleClose} className="text-gray-600">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="IoCloseOutline">
                <path
                  id="Vector (Stroke)"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L12 10.9393L16.7197 6.21967C17.0126 5.92678 17.4874 5.92678 17.7803 6.21967C18.0732 6.51256 18.0732 6.98744 17.7803 7.28033L13.0607 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L12 13.0607L7.28033 17.7803C6.98744 18.0732 6.51256 18.0732 6.21967 17.7803C5.92678 17.4874 5.92678 17.0126 6.21967 16.7197L10.9393 12L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z"
                  fill="#4A5568"
                />
              </g>
            </svg>
          </button>
        </div>
        {/* lineee */}
        <hr className=" h-[2px] border-b bg-[#CBD5E0] "></hr>

        {/* the formsss */}
        {/* #full name */}

        <div className="my-6">
          <form>
            <label html="full-name" className="text-[#4A5568] text-sm ">
              Full Name
            </label>
            <div className="px-[10px] items-center h-[40px] mt-2 flex rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Full Name"
                id="full-name"
                className="font-normal w-[320px]  outline-none text-[#718096] text-[16px]"
              />
            </div>
          </form>
        </div>
        {/* #2 email adress */}
        <div className="my-6">
          <form>
            <label htmlFor="email-add" className="text-[#4A5568] text-sm ">
              Email Address
            </label>
            <div className="px-[10px] items-center h-[40px] mt-2 flex  rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                id="email-add"
                className="font-normal w-[320px] text-[#718096] text-[16px] outline-none text-lg"
              />
            </div>
          </form>
        </div>
        {/* #3 password */}
        <div className="my-6">
          <form>
            <label htmlFor="password-add" className="text-[#4A5568] text-sm ">
              Password
            </label>
            <div className="px-[10px] items-center h-[40px] mt-2 flex  rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                id="password-add"
                className="font-normal w-[320px]  outline-none text-[#718096] text-[16px]"
              />
            </div>
          </form>
        </div>
        {/* role */}
        <div className="my-6">
          <form>
            <label className="flex text-[#4A5568] text-sm" htmlFor="rolee">
              Role
            </label>

            <div className="px-[0px] items-center h-[40px] flex mt-2  rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <select
                id="rolee"
                value={role}
                className="outline-none w-full "
                onChange={handleChange}
                placeholder="Selext Role"
              >
                <option value="admin">Administration</option>
                <option value="Volvo">Accountant</option>
                <option value="Fiat">Auditor</option>
              </select>
            </div>
          </form>
          <button className="bg-[#3B2774] h-[40px] w-[123px] rounded text-center text-white text-[16px] mt-9">
            Create User
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
      <Navbar title="Users" />

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
