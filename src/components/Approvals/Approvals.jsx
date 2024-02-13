import React from "react";
import Navbar from "../Layout/Navbar";
import Approval from "./Approval";

const Approvals = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar title="Approvals" />
      {/* end of nav */}
      {/* search thingyy */}
      <div className="md:flex pt-8">
        <div className="px-[20px] items-center mx-5 py-[6px] flex md:w-[320px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="CkSearch" clipPath="url(#clip0_1052_442)">
              <path
                id="Vector"
                d="M15.5895 14.4126L11.2368 10.06C12.1869 8.81104 12.6271 7.24788 12.4684 5.68671C12.3097 4.12555 11.5639 2.68294 10.382 1.65074C9.20005 0.618553 7.67016 0.0738449 6.10184 0.126823C4.53352 0.1798 3.04388 0.826508 1.93428 1.93611C0.824677 3.04571 0.177969 4.53535 0.124991 6.10367C0.0720139 7.67199 0.616722 9.20188 1.64891 10.3838C2.68111 11.5658 4.12371 12.3115 5.68488 12.4702C7.24605 12.6289 8.80921 12.1887 10.0581 11.2386L14.4108 15.5913C14.5684 15.745 14.7799 15.8311 15.0001 15.8311C15.2203 15.8311 15.4318 15.745 15.5895 15.5913C15.7456 15.4349 15.8333 15.2229 15.8333 15.002C15.8333 14.781 15.7456 14.569 15.5895 14.4126ZM1.83346 6.33329C1.83346 5.44327 2.09738 4.57324 2.59184 3.83322C3.08631 3.0932 3.78911 2.51642 4.61138 2.17583C5.43365 1.83523 6.33845 1.74612 7.21136 1.91975C8.08428 2.09339 8.8861 2.52197 9.51544 3.15131C10.1448 3.78064 10.5734 4.58247 10.747 5.45538C10.9206 6.32829 10.8315 7.23309 10.4909 8.05536C10.1503 8.87763 9.57354 9.58043 8.83352 10.0749C8.0935 10.5694 7.22347 10.8333 6.33346 10.8333C5.14041 10.8319 3.99664 10.3573 3.15303 9.51371C2.30943 8.6701 1.83487 7.52633 1.83346 6.33329Z"
                fill="#718096"
              />
            </g>
            <defs>
              <clipPath id="clip0_1052_442">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <input
            type="text"
            placeholder="Search by Approval Id"
            id="searchypay"
            className="font-light w-[320px] h-8 outline-none"
            style={{
              color: "#718096",
              fontSize: "14px",
              marginLeft: "6px",
              backgroundColor: "#F6F6F6",
            }}
          />
        </div>
        <div className="px-[20px] rounded border border-[#CBD5E0]  items-center py-[12px] mx-5 mt-3 md:mx-0 md:mt-0 flex w-[100px] ">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="FiFilter">
              <path
                id="Vector (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.728678 1.71933C0.837917 1.48389 1.07387 1.33325 1.33342 1.33325H14.6668C14.9263 1.33325 15.1623 1.48389 15.2715 1.71933C15.3807 1.95478 15.3434 2.23222 15.1758 2.4304L10.0001 8.55068V13.9999C10.0001 14.231 9.88046 14.4455 9.68391 14.567C9.48737 14.6885 9.24194 14.6995 9.03528 14.5962L6.36861 13.2629C6.14276 13.1499 6.00009 12.9191 6.00009 12.6666V8.55068L0.824377 2.4304C0.656779 2.23222 0.61944 1.95478 0.728678 1.71933ZM2.77029 2.66659L7.1758 7.8761C7.27758 7.99645 7.33342 8.14897 7.33342 8.30659V12.2546L8.66676 12.9212V8.30659C8.66676 8.14897 8.7226 7.99645 8.82438 7.8761L13.2299 2.66659H2.77029Z"
                fill="#718096"
              />
            </g>
          </svg>

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
