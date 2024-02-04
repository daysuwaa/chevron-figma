import React, { useState } from "react";
import man from "src/assets/image 1.png";
import arrowdown from "src/assets/FiChevronDown.svg";
import User from "./User";
import Modal from "react-modal";
import close from "src/assets/IoCloseOutline.svg";
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
      // background: "black",
      // opacity: "0.2",
      // backgroundColor: "#000",
      // opacity: "0.5",
    },
  };
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
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=" ">
          <div className="flex justify-between items-center lg:w-[35rem] md:w-[30rem] w-full">
            <h2 className="text-md  text-[#4A5568] mx-auto mb-4 font-semibold">
              Add New User
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

          {/* the formsss */}
          {/* #full name */}

          <div className="my-6">
            <form>
              <label html="fname" className="text-[#4A5568] text-sm ">
                Full Name
              </label>
              <div className="px-[10px] items-center h-[40px] flex w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Full Name"
                  id="fname"
                  className="font-normal w-[320px] h-8 outline-none"
                  style={{
                    color: "#718096",
                    fontSize: "16px",
                  }}
                />
              </div>
            </form>
          </div>
          {/* #2 email adress */}
          <div className="my-6">
            <form>
              <label htmlFor="emailll" className="text-[#4A5568] text-sm ">
                Email Address
              </label>
              <div className="px-[10px] items-center h-[40px] flex w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  id="emailll"
                  className="font-normal w-[320px] h-8 outline-none text-lg"
                  style={{
                    color: "#718096",
                    fontSize: "16px",
                  }}
                />
              </div>
            </form>
          </div>
          {/* #3 password */}
          <div className="my-6">
            <form>
              <label htmlFor="password" className="text-[#4A5568] text-sm ">
                Password
              </label>
              <div className="px-[10px] items-center h-[40px] flex w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  id="passwordd"
                  className="font-normal w-[320px] h-8 outline-none"
                  style={{
                    color: "#718096",
                    fontSize: "16px",
                  }}
                />
              </div>
            </form>
          </div>
          {/* role */}
          <div className="my-6">
            <form>
              <label className="flex text-[#4A5568] text-sm mb-2">Role</label>

              <div className="px-[0px] items-center h-[40px] flex w-[566px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
                <select
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
            <button
              className="bg-[#3B2774] h-[40px] w-[123px] rounded text-center text-white text-[16px] mt-9"
              onClick={{}}
            >
              Create User
            </button>
          </div>
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
