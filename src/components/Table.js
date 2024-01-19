import React from "react";
import DataTable from "react-data-table-component";

const Table = () => {
  const columns = [
    {
      name: "PAYMENT ID",
      selector: (row) => (
        <div className=" font-semibold text-[#1C065A]">{row.payid}</div>
      ),
    },

    {
      name: "AMOUNT",
      selector: (row) => <div className="text-[#1C065A]">{row.amount}</div>,
    },
    {
      name: "RECIPIENT",
      selector: (row) => <div className="text-[#1C065A]">{row.recipient}</div>,
    },
    {
      name: "PAID TO",
      selector: (row) => <div className="text-[#1C065A]">{row.paidto}</div>,
    },
    {
      name: "DATE",
      selector: (row) => <div className="text-[#1C065A]">{row.date}</div>,
    },
  ];

  const data = [
    {
      id: 1,
      payid: "BLPID000133B31",
      amount: "NGN250,000.00",
      recipient: "Segun Adebayo",
      paidto: "First Bank: 0011223345",
      date: "13:45, 11 Sep 2023",
    },

    {
      id: 2,
      payid: "BLPID000133B32",
      amount: "NGN250,000.00",
      recipient: "Mark Chandler",
      paidto: "Access Bank: 0011223345",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 3,
      payid: "BLPID000133B33",
      amount: "NGN250,000.00",
      recipient: "Lazar Nikolov",
      paidto: "GTBank: 0011223345",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 4,
      payid: "BLPID000133B34",
      amount: "NGN250,000.00",
      recipient: "Javier Alaves",
      paidto: "Access Bank: 0011223345",
      date: "13:45, 11 Sep 2023",
    },
  ];
  return (
    <div
      className="mx-5 "
      style={{ border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)" }}
    >
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Table;
