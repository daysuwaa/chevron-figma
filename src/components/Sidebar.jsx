import React, { useState } from 'react';
import chevron from '../assets/chevron logo.png';
import dashboard from '../assets/IoSpeedometerOutline.svg';
import approvals from '../assets/FiCheckCircle.svg';
import payments from '../assets/FiCreditCard.svg';
import analytics from '../assets/FiPieChart.svg';
import users from '../assets/FiUsers.svg';
import beneficiary from '../assets/IoWalletOutline.svg';
import schedules from '../assets/BsClock-2.svg';
import settings from '../assets/BsGear.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const renderLink = (link, text, imgSrc) => {
    return (
      <div className=" items-center space-x-12" onClick={() => handleLinkClick(link)}>
          {/* when the link is active, the bg, radius and border changes                                       if the active link is active, move 10px to the right, else, dont move*/}                                 
        <div className={`flex ${activeLink === link ? 'pl-5 ' : 'ml-[30px]'  } w-[226px] h-[44px]`} style={{ marginLeft: activeLink === link ? '10px' : '', borderRadius: activeLink === link ? '4px' : '', border: activeLink === link ? '1px solid rgba(255, 255, 255, 0.22)' : '', background: activeLink === link ? '#42257E' : '', }}>
          <img src={imgSrc} alt='icon' className='w-[18px] h-[18px] mt-3' />
          <Link to={link}>
            <p className={`font ${ activeLink === link ? 'semibold' : ''} text-white tracking-wider px-3 mt-2`} style={{ fontSize: '14px', lineHeight: '24px' }}>{text}</p>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full w-[250px] py-4 " style={{ backgroundColor: "var(--Color-Base-Text-Color, #1C065A)" }}>

      {/* Image and Title */}
      <div className="flex justify-center items-center space-x-2 py-6">
        <img className="w-10 h-10 rounded-sm" src={chevron} alt="logo" />
        <p className="text-white font-semibold tracking-wider" style={{ fontSize: '16px', lineHeight: '24px' }}>Chevron Group</p>
      </div>
      {/* End of Image */}

      <div className="w-[250px] h-[0.4px] bg-gray-400"></div>

      {/* Render Links */}
      <div className='pt-7'>
       {/* passed in three arguments - shown above */}
        {renderLink("/*", "Dashboard", dashboard)}
        {renderLink("/chevron/payment", "Payments", payments)}
        {renderLink("/chevron/schedules", "Schedules", schedules)}
        {renderLink("/chevron/beneficiaries", "Beneficiaries", beneficiary)}
        {renderLink("/chevron/approvals", "Approvals", approvals)}
        {renderLink("/chevron/users", "Users", users)}
        {renderLink("/chevron/analytics", "Analytics", analytics)}
        {renderLink("/chevron/settings", "Settings", settings)}
      </div>
      {/* End of Sidebar */}
    </div>
  );
};

export default Sidebar;
