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
      name: "Segun Abedayo",
      email: "segun.a@gmail.com",
      role: "Administrator",
      lastlogin: "13:45, 11 Sep 2023",
      status: "Active",
    },

    {
      id: 2,
      name: "Mark Chandler",
      email: "chandler@gmail.com",
      role: "Accountant",
      lastlogin: "13:45, 11 Sep 2023",
      status: "Active",
    },
    {
      id: 3,
      name: "Rey Mysterio",
      email: "mysterywwe@gmail.com",
      role: "Accountant",
      lastlogin: "13:45, 11 Sep 2023",
      status: "Active",
    },
    {
      id: 4,
      name: "Rhonda Rousey",
      email: "rowdy@gmail.com",
      role: "Auditor",
      lastlogin: "13:45, 11 Sep 2023",
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

export default Users;
