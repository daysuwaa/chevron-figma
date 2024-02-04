import React, { useState } from "react";
import close from "src/assets/IoCloseOutline.svg";
// import upload from "src/assets/IoCloudUploadOutline.svg";
import Modal from "react-modal";
import ToggleButton from "../Stuff/ToggleButton";

const Schedules = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const openModal3 = () => setIsModalOpen3(true);
  const closeModal3 = () => setIsModalOpen3(false);

  const CustomModal = ({
    isOpen,
    handleClose,
    modalTitle,
    buttonText,
    handleButtonClick,
  }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        contentLabel={modalTitle}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "40%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -40%)",
            padding: "2rem",
            margin: "2rem",
            backgroundColor: "#fff",
            border: "1px solid var(--Button-Background-Alternate, #3B2773)",
          },
        }}
      >
        <div className="flex items-center lg:w-[35rem] md:w-[30rem] w-[14rem]">
          <h2 className="text-md text-[#4A5568] mx-auto mb-4 font-semibold">
            {modalTitle}
          </h2>
          <button onClick={handleClose} className="text-gray-600">
            <img src={close} alt="close" />
          </button>
        </div>
        <div
          className="w-full h-[2px] border-b "
          style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
        ></div>
        <div className="mt-4 flex">
          <p className="text-[#4A5568] text-sm mt-4">
            Use existing Schedule list?
          </p>
          <div className="ml-auto  mt-4">
            <ToggleButton className="justify-end" />
          </div>
        </div>
        <div className="my-2 pt-7 flex justify-start">
          <button
            className="bg-[#3B2774] text-white py-2 px-4 rounded"
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </Modal>
    );
  };
};
// part 2
//   const [namee, setNamee] = useState("");
//   const handleFileUpload = (e) => {
//     const selectedFiles = e.target.files;
//     console.log(selectedFiles);
//   };
//   const CustomModal2 = ({
//     isOpen,
//     handleClose,
//     modalTitle,
//     handleButtonClick,
//   }) => {
//     return (
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={handleClose}
//         contentLabel={modalTitle}
//         shouldCloseOnOverlayClick={false}
//         style={{
//           overlay: {
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           },
//           content: {
//             top: "40%",
//             left: "50%",
//             right: "auto",
//             bottom: "auto",
//             marginRight: "-50%",
//             transform: "translate(-50%, -40%)",
//             padding: "2rem",
//             margin: "2rem",
//             backgroundColor: "#fff",
//             border: "1px solid var(--Button-Background-Alternate, #3B2773)",
//           },
//         }}
//       >
//         <div className="mt-5">
//           <div className="flex items-center ">
//             <h2 className="text-md text-[#4A5568] mx-auto mb-4 font-semibold">
//               Add New Schedule
//             </h2>
//             <button onClick={handleButtonClick} className="text-gray-600">
//               <img src={close} alt="close" className="mb-2" />
//             </button>
//           </div>
//           {/* lineee */}
//           <div
//             className="md:w-full w-[19rem]  mx-auto h-[2px] border-b "
//             style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
//           ></div>

//           {/* schedule name */}
//           <div className=" my-6">
//             <form>
//               <label
//                 htmlFor="schedulename"
//                 className="text-[#4A5568] mr-auto text-sm "
//               >
//                 Schedule Name
//               </label>
//               <div className="px-[10px] mt-1 h-[40px] md:w-[550px] border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
//                 <input
//                   type="text"
//                   value={namee}
//                   onChange={(e) => setNamee(e.target.value)}
//                   placeholder="Enter Schedule Name"
//                   id="schedulename"
//                   className="font-normal w-full  h-8 outline-none"
//                   style={{
//                     color: "#718096",
//                     fontSize: "14px",
//                   }}
//                 />
//               </div>
//             </form>
//           </div>

{
  /* <div className="my-6">
            <div className="md:mx-auto">
              <label className="text-[#4A5568] text-sm ">Upload Schedule</label>
              <div className=" mx-auto items-center mt-1 text-[#4A5568] justify-center w-full rounded border border-[#CBD5E0] border-dashed border-focus-within:outline outline-2 px-10">
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
                    className="hidden "
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

          <button
            className="bg-[#3B2774] my-2 flex justify-start text-white py-2 px-4 rounded opacity-20"
            onClick={closeModal2}
          >
            Add Schedule
          </button>
        </div>
      </Modal>
    );
  }; */
}

//   return (
// <div className="bg-[#F6F6F6] h-full">
{
  /* <div
        className="flex px-[32px] py-[18px] justify-between h-[60px]"
        style={{ background: "#fff" }}
      >
        <p className="font-semibold tracking-wide ">Schedules</p>
        <div className="flex items-center">
          <img src={man} alt="arrow" className="w-[24px] h-[24px] mr-3" />
          <img src={arrowdown} alt="man" className="w-[14px] h-[14px]" />
        </div>
      </div>

      <div className="flex ml-auto justify-end items-center mx-5 md:px-[10px] mt-8">
        <button
          className="bg-[#3B2774] h-[32px] w-[153px] rounded text-center text-white text-sm gap-8"
          onClick={openModal2}
        >
          Add New Schedule
        </button>
      </div>

      <div className="flex flex-col items-center mt-[8rem]">
        <img src={computer} alt="" className="mb-4" />
        <p className="text-center text-[#1C065A] font-light tracking-wide text-xl">
          No schedules created
        </p>
        <p className="text-center text-[#718096] font-light tracking-wide text-sm mx-3">
          You do not have any schedules.
          <br />
          Click the button below to generate a template for one
        </p>
        <button
          className="h-[48px] text-[#1C065A] text-[14px] sm:text-[16px] mt-4 rounded bg-white  sm:w-[251px] w-[200px] text-center flex items-center justify-center"
          style={{
            border: " 1px solid var(--Button-Background-Alternate, #3B2773)",
          }}
          onClick={openModal3}
        >
          Get Schedule Template
        </button> */
}

//         <CustomModal
//           isOpen={isModalOpen}
//           handleClose={closeModal}
//           modalTitle="Get Schedule Template"
//           buttonText="Get Template"
//           handleButtonClick={closeModal}
//         />

//         <CustomModal2
//           isOpen={isModalOpen2}
//           handleClose={closeModal2}
//           modalTitle="Add New Schedule"
//           buttonText="Add Schedule"
//           handleButtonClick={closeModal2}
//         />

//         <CustomModal
//           isOpen={isModalOpen3}
//           handleClose={closeModal3}
//           modalTitle="Get Schedule Template"
//           buttonText="Get Template"
//           handleButtonClick={closeModal3}
//         />
//       </div>
//     </div>
//   );
// };

export default Schedules;
