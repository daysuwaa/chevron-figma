import React from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";

const Outflows = () => {
  const columns = [
    {
      name: "TRANSACTION ID",
      selector: (row) => (
        <Link to="/details">
          <div className="font-bold text-[#1C065A]"> {row.transactionid}</div>
        </Link>
      ),
    },
    {
      name: "AMOUNT",
      selector: (row) => <div className="text-[#1C065A]">{row.amount}</div>,
    },
    {
      name: "SENDER",
      selector: (row) => <div className="text-[#1C065A]"> {row.sender}</div>,
    },
    {
      name: "PAID FROM",
      selector: (row) => <div className="text-[#1C065A]"> {row.paidfrom}</div>,
    },
    {
      name: "DATE",
      selector: (row) => <div className="text-[#1C065A]"> {row.date}</div>,
    },
  ];

  const data = [
    {
      id: 1,
      transactionid: "BLPID000133B31",
      amount: "NGN250,000.00",
      sender: "Segun Adebayo",
      paidfrom: "First Bank: 0011223345",
      date: "13:45, 11 Sep 2023",
    },

    {
      id: 2,
      transactionid: "BLPID000133B32",
      amount: "NGN250,000.00",
      sender: "Segun Adebayo",
      paidfrom: "Access Bank: 0011223345",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 3,
      transactionid: "BLPID000133B33",
      amount: "NGN250,000.00",
      sender: "Lazar Nikolov",
      paidfrom: "GTBank: 0011223345",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 4,
      transactionid: "BLPID000133B33",
      amount: "NGN250,000.00",
      sender: "Segun Adebayo",
      paidfrom: "Access Bank: 0011223345",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 5,
      transactionid: "BLPID000133B33",
      amount: "NGN250,000.00",
      sender: "Segun Adebayo",
      paidfrom: "Access Bank: 0011223345",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 6,
      transactionid: "BLPID000133B33",
      amount: "NGN250,000.00",
      sender: "Lazar Nikolov",
      paidfrom: "Access Bank: 0011223345",
      date: "13:45, 11 Sep 2023",
    },
  ];
  return (
    <div
      className="mx-5 md:mx-7 mb-5"
      style={{ border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)" }}
    >
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Outflows;
