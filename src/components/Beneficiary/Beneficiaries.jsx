import React, { useState } from "react";
import Navbar from "../Stuff/Navbar";
import computer from "src/assets/computer.png";
import GetBeneficiaryModal from "./GetBeneficiaryModal";
import AddBeneficiaryModal from "./AddBeneficiaryModal";

const Beneficiaries = () => {
  const [isGetBeneficiaryOpen, setIsBeneficiaryOpen] = useState(false);
  const openBeneficiaryModal = () => setIsBeneficiaryOpen(true);
  const closeBeneficiaryModal = () => setIsBeneficiaryOpen(false);

  const [isAddBeneficiaryOpen, setIsAddBeneficiaryModal] = useState(false);
  const openAddBeneficiaryModal = () => setIsAddBeneficiaryModal(true);
  const closeAddBeneficiaryModal = () => setIsAddBeneficiaryModal(false);

  return (
    <div className="bg-[#F6F6F6] h-full">
      <Navbar title="Beneficiary" />

      <div className="flex ml-auto justify-end items-center mx-5 md:px-[10px] mt-8">
        <button
          className="bg-[#3B2774] h-[32px] w-[153px] rounded text-center text-white text-sm gap-8"
          onClick={openAddBeneficiaryModal}
        >
          Add New Beneficiary
        </button>
      </div>

      <div className="flex flex-col items-center mt-[8rem]">
        <img src={computer} alt="" className="mb-4" />
        <p className="text-center text-[#1C065A] font-light tracking-wide text-xl">
          No Beneficiaries created
        </p>
        <p className="text-center text-[#718096] font-light tracking-wide text-sm mx-3">
          You do not have any Beneficiaries.
          <br />
          Click the button below to generate a template for one
        </p>
        <button
          className="h-[48px] text-[#1C065A] text-[14px] sm:text-[16px] mt-4 rounded bg-white  sm:w-[251px] w-[200px] text-center flex items-center justify-center"
          style={{
            border: " 1px solid var(--Button-Background-Alternate, #3B2773)",
          }}
          onClick={openBeneficiaryModal}
        >
          Get Beneficiary Template
        </button>

        <GetBeneficiaryModal
          isOpen={isGetBeneficiaryOpen}
          modalTitle={"Get Beneficiary Template"}
          handleClose={closeBeneficiaryModal}
        />

        <AddBeneficiaryModal
          isOpen={isAddBeneficiaryOpen}
          modalTitle={"Add New Beneficiary"}
          namee={"Beneficiary Name"}
          handleClose={closeAddBeneficiaryModal}
        />
      </div>
    </div>
  );
};

export default Beneficiaries;
