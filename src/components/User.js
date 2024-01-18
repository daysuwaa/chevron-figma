import React from "react";
import DataTable from "react-data-table-component";

const Users = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row) => (
        <div className="font-bold text-[#1C065A]"> {row.name}</div>
      ),
    },
    {
      name: "EMAIL ADDRESS",
      selector: (row) => <div className="text-[#1C065A]">{row.email}</div>,
    },
    {
      name: "ROLE",
      selector: (row) => <div className="text-[#1C065A]"> {row.role}</div>,
    },
    {
      name: "LAST LOGIN",
      selector: (row) => <div className="text-[#1C065A]"> {row.lastlogin}</div>,
    },

    {
      name: "ACTIONS",
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
    </div>
  );
};

export default Users;
