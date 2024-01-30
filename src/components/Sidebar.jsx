import React from "react";
import chevron from "../assets/chevron logo.png";
import dashboard from "../assets/IoSpeedometerOutline.svg";
import approvals from "../assets/FiCheckCircle.svg";
import payments from "../assets/FiCreditCard.svg";
import analytics from "../assets/FiPieChart.svg";
import users from "../assets/FiUsers.svg";
import beneficiary from "../assets/IoWalletOutline.svg";
import schedules from "../assets/BsClock-2.svg";
import settings from "../assets/BsGear.svg";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const locationObj = useLocation();
  const activeLink = locationObj.pathname;

  const renderLink = (link, text, imgSrc) => {
    const isActive = activeLink === link;
    const wrapperClasses = isActive ? "pl-[10px] " : "pl-[19px]";

    return (
      <Link to={link} className="flex">
        <div className=" items-center space-x-12">
          <div
            className={`flex ${wrapperClasses}  w-full md:w-[226px] h-[44px]`}
            style={{
              marginLeft: isActive ? "10px" : "",
              borderRadius: isActive ? "4px" : "",
              border: isActive
                ? "1px solid rgba(255, 255, 255, 0.22)"
                : "1px solid rgba(255, 255, 255, 0)",
              background: isActive ? "#42257E" : "",
            }}
          >
            <img
              src={imgSrc}
              alt="icon"
              className="w-[18px] h-[18px] mt-3 md:mx-0"
            />
            <p
              className={`text-white tracking-wider px-3  mt-2 ${
                isActive && window.innerWidth >= 768
                  ? ""
                  : "hidden md:block lg:block"
              }`}
              style={{
                fontWeight: isActive ? "bold" : "lighter",
                fontSize: "14px",
                lineHeight: "24px",
              }}
            >
              {text}
            </p>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="h-full md:w-[250px] w-[70px] py-4 bg-[#1C065A]">
      <div className="flex justify-center items-center space-x-2 py-6">
        <img className="w-10 h-10 rounded-sm" src={chevron} alt="logo" />
        <p className="text-white font-semibold tracking-wider hidden md:block text-[16px] leading-[24px] ">
          Chevron Group
        </p>
      </div>

      <div className="w-[250px] h-[0.4px] bg-gray-400"></div>

      <div className="pt-7">
        {/* renndered three links as shwon above */}
        {renderLink("/", "Dashboard", dashboard)}
        {renderLink("/payment", "Payments", payments)}
        {renderLink("/schedules", "Schedules", schedules)}
        {renderLink("/beneficiaries", "Beneficiaries", beneficiary)}
        {renderLink("/approvals", "Approvals", approvals)}
        {renderLink("/users", "Users", users)}
        {renderLink("/analytics", "Analytics", analytics)}
        {renderLink("/settings", "Settings", settings)}
      </div>
      {/* {end of side bar} */}
    </div>
  );
};

export default Sidebar;
