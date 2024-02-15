import React, { useState } from "react";
import DeactivateUserModal from "./DeactivateUser";
import ReactivateUserModal from "./ReactivateUser";
import EditUserModal from "./EditUserModal";
import DataTable from "react-data-table-component";

const Users = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  // State and functions for Reactivate Modal
  const [isReactivateModalOpen, setIsReactivateModalOpen] = useState(false);
  // Function to open the modal
  const openReactivateModal = () => setIsReactivateModalOpen(true);
  // Function to close the modal
  const closeReactivateModal = () => setIsReactivateModalOpen(false);

  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);

  const openDeactivateModal = () => setIsDeactivateModalOpen(true);
  const closeDeactivateModal = () => setIsDeactivateModalOpen(false);

  const columns = [
    {
      name: <div className="font-bold text-[#4A5568]">NAME</div>,
      selector: (row) => (
        <div
          className="font-bold text-[#1C065A]"
          style={{ opacity: row.status2 === "Reactivate" ? 0.5 : 1 }}
        >
          {row.name}
        </div>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]">EMAIL ADDRESS</div>,
      selector: (row) => (
        <div
          className="text-[#1C065A]"
          style={{ opacity: row.status2 === "Reactivate" ? 0.5 : 1 }}
        >
          {row.email}
        </div>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]"> ROLE </div>,
      selector: (row) => (
        <div
          className="text-[#1C065A]"
          style={{ opacity: row.status2 === "Reactivate" ? 0.5 : 1 }}
        >
          {row.role}
        </div>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]">LAST LOGIN</div>,
      selector: (row) => (
        <div
          className="text-[#1C065A]"
          style={{ opacity: row.status2 === "Reactivate" ? 0.5 : 1 }}
        >
          {row.lastlogin}
        </div>
      ),
    },

    {
      name: <div className="font-bold text-[#4A5568]">ACTIONS</div>,
      selector: (row) => (
        <div className="flex">
          <div
            style={{
              border: "1px solid #3B2773",
              color: "#3B2773",
              padding: "0px 8px",
              alignItems: "center",
              display: "flex",
              borderRadius: "4px",
              textAlign: "center",
              marginRight: "10px",
              flexShrink: "0",
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
              display: "flex",
              flexShrink: "0",
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

      <EditUserModal
        isEditModalOpen={isEditModalOpen}
        closeEditModal={closeEditModal}
      />

      <DeactivateUserModal
        isDeactivateModalOpen={isDeactivateModalOpen}
        closeDeactivateModal={closeDeactivateModal}
      />
      {/* Reactivate Modal */}
      <ReactivateUserModal
        isReactivateModalOpen={isReactivateModalOpen}
        closeReactivateModal={closeReactivateModal}
      />
    </div>
  );
};

export default Users;
