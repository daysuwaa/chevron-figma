import React, { useState } from "react";
import DataTable from "react-data-table-component";

const Approvals = () => {
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
      name: "SCHEDULES ID",
      selector: (row) => (
        <div className="font-bold text-[#1C065A]"> {row.scheduleid}</div>
      ),
    },
    {
      name: "SCHEDULE NAME",
      selector: (row) => (
        <div className="text-[#1C065A]">{row.schedulename}</div>
      ),
    },
    {
      name: "RECIPIENTS",
      selector: (row) => (
        <div className="text-[#1C065A]"> {row.recipients}</div>
      ),
    },
    {
      name: "PAYOUTS",
      selector: (row) => (
        <div className=" font-bold text-[#1C065A]"> {row.payout}</div>
      ),
    },
    {
      name: "CREATED ON",
      selector: (row) => <div className="text-[#1C065A]"> {row.createdon}</div>,
    },

    {
      name: "STATUS",
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
                ? ["#38A169"]
                : row.status === "Inactive"
                ? ["#FF5655"]
                : "none",
            padding: "5px 16px 5px 15px",
            justifyContent: "center",
            borderRadius: "4px",
            textAlign: "center",
            width: "90px",
            height: "30px",
          }}
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
    </div>
  );
};

export default Approvals;
