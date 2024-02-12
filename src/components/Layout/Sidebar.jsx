import React from "react";
import chevron from "src/assets/chevron logo.png";
import dashboard from "src/assets/IoSpeedometerOutline.svg";
import approvals from "src/assets/FiCheckCircle.svg";
import payments from "src/assets/FiCreditCard.svg";
import analytics from "src/assets/FiPieChart.svg";
import users from "src/assets/FiUsers.svg";
import beneficiary from "src/assets/IoWalletOutline.svg";
import schedules from "src/assets/BsClock-2.svg";
import settings from "src/assets/BsGear.svg";
import { Link, useLocation } from "react-router-dom";

function startsWithSubstring(string, substring) {
  return string.startsWith(substring);
}

const Sidebar = () => {
  const locationObj = useLocation();
  const activeLink = locationObj.pathname;

  const renderLink = (link, text, imgSrc) => {
    const isActive = startsWithSubstring(activeLink, link);

    return (
      <Link to={link} className="grid">
        <div className=" items-center space-x-12 ">
          <div
            className={`flex px-3 w-full md:w- [226px] h-[44px]  `}
            style={{
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
              className="w-[18px] h-[18px] mt-3 mx-auto"
            />
            <p
              className={`flex-1 text-white tracking-wider text-sm leading-6 px-3  mt-2 hidden md:block ${
                isActive ? "font-bold" : "font-light"
              }`}
            >
              {text}
            </p>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="h-full md:w-[250px] w-[70px] px-3 py-4 bg-[#1C065A]">
      <div className="flex justify-center items-center space-x-2 py-6">
        <img className="w-10 h-10 rounded-sm" src={chevron} alt="logo" />
        <p className="text-white font-semibold tracking-wider hidden md:block text-[16px] leading-[24px] ">
          Chevron Group
        </p>
      </div>

      <div className="hidden md:block w-[250px] h-[0.4px] bg-gray-400"></div>

      <div className="pt-7">
        {/* renndered three links as shwon above */}
        {renderLink("/dashboard", "Dashboard", dashboard)}
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
