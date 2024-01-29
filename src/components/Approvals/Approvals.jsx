import React from "react";
import man from "src/assets/image 1.png";
import arrowdown from "src/assets/FiChevronDown.svg";
import search from "src/assets/CkSearch.svg";
import filter from "src/assets/FiFilter.svg";
import Approval from "./Approval";

const Approvals = () => {
  return (
    <div>
      {/* navbar */}
      <div
        className="flex px-[32px] py-[18px] justify-between h-[60px]"
        style={{ background: "#fff" }}
      >
        <p className="font-semibold tracking-wide ">Approvals</p>
        <div className="flex items-center">
          <img src={man} alt="arrow" className="w-[24px] h-[24px] mr-3" />
          <img src={arrowdown} alt="man" className="w-[14px] h-[14px]" />
        </div>
      </div>
      {/* end of nav */}

      {/* search thingyy */}
      <div className="md:flex pt-8">
        <div className="px-[20px] mx-5 py-[6px] flex md:w-[320px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
          <img src={search} alt="searchicon" className="w-[16px]" />
          <input
            type="text"
            placeholder="Search by Payment Id"
            id="search"
            className="font-light w-[320px] h-8 outline-none"
            style={{
              color: "#718096",
              fontSize: "14px",
              marginLeft: "6px",
              backgroundColor: "#F6F6F6",
            }}
          />
        </div>
        <div
          className="px-[20px] py-[12px] mx-5 mt-3 md:mx-0 md:mt-0 flex w-[100px] "
          style={{
            borderRadius: "4px",
            border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)",
          }}
        >
          <img
            src={filter}
            alt="searchicon"
            className="w-[16px] h-[16px] mt-1"
          />
          <p
            className="font-light"
            style={{
              color: "var(--Color-Gray-Gray-60, #718096)",
              fontSize: "14px",
              marginLeft: "6px",
            }}
          >
            Filter
          </p>
        </div>
      </div>

      <div
        className="w-full border-b mt-4"
        style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
      ></div>

      {/* imported the file approval */}
      <Approval />

      {/* end of code */}
    </div>
  );
};

export default Approvals;
