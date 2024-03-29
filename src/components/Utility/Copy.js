import React from "react";
import toast, { Toaster } from "react-hot-toast";
import gtb from "src/assets/image 2.png";

const CopyToClipboard = () => {
  const handleCopyToClipboard = (textToCopy) => {
    toast("Copied to clipboard!", {
      id: "copyy",
    });

    if (navigator.clipboard) return navigator.clipboard.writeText(textToCopy);
    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = textToCopy;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    toast.success("Copied to clipboard!");
  };

  return (
    <div className="md:ml-2 mb-4 mx-5 md:mx:0 md:my:0">
      <button
        className="flex  bg-[#3B2773] px-[12px] h-10  rounded justify-center items-center text-white md:text-[13px] lg:text-[13px] sm:text-[13px] text-[10px]"
        onClick={() => handleCopyToClipboard("0422822151")}
      >
        <img src={gtb} alt="gtblogo" className="text-center pr-1" />
        04228221512
        <svg
          className="ml-1"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="IoCopyOutline">
            <path
              id="Vector (Stroke)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.33594 3.375C3.80523 3.375 3.375 3.80523 3.375 4.33594V9.53906C3.375 10.0698 3.80523 10.5 4.33594 10.5H9.53906C10.0698 10.5 10.5 10.0698 10.5 9.53906V4.33594C10.5 3.80523 10.0698 3.375 9.53906 3.375H4.33594ZM2.625 4.33594C2.625 3.39101 3.39101 2.625 4.33594 2.625H9.53906C10.484 2.625 11.25 3.39101 11.25 4.33594V9.53906C11.25 10.484 10.484 11.25 9.53906 11.25H4.33594C3.39101 11.25 2.625 10.484 2.625 9.53906V4.33594Z"
              fill="white"
            />
            <path
              id="Vector (Stroke)_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.62389 0.750003L2.625 0.75L7.68857 0.750002C8.13545 0.751275 8.56366 0.92936 8.87965 1.24535C9.19564 1.56134 9.37373 1.98956 9.375 2.43643L9.37492 2.44531L9.3632 3.00781C9.35889 3.21487 9.18753 3.37923 8.98047 3.37492C8.77341 3.37061 8.60905 3.19925 8.61336 2.99219L8.62498 2.43451C8.62321 2.18727 8.52422 1.95059 8.34932 1.77568C8.17357 1.59993 7.93545 1.50084 7.68692 1.5H2.62559C2.32739 1.50102 2.04168 1.61993 1.8308 1.8308C1.61993 2.04168 1.50102 2.32739 1.5 2.6256V7.68692C1.50084 7.93545 1.59993 8.17357 1.77568 8.34932C1.95143 8.52507 2.18957 8.62417 2.4381 8.625H3C3.20711 8.625 3.375 8.7929 3.375 9C3.375 9.20711 3.20711 9.375 3 9.375H2.4375L2.43643 9.375C1.98955 9.37373 1.56134 9.19564 1.24535 8.87965C0.929358 8.56366 0.751273 8.13545 0.750002 7.68857L0.75 7.6875V2.62389C0.751468 2.12736 0.949368 1.65158 1.30047 1.30047C1.65158 0.949369 2.12736 0.751471 2.62389 0.750003Z"
              fill="white"
            />
          </g>
        </svg>
      </button>
      <Toaster />
    </div>
  );
};

export default CopyToClipboard;
