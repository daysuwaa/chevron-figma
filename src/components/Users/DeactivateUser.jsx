import React from "react";

const DeactivateUserModal = ({
  isDeactivateModalOpen,
  closeDeactivateModal,
  deactivateUser, // to deactivate the userrr!
}) => {
  return (
    isDeactivateModalOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded w-[20rem] lg:w-[23rem] md:w-[20rem]">
          <div className="flex justify-center">
            <p className="mx-auto text-md font-semibold mb-2 text-[#4A5568]">
              Deactivate User
            </p>
            <button
              onClick={closeDeactivateModal}
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
          <hr
            className="w-full h-[2px] border-b "
            style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
          />
          <div className="pt-3">
            <p className="text-[#4A5568] text-center text-sm">
              Are you sure you want to deactivate this user?
            </p>
            <p className="text-[#4A5568] text-center text-sm">
              This action will immediately revoke all previously granted user
              privileges.
            </p>
            <button
              className="text-[#FF5655] mt-5 flex mx-auto w-[154px] h-[40px] rounded-sm  justify-center items-center"
              style={{ border: "1px solid #FF5655", padding: "0px 16px" }}
              onClick={() => {
                deactivateUser(); // Call the function to deactivate the user
                closeDeactivateModal(); // Close the modal
              }}
            >
              Deactivate User
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeactivateUserModal;
