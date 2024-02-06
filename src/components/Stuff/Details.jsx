import React from "react";
import Navbar from "./Navbar";
import left from "src/assets/FiChevronLeft.svg";
import use from "src/assets/user 1.svg";
const Details = (
  tab,
  transaction_no,
  address,
  schedule_id,
  date,
  schedule_name,
  payment_status,
  amount_paid,
  bank,
  account_no
) => {
  return (
    <div>
      <Navbar title="Payment" />
    </div>
  );
};

export default Details;
