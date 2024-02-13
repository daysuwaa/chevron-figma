import React from "react";
import DataTable from "react-data-table-component";

const Table = () => {
  const columns = [
    {
      name: <div className="font-bold text-[#4A5568]">USER</div>,
      selector: (row) => (
        <div className=" font-semibold text-[#1C065A]">{row.recipient}</div>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]">DATE/TIME</div>,
      selector: (row) => <div className="text-[#1C065A]">{row.date}</div>,
    },
    {
      name: <div className="font-bold text-[#4A5568]">IP ADDRESS</div>,
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
    <div className="flex flex-col items-center mt-7 mb-9 ">
      <div className="mt-11 mx-5 md:mx-7  w-[290px] sm:w-[450px] md:w-[450px] lg:w-[616px]   ">
        <div
          className="bg-white h-[377px] mt-5  items-center rounded-md"
          style={{
            boxShadow:
              "0px 0.073px 6.159px 0px rgba(0, 0, 0, 0.07), 0px 2.338px 17.029px 0px rgba(0, 0, 0, 0.05), 0px 9.853px 41px 0px rgba(0, 0, 0, 0.04), 0px 42px 136px 0px rgba(0, 0, 0, 0.02)",
          }}
        >
          <p className="mx-7 m-5 pt-5 text-[#4A5568] text-[18px] font-[600]  ">
            Login History
          </p>
          <div
            className="mx-7 rounded-md"
            style={{
              border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)",
            }}
          >
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
