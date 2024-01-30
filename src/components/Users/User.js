import React, { useState } from "react";
import close from "src/assets/IoCloseOutline.svg";
import DataTable from "react-data-table-component";

const Users = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  // State and functions for Deactivate Modal
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const openDeactivateModal = () => setIsDeactivateModalOpen(true);
  const closeDeactivateModal = () => setIsDeactivateModalOpen(false);
  const closeDeactivateModal1 = () => setIsDeactivateModalOpen(false);

  // State and functions for Reactivate Modal
  const [isReactivateModalOpen, setIsReactivateModalOpen] = useState(false);
  const openReactivateModal = () => setIsReactivateModalOpen(true);
  const closeReactivateModal = () => setIsReactivateModalOpen(false);
  const closeReactivateModal1 = () => setIsDeactivateModalOpen(false);
  const columns = [
    {
      name: <div className="font-bold text-[#4A5568]">NAME</div>,
      selector: (row) => (
        <div className="font-bold text-[#1C065A]"> {row.name}</div>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]">EMAIL ADDRESS</div>,
      selector: (row) => <div className="text-[#1C065A]">{row.email}</div>,
    },
    {
      name: <div className="font-bold text-[#4A5568]"> ROLE </div>,
      selector: (row) => <div className="text-[#1C065A]"> {row.role}</div>,
    },
    {
      name: <div className="font-bold text-[#4A5568]">LAST LOGIN</div>,
      selector: (row) => <div className="text-[#1C065A]"> {row.lastlogin}</div>,
    },

    {
      name: <div className="font-bold text-[#4A5568]">ACTIONS</div>,
      selector: (row) => (
        <div className="flex">
          <div
            style={{
              border: "1px solid #3B2773",
              color: "#3B2773",
              padding: " 4.6px",
              justifyContent: "center",
              borderRadius: "4px",
              textAlign: "center",
              width: "70px",
              height: "30px",
              marginRight: "10px", // Add margin between the two action components
            }}
            onClick={openEditModal} // Open modal on button click
            className="cursor-pointer"
          >
            {row.status1}
          </div>

          <div
            style={{
              border:
                row.status2 === "Reactivate"
                  ? "1px solid #38A169"
                  : row.status2 === "Deactivate"
                  ? "1px solid #FF5655"
                  : "none",
              color:
                row.status2 === "Reactivate"
                  ? ["#38A169"]
                  : row.status2 === "Deactivate"
                  ? ["#FF5655"]
                  : "none",
              padding: "5px 16px 5px 15px",
              justifyContent: "center",
              borderRadius: "4px",
              textAlign: "center",
              width: "80px",
              height: "30px",
              display: "flex",
            }}
            onClick={() => {
              if (row.status2 === "Deactivate") {
                openDeactivateModal(); // Call the deactivate function
              } else if (row.status2 === "Reactivate") {
                openReactivateModal(); // Call the reactivate function
              }
            }}
            className="cursor-pointer"
          >
            {row.status2}
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "Segun Abedayo",
      email: "segun.a@gmail.com",
      role: "Administrator",
      lastlogin: "13:45, 11 Sep 2023",
      status1: "Edit",
      status2: "Deactivate",
    },

    {
      id: 2,
      name: "Mark Chandler",
      email: "chandler@gmail.com",
      role: "Accountant",
      lastlogin: "13:45, 11 Sep 2023",
      status1: "Edit",
      status2: "Deactivate",
    },
    {
      id: 3,
      name: "Rey Mysterio",
      email: "mysterywwe@gmail.com",
      role: "Accountant",
      lastlogin: "13:45, 11 Sep 2023",
      status1: "Edit",
      status2: "Deactivate",
    },
    {
      id: 4,
      name: "Rhonda Rousey",
      email: "rowdy@gmail.com",
      role: "Auditor",
      lastlogin: "13:45, 11 Sep 2023",
      status1: "Edit",
      status2: "Reactivate",
    },
  ];
  return (
    <div
      className="mx-5"
      style={{ border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)" }}
    >
      <DataTable columns={columns} data={data} />
      {isEditModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full   bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded lg:w-[33rem] md:w-[30rem]">
            <div className="flex justify-center ">
              <p className="mx-auto  text-md font-semibold mb-2 text-[#4A5568]">
                Edit User
              </p>
              <button
                onClick={closeEditModal}
                className="cursor-pointer justify-end"
              >
                <img src={close} alt="close" className="cursor-pointer" />
              </button>
            </div>
            {/* lineee */}
            <div
              className="w-full h-[2px] border-b "
              style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
            ></div>
          </div>
        </div>
      )}

      {/* Deactivate Modal */}
      {isDeactivateModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded lg:w-[23rem] md:w-[20rem]">
            <div className="flex justify-center ">
              <p className=" mx-auto  text-md font-semibold mb-2 text-[#4A5568]">
                Deactivate User
              </p>
              <button
                onClick={closeDeactivateModal}
                className="cursor-pointer justify-end"
              >
                <img src={close} alt="close" className="cursor-pointer" />
              </button>
            </div>
            {/* lineee */}
            <div
              className="w-full h-[2px] border-b "
              style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
            ></div>
            <div className="pt-3">
              <p className="text-[#4A5568] text-center text-sm">
                Are you sure you want to deactivate this user?
              </p>
              <p className="text-[#4A5568] text-center text-sm mx-[2rem]">
                This action will immediately revoke all previously granted user
                privileges.
              </p>
              <button
                className="text-[#FF5655] mt-5 flex mx-auto w-[154px] h-[40px] rounded-sm  justify-center items-center"
                style={{ border: "1px solid #FF5655", padding: "0px 16px" }}
                onClick={closeDeactivateModal1}
              >
                Deactivate User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reactivate Modal */}
      {isReactivateModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded lg:w-[23rem] md:w-[20rem]">
            <div className="flex justify-center ">
              <p className=" mx-auto  text-md font-semibold mb-2 text-[#4A5568]">
                Reactivate User
              </p>
              <button
                onClick={closeReactivateModal}
                className="cursor-pointer justify-end"
              >
                <img src={close} alt="close" className="cursor-pointer" />
              </button>
            </div>
            {/* lineee */}
            <div
              className="w-full h-[2px] border-b "
              style={{ background: "var(--Color-Gray-Gray-40, #CBD5E0)" }}
            ></div>
            <div className="pt-3">
              <p className="text-[#4A5568] text-center text-sm">
                Are you sure you want to Reactivate this user?
              </p>
              <p className="text-[#4A5568] text-center text-sm mx-[2rem]">
                This action will immediately revoke all previously granted user
                privileges.
              </p>
              <button
                className="text-[#38A169] mt-5 flex mx-auto w-[154px] h-[40px] rounded-sm  justify-center items-center"
                style={{ border: "1px solid #38A169", padding: "0px 16px" }}
                onClick={closeReactivateModal1}
              >
                Reactivate User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
