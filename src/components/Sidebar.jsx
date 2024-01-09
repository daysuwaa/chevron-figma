import React from 'react';
import chevron from '../assets/chevron logo.png';
import dashboard from '../assets/IoSpeedometerOutline.png';
import approvals from '../assets/FiCheckCircle.png';
import payments from '../assets/FiCreditCard.png';
import analytics from '../assets/FiPieChart.png';
import users from '../assets/FiUsers.png';
import beneficiary from '../assets/IoWalletOutline.png';
import schedules from '../assets/BsClock-2.png';
import settings from '../assets/BsGear.png';

const Sidebar = () => {
  return (
    <div className="h-[1024px] w-[250px] py-4" style={{ backgroundColor: "var(--Color-Base-Text-Color, #1C065A)" }}>

      {/* Image and Title */}
      <div className="flex justify-center items-center space-x-2 py-6">
        <img className="w-10 h-10 rounded-sm" src={chevron} alt="logo" />
        <p className="text-white font-semibold tracking-wider" style={{ fontSize: '16px', lineHeight: '24px' }}>Chevron Group</p>
      </div>
      {/* End of Image */}

      <div className="w-[250px] h-[0.4px] bg-gray-400"></div>

      {/* dashboard */}
      <div className='pt-3'>

  <div className='px-[10px] py-[18px] items-center space-x-12'>
    <div className='flex pl-5 py-2  w-[226px] h-[44px]' style={{ borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.22)', background: '#42257E ' }}>
      <img src={dashboard} alt='dash' className='w-[18px] h-[18px]' />
      <p className="text-white font-semibold tracking-wider px-3" style={{ fontSize: '14px', lineHeight: '24px' }}>Dashboard</p>
    </div>
    </div>
    
    <div className='px-[10px] py-[10px] items-center space-x-12'>
    <div className='flex ml-[20px]  w-[226px] h-[44px]'>
      <img src={payments} alt='dash' className='w-[18px] h-[18px]' />
      <p className="text-white font-thin tracking-wider px-3" style={{ fontSize: '14px', lineHeight: '24px' }}>Dashboard</p>
    </div>
    </div>

    <div className='px-[10px] py-[10px] items-center space-x-12'>
    <div className='flex ml-[20px]  w-[226px] h-[44px]'>
      <img src={schedules} alt='dash' className='w-[18px] h-[18px]' />
      <p className="text-white font-thin  tracking-wider px-3" style={{ fontSize: '14px', lineHeight: '24px' }}>Dashboard</p>
    </div>
    </div>

    <div className='px-[10px] py-[10px] items-center space-x-12'>
    <div className='flex ml-[20px]  w-[226px] h-[44px]'>
      <img src={beneficiary} alt='dash' className='w-[18px] h-[18px]' />
      <p className="text-white font-thin  tracking-wider px-3" style={{ fontSize: '14px', lineHeight: '24px' }}>Dashboard</p>
    </div>
    </div>

    <div className='px-[10px] py-[10px] items-center space-x-12'>
    <div className='flex ml-[20px]  w-[226px] h-[44px]'>
      <img src={approvals} alt='dash' className='w-[18px] h-[18px]' />
      <p className="text-white font-thin  tracking-wider px-3" style={{ fontSize: '14px', lineHeight: '24px' }}>Dashboard</p>
    </div>
    </div>

    <div className='px-[10px] py-[10px] items-center space-x-12'>
    <div className='flex ml-[20px]  w-[226px] h-[44px]'>
      <img src={users} alt='dash' className='w-[18px] h-[18px]' />
      <p className="text-white font-thin  tracking-wider px-3" style={{ fontSize: '14px', lineHeight: '24px' }}>Dashboard</p>
    </div>
    </div>

    <div className='px-[10px] py-[10px] items-center space-x-12'>
    <div className='flex ml-[20px]  w-[226px] h-[44px]'>
      <img src={analytics} alt='dash' className='w-[18px] h-[18px]' />
      <p className="text-white font-thin  tracking-wider px-3" style={{ fontSize: '14px', lineHeight: '24px' }}>Dashboard</p>
    </div>
    </div>

    <div className='px-[10px] py-[10px] items-center space-x-12'>
    <div className='flex ml-[20px]  w-[226px] h-[44px]'>
      <img src={settings} alt='dash' className='w-[18px] h-[18px]' />
      <p className="text-white font-thin  tracking-wider px-3" style={{ fontSize: '14px', lineHeight: '24px' }}>Dashboard</p>
    </div>
    </div>


   

   


</div>


      {/* End of Sidebar */}
    </div>
  );
};

export default Sidebar;
