import React from "react";

const EditUserModal = ({ isEditModalOpen, closeEditModal }) => {
  return (
    isEditModalOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded lg:w-[33rem] md:w-[30rem]">
          <div className="flex justify-center">
            <p className="mx-auto text-md font-semibold  text-[#4A5568]">
              Edit User
            </p>
            <button
              onClick={closeEditModal}
              className="cursor-pointer justify-end"
            >
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L12 10.9393L16.7197 6.21967C17.0126 5.92678 17.4874 5.92678 17.7803 6.21967C18.0732 6.51256 18.0732 6.98744 17.7803 7.28033L13.0607 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L12 13.0607L7.28033 17.7803C6.98744 18.0732 6.51256 18.0732 6.21967 17.7803C5.92678 17.4874 5.92678 17.0126 6.21967 16.7197L10.9393 12L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z"
                    fill="#4A5568"
                  />
                </g>
              </svg>
            </button>
          </div>
          {/* lineee */}
          <hr className="h-[2px] border-b bg-[#CBD5E0]"></hr>
        </div>
      </div>
    )
  );
};

export default EditUserModal;
