import React, { useState } from "react";
import close from "src/assets/IoCloseOutline.svg";
import DataTable from "react-data-table-component";

const Approvals = () => {
  const [isActiveModalOpen, setIsActiveModalOpen] = useState(false);
  const openActiveModal = () => setIsActiveModalOpen(true);
  const closeActiveModal = () => setIsActiveModalOpen(false);
  const closeActiveModal1 = () => setIsActiveModalOpen(false);

  // State and functions for Reactivate Modal
  const [isInactiveModalOpen, setIsInactiveModalOpen] = useState(false);
  const openInactiveModal = () => setIsInactiveModalOpen(true);
  const closeInactiveModal = () => setIsInactiveModalOpen(false);
  const closeInactiveModal1 = () => setIsInactiveModalOpen(false);

  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
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
                ? "#38A169"
                : row.status === "Inactive"
                ? "#FF5655"
                : "none",
            padding: "5px 16px 5px 15px",
            justifyContent: "center",
            borderRadius: "4px",
            textAlign: "center",
            width: "90px",
            height: "30px",
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
      {isActiveModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded lg:w-[23rem] md:w-[20rem]">
            <div className="flex justify-center ">
              <p className=" mx-auto  text-md font-semibold mb-2 text-[#4A5568]">
                Deactivate User
              </p>
              <button
                onClick={closeActiveModal}
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
                Are you sure you want to Deactivate this user?
              </p>
              <p className="text-[#4A5568] text-center text-sm mx-[2rem]">
                The payouts defined will cease to take effect immediately
              </p>
              {/* formsss */}

              {/* #3 password */}
              <div className="my-6">
                <form>
                  <label className="text-[#4A5568] text-sm ">
                    Password
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mb-2"
                    />
                  </label>
                  <div className="px-[10px] items-center h-[40px] flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
                    <input
                      type="text"
                      placeholder="Enter Password"
                      id="search"
                      className="font-normal w-[320px] h-8 outline-none"
                      style={{
                        color: "#718096",
                        fontSize: "16px",
                      }}
                    />
                  </div>
                </form>
              </div>
              <div className="my-6">
                <form>
                  <label className="text-[#4A5568] text-sm ">
                    2FA Token
                    <input
                      type="text"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      className="mb-2"
                    />
                  </label>
                  <div className="px-[10px] items-center h-[40px] flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
                    <input
                      type="text"
                      placeholder="Enter your 2FA Token"
                      id="search"
                      className="font-normal w-[320px] h-8 outline-none text-lg"
                      style={{
                        color: "#718096",
                        fontSize: "16px",
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
            <button
              className="text-[#FF5655] mt-5 flex mx-auto w-[154px] h-[40px] rounded-sm  justify-center items-center"
              style={{ border: "1px solid #FF5655", padding: "0px 16px" }}
              onClick={closeActiveModal1}
            >
              Deactivate User
            </button>
          </div>
        </div>
      )}
      {isInactiveModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded lg:w-[23rem] md:w-[20rem]">
            <div className="flex justify-center ">
              <p className=" mx-auto  text-md font-semibold mb-2 text-[#4A5568]">
                Activate Schedule
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
                Are you sure you want to Activate this user?
              </p>
              <p className="text-[#4A5568] text-center text-sm mx-[2rem]">
                The payouts defined in the schedule will take effect
                immediately.
              </p>
              {/* formsss */}

              {/* #3 password */}
              <div className="my-6">
                <form>
                  <label className="text-[#4A5568] text-sm ">
                    Password
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mb-2"
                    />
                  </label>
                  <div className="px-[10px] items-center h-[40px] flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
                    <input
                      type="text"
                      placeholder="Enter Password"
                      id="search"
                      className="font-normal w-[320px] h-8 outline-none"
                      style={{
                        color: "#718096",
                        fontSize: "16px",
                      }}
                    />
                  </div>
                </form>
              </div>
              <div className="my-6">
                <form>
                  <label className="text-[#4A5568] text-sm ">
                    2FA Token
                    <input
                      type="text"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      className="mb-2"
                    />
                  </label>
                  <div className="px-[10px] items-center h-[40px] flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
                    <input
                      type="text"
                      placeholder="Enter your 2FA Token"
                      id="search"
                      className="font-normal w-[320px] h-8 outline-none text-lg"
                      style={{
                        color: "#718096",
                        fontSize: "16px",
                      }}
                    />
                  </div>
                </form>
              </div>

              <button
                className="text-[#38A169] mt-5 flex mx-auto lg:w-[174px] md:w-full w-full h-[40px] rounded-sm  justify-center items-center"
                style={{ border: "1px solid #38A169", padding: "0px 16px" }}
                onClick={closeInactiveModal1}
              >
                Activate Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Approvals;
