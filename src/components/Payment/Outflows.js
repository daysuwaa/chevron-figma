import React from "react";
import DataTable from "react-data-table-component";

const Outflows = () => {
  const columns = [
    {
      name: "TRANSACTION ID",
      selector: (row) => (
        <div className="font-bold text-[#1C065A]"> {row.transactionid}</div>
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
      name: "STATUS",
      selector: (row) => (
        <div
          style={{
            backgroundColor:
              row.status === "Success"
                ? ["#DDFCE8"]
                : row.status === "Failed"
                ? ["#FFE1D4"]
                : ["#FCF0D4"],
            color:
              row.status === "Success"
                ? ["#38A169"]
                : row.status === "Failed"
                ? ["#FF5655"]
                : ["#F2994A"],
            padding: "5px 16px 5px 15px",
            justifyContent: "center",
            borderRadius: "4px",
            textAlign: "center",
            width: "92px",
            height: "24px",
          }}
        >
          {row.status}
        </div>
      ),
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
      status: "Success",
      date: "13:45, 11 Sep 2023",
    },

    {
      id: 2,
      transactionid: "BLPID000133B32",
      amount: "NGN250,000.00",
      sender: "Segun Adebayo",
      paidfrom: "Access Bank: 0011223345",
      status: "Pending",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 3,
      transactionid: "BLPID000133B33",
      amount: "NGN250,000.00",
      sender: "Lazar Nikolov",
      paidfrom: "GTBank: 0011223345",
      status: "Failed",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 4,
      transactionid: "BLPID000133B33",
      amount: "NGN250,000.00",
      sender: "Segun Adebayo",
      paidfrom: "Access Bank: 0011223345",
      status: "Success",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 5,
      transactionid: "BLPID000133B33",
      amount: "NGN250,000.00",
      sender: "Segun Adebayo",
      paidfrom: "Access Bank: 0011223345",
      status: "Success",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 6,
      transactionid: "BLPID000133B33",
      amount: "NGN250,000.00",
      sender: "Lazar Nikolov",
      paidfrom: "Access Bank: 0011223345",
      status: "Success",
      date: "13:45, 11 Sep 2023",
    },

    {
      id: 7,
      transactionid: "BLPID000133B33",
      amount: "NGN250,000.00",
      sender: "Lazar Nikolov",
      paidfrom: "GTBank: 0011223345",
      status: "Failed",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 8,
      transactionid: "BLPID000133B33",
      amount: "NGN250,000.00",
      sender: "Lazar Nikolov",
      paidfrom: "GTBank: 0011223345",
      status: "Success",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 9,
      transactionid: "BLPID000133B33",
      amount: "NGN250,000.00",
      sender: "Lazar Nikolov",
      paidfrom: "GTBank: 0011223345",
      status: "Success",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 10,
      transactionid: "BLPID000133B33",
      amount: "NGN250,000.00",
      sender: "Javier Alaves",
      paidfrom: "Access Bank: 0011223345",
      status: "Pending",
      date: "13:45, 11 Sep 2023",
    },
  ];
  return (
    <div
      className="mx-3 mb-5"
      style={{ border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)" }}
    >
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Outflows;