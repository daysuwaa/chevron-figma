import React, { useState } from "react";
import DataTable from "react-data-table-component";
import DeactivateUserModal from "./DeactivateUserModal";
import ActivateScheduleModal from "./ActivateUserModal";

const Approvals = () => {
  const [isActiveModalOpen, setIsActiveModalOpen] = useState(false);
  const openActiveModal = () => setIsActiveModalOpen(true);
  const closeActiveModal = () => setIsActiveModalOpen(false);

  // State and functions for Reactivate Modal
  const [isInactiveModalOpen, setIsInactiveModalOpen] = useState(false);

  const openInactiveModal = () => setIsInactiveModalOpen(true);
  const closeInactiveModal = () => setIsInactiveModalOpen(false);

  const columns = [
    {
      name: <div className="font-bold text-[#4A5568]">SCHEDULE ID</div>,
      selector: (row) => (
        <div className="font-bold text-[#1C065A]"> {row.scheduleid}</div>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]">SCHEDULE NAME</div>,
      selector: (row) => (
        <div className="text-[#1C065A]">{row.schedulename}</div>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]">RECIPIENTS</div>,
      selector: (row) => (
        <div className="text-[#1C065A]"> {row.recipients}</div>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]">PAYOUTS</div>,
      selector: (row) => (
        <div className=" font-bold text-[#1C065A]"> {row.payout}</div>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]">CREATED ON</div>,
      selector: (row) => <div className="text-[#1C065A]"> {row.createdon}</div>,
    },

    {
      name: <div className="font-bold text-[#4A5568]">STATUS</div>,
      selector: (row) => (
        <div
          style={{
            border:
              row.status === "Active"
                ? "1px solid #38A169"
                : row.status === "Inactive"
                ? "1px solid #FF5655"
                : "none",
            color:
              row.status === "Active"
                ? "#38A169"
                : row.status === "Inactive"
                ? "#FF5655"
                : "none",
            padding: "5px 16px 5px 10px",
            justifyContent: "center",
            borderRadius: "4px",
            textAlign: "center",
          }}
          onClick={() => {
            if (row.status === "Inactive") {
              openInactiveModal(); // Call the deactivate function
            } else if (row.status === "Active") {
              openActiveModal(); // Call the reactivate function
            }
          }}
          className="cursor-pointer"
        >
          {row.status}
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      scheduleid: "BLPID000133B31",
      schedulename: "Lekki Branch Salaries",
      recipients: "120",
      payout: "N250,000.00",
      createdon: "13:45, 11 Sep 2023",
      status: "Active",
    },

    {
      id: 2,
      scheduleid: "BLPID000133B32",
      schedulename: "Yaba Branch Salaries",
      recipients: "90",
      payout: "N250,000.00",
      createdon: "13:45, 11 Sep 2023",
      status: "Active",
    },
    {
      id: 3,
      scheduleid: "BLPID000133B33",
      schedulename: "Drivers & Cleaners",
      recipients: "83",
      payout: "N250,000.00",
      createdon: "13:45, 11 Sep 2023",
      status: "Active",
    },
    {
      id: 4,
      scheduleid: "BLPID000133B34",
      schedulename: "Escort Payments",
      recipients: "12",
      payout: "N250,000.00",
      createdon: "13:45, 11 Sep 2023",
      status: "Inactive",
    },
  ];
  return (
    <div
      className="mx-5"
      style={{ border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)" }}
    >
      <DataTable columns={columns} data={data} />
      <>
        <DeactivateUserModal
          isActiveModalOpen={isActiveModalOpen}
          closeActiveModal={closeActiveModal}
        />
      </>
      <div>
        <ActivateScheduleModal
          isInactiveModalOpen={isInactiveModalOpen}
          closeInactiveModal={closeInactiveModal}
        />
      </div>
    </div>
  );
};

export default Approvals;
