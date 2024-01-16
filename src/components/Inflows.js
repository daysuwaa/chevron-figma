import React from 'react'
import DataTable from 'react-data-table-component'

const Table = () => {
    const columns = [
        {
            name:'TRANSACTION ID',
            selector:row => row.transactionid

        },
        {
            name:'AMOUNT',
            selector:row => row.amount

        },
        {
            name:'SENDER',
            selector:row => row.sender

        },
        {
            name:'PAID FROM',
            selector:row => row.paidfrom

        },
        {
            name:'DATE',
            selector:row => row.date

        },
    ];

    const data =[
        {
            id:1,
            transactionid:'BLPID000133B31',
            amount:'NGN250,000.00',
            sender:'Segun Adebayo',
            paidfrom:'First Bank: 0011223345',
            date:'13:45, 11 Sep 2023'
        },

        {
            id:2,
            transactionid:'BLPID000133B32',
            amount:'NGN250,000.00',
            sender:'Segun Adebayo',
            paidfrom:'Access Bank: 0011223345',
            date:'13:45, 11 Sep 2023'
        },
        {
            id:3,
            transactionid:'BLPID000133B33',
            amount:'NGN250,000.00',
            sender:'Lazar Nikolov',
            paidfrom:'GTBank: 0011223345',
            date:'13:45, 11 Sep 2023'
        },
        {
            id:4,
            transactionid:'BLPID000133B33',
            amount:'NGN250,000.00',
            sender:'Segun Adebayo',
            paidfrom:'Access Bank: 0011223345',
            date:'13:45, 11 Sep 2023'
        },
        {
            id:5,
            transactionid:'BLPID000133B33',
            amount:'NGN250,000.00',
            sender:'Segun Adebayo',
            paidfrom:'Access Bank: 0011223345',
            date:'13:45, 11 Sep 2023'
        },
        {
            id:6,
            transactionid:'BLPID000133B33',
            amount:'NGN250,000.00',
            sender:'Lazar Nikolov',
            paidfrom:'Access Bank: 0011223345',
            date:'13:45, 11 Sep 2023'
        },
        
    ]
  return (
    <div>
        <DataTable
        columns={columns}
        data={data}
        />
    </div>
  )
}

export default Table