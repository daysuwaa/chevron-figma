import React, { useState } from "react";
import close from "../assets/IoCloseOutline.svg";
import DataTable from "react-data-table-component";

const Approvals = () => {
  const [isActivateModalOpen, setIsActivateModalOpen] = useState(false);
  const openActiveModal = () => setIsActivateModalOpen(true);
  const closeActiveModal = () => setIsActivateModalOpen(false);
  const closeActivateModal1 = () => setIsActivateModalOpen(false);

  // State and functions for Reactivate Modal
  const [isInactiveModalOpen, setIsInactiveModalOpen] = useState(false);
  const openInactiveModal = () => setIsInactiveModalOpen(true);
  const closeInactiveModal = () => setIsInactiveModalOpen(false);
  const closeInactiveModal1 = () => setIsInactiveModalOpen(false);
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
          onClick={() => {
            if (row.status2 === "Inactive") {
              openInactiveModal(); // Call the deactivate function
            } else if (row.status2 === "Activate") {
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
      {isInactiveModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded lg:w-[23rem] md:w-[20rem]">
            <div className="flex justify-center ">
              <p className=" mx-auto  text-md font-semibold mb-2 text-[#4A5568]">
                Deactivate User
              </p>
              <button
                onClick={closeInactiveModal}
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
                onClick={closeInactiveModal1}
              >
                Deactivate User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Approvals;
