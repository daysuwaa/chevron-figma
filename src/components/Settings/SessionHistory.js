import React from "react";
import DataTable from "react-data-table-component";

const Table = () => {
  const columns = [
    {
      name: "USER",
      selector: (row) => (
        <div className=" font-semibold text-[#1C065A]">{row.recipient}</div>
      ),
    },
    {
      name: "DATE/TIME",
      selector: (row) => <div className="text-[#1C065A]">{row.date}</div>,
    },
    {
      name: "IP ADDRESS",
      selector: (row) => <div className="text-[#1C065A]">{row.ipaddress}</div>,
    },
  ];

  const data = [
    {
      id: 1,
      recipient: "Segun Adebayo",
      date: "13:45, 11 Sep 2023",
      ipaddress: "236.59.248.023",
    },

    {
      id: 2,
      recipient: "Mark Chandler",
      date: "13:45, 11 Sep 2023",
      ipaddress: "236.59.248.023",
    },
    {
      id: 3,
      recipient: "Lazar Nikolov",
      date: "13:45, 11 Sep 2023",
      ipaddress: "236.59.248.023",
    },
    {
      id: 4,

      recipient: "Javier Alaves",
      date: "13:45, 11 Sep 2023",
      ipaddress: "236.59.248.023",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-11  ">
      <div
        className="bg-white w-[616px] h-[377px] mt-5 rounded items-center"
        style={{
          boxShadow:
            "0px 0.073px 6.159px 0px rgba(0, 0, 0, 0.07), 0px 2.338px 17.029px 0px rgba(0, 0, 0, 0.05), 0px 9.853px 41px 0px rgba(0, 0, 0, 0.04), 0px 42px 136px 0px rgba(0, 0, 0, 0.02)",
        }}
      >
        <p className="mx-5 my-8 text-[#4A5568] text-lg font-normal ">
          Login History
        </p>
        <div
          className="mx-5"
          style={{ border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)" }}
        >
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Table;
