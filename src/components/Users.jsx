import React from "react";
import man from "../assets/image 1.png";
import arrowdown from "../assets/FiChevronDown.svg";
import User from "../components/User";

const Users = () => {
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
        <button className="bg-[#3B2774] h-[32px] w-[123px] rounded text-center text-white text-sm gap-8">
          Add New User
        </button>
      </div>

      <User />
    </div>
  );
};

export default Users;
