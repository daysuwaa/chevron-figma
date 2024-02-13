// AddScheduleModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import excel from "src/assets/image 3.png";
import close from "src/assets/IoCloseOutline.svg";

import { Link } from "react-router-dom";

const OrX = () => (
  <div className="flex items-center mt-6">
    <div className="flex-grow h-[1px] bg-[#718096] opacity-[0.4]"></div>
    <div className="mx-4">or</div>
    <div className="flex-grow h-[1px] bg-[#718096] opacity-[0.4]"></div>
  </div>
);

const UploadDrop = ({ uploadHandler }) => (
  <div className="mx-auto items-center mt-1 text-[#4A5568] justify-center w-full rounded border border-[#CBD5E0] border-dashed border-focus-within:outline outline-2 px-10">
    <svg
      className="mx-auto mt-4"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="IoCloudUploadOutline">
        <path
          id="Vector (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.26944 8.7706C8.47508 5.79833 11.4949 2.98682 16 2.98682C20.847 2.98682 24.978 6.28468 25.8837 11.6215C27.1626 11.8129 28.5016 12.3027 29.6041 13.1217C30.9745 14.1397 32 15.6907 32 17.7618C32 19.7699 31.1545 21.3675 29.7781 22.4384C28.4289 23.4881 26.6332 23.9868 24.75 23.9868H20C19.4477 23.9868 19 23.5391 19 22.9868C19 22.4345 19.4477 21.9868 20 21.9868H24.75C26.3043 21.9868 27.6336 21.5728 28.55 20.8598C29.4392 20.168 30 19.1531 30 17.7618C30 16.4335 29.3693 15.4387 28.4115 14.7272C27.4291 13.9975 26.127 13.5939 24.9505 13.5356C24.4579 13.5112 24.0567 13.1313 24.0054 12.6408C23.5016 7.8202 20.0369 4.98682 16 4.98682C12.188 4.98682 9.75081 7.50157 8.95225 9.99214C8.83012 10.373 8.49277 10.6445 8.09457 10.6823C4.6486 11.0097 2 13.1312 2 16.3368C2 19.5595 4.7847 21.9868 8.5 21.9868H12C12.5523 21.9868 13 22.4345 13 22.9868C13 23.5391 12.5523 23.9868 12 23.9868H8.5C3.9653 23.9868 0 20.9291 0 16.3368C0 11.9693 3.45781 9.36004 7.26944 8.7706Z"
          fill="#718096"
        />
        <path
          id="Vector (Stroke)_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.2929 11.2797C15.6834 10.8892 16.3166 10.8892 16.7071 11.2797L20.7071 15.2797C21.0976 15.6702 21.0976 16.3034 20.7071 16.6939C20.3166 17.0844 19.6834 17.0844 19.2929 16.6939L17 14.401V28.0131C17 28.5653 16.5523 29.0131 16 29.0131C15.4477 29.0131 15 28.5653 15 28.0131V14.401L12.7071 16.6939C12.3166 17.0844 11.6834 17.0844 11.2929 16.6939C10.9024 16.3034 10.9024 15.6702 11.2929 15.2797L15.2929 11.2797Z"
          fill="#718096"
        />
      </g>
    </svg>

    <p className="text-center text-[14px] font-light">
      Drag and drop your files here
    </p>
    <OrX />
    <button
      onClick={uploadHandler}
      className="bg-gray-200 flex mx-auto h-[32px] px-[12px] mt-9 text-[14px] items-center rounded-sm cursor-pointer"
    >
      Browse files
    </button>
    <p className="text-xs flex justify-center my-4">Max File size: 200mb</p>
  </div>
);

const ScheduleUploader = ({ scheduleFile, setScheduleFile }) => {
  const uploadHandler = () => {
    const fileHolder = document.createElement("input");
    document.body.appendChild(fileHolder);
    fileHolder.setAttribute("type", "file");
    fileHolder.setAttribute("accept", ".csv,.xls,.xlsx");
    fileHolder.style.display = "none";

    fileHolder.addEventListener("change", (e) => {
      const files = e.target.files;
      const file = files[0];

      setScheduleFile(file);
    });

    fileHolder.click();
    document.body.removeChild(fileHolder);
  };

  return (
    <div className="my-5">
      <div className="md:mx-auto">
        <label className="text-[#4A5568] text-sm pb-2 block">
          Upload Schedule
        </label>
        {scheduleFile ? (
          <div>
            <div className="flex items-center">
              <img src={excel} alt="upload"></img>
              <div className="text-[#4A5568] text-xs mx-2">
                {scheduleFile.name}
              </div>
            </div>
            <button
              onClick={() => setScheduleFile(null)}
              className="text-[#4A5568] text-sm block mt-2 underline"
            >
              Choose a different file
            </button>
          </div>
        ) : (
          <UploadDrop {...{ uploadHandler }} />
        )}
      </div>
    </div>
  );
};

const AddScheduleModal = ({
  isOpen,
  handleClose,
  modalTitle,
  name,
  namee,
  setName,
}) => {
  const [scheduleFile, setScheduleFile] = useState(null);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel={modalTitle}
      shouldCloseOnOverlayClick={false}
      className="absolute top-1/2 md:left-1/2 left-[43%] transform -translate-x-1/2 bg-white -translate-y-1/2 p-[2rem] m-[2rem]"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="mt-5">
        <div className="flex items-center">
          <h2 className="text-md text-[#4A5568] mx-auto mb-2 font-semibold">
            {modalTitle}
          </h2>
          <button onClick={handleClose} className="text-gray-600">
            <img src={close} alt="close" className="mb-2" />
          </button>
        </div>
        <div
          className="md:w-full w-[19rem] mx-auto h-[2px] border-b"
          style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
        ></div>
        <div className="my-6">
          <form>
            <label
              htmlFor="schedulename"
              className="text-[#4A5568] mr-auto text-sm pb-2 block"
            >
              {namee}
            </label>
            <div className="px-[10px] items-center  flex h-[40px] md:w-[550px] border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Schedule Name"
                id="schedulename"
                className="font-normal w-full outline-none"
                style={{
                  color: "#718096",
                  fontSize: "14px",
                }}
              />
            </div>
          </form>
        </div>
        <ScheduleUploader {...{ scheduleFile, setScheduleFile }} />

        <Link
          to="/schedules/table"
          className={`bg-[#3B2774] my-2 flex justify-start text-white py-2 px-4 max-w-fit rounded ${
            scheduleFile ? "" : "pointer-events-none opacity-20 select-none"
          }`}
        >
          Add Schedule
        </Link>
      </div>
    </Modal>
  );
};

export default AddScheduleModal;
