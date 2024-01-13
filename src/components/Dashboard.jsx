import React from 'react';
import { Link } from 'react-router-dom';
import Barchat from '../components/Barchart';
import Piechart from '../components/Piechart';
import man from '../assets/image 1.png'
import arrowdown from '../assets/FiChevronDown.svg'
import arrowright2 from '../assets/FiChevronRight.svg'
import arrowright from '../assets/FiChevronRight.svg'
import users from '../assets/FiUsers.svg';
import payments from '../assets/FiCreditCard.svg';
import clock from '../assets/BsClock.svg';
import Table from '../components/Table'

const Dashboard = () => {
  // the dashboard - frames
  const styling = (bgcolor, text, icons, money, link, tcols, arrow) => {
    return (
      <div className='container px-7 py-5  my-4  h-[166px]' style={{
        borderRadius: '4px',
        boxShadow: '0px 3px 12px 0px rgba(197, 197, 197, 0.25)',
        backgroundColor: bgcolor
      }}>
        <div className='flex justify-between'>
          <p style={{
            color: tcols,
            fontSize: '14px',
            lineHeight: '24px'
          }}
            className="font-light pt-2">
            {text}
          </p>
          <img src={icons} alt='pay' className='w-[39px] h-[39px]' />
        </div>
        <p className='font-bold pb-4'
          style={{
            color: tcols,
            fontSize: '32px'
          }}>
          {money}
        </p>
        <div className='flex items-center'>
          <Link to="/chevron/error" className='underline' style={{ color: tcols, fontSize: '12px' }}>
            {link}
          </Link>
          <img src={arrow} alt='arrowright' className='w-[12px] h-[12px] ml-1' />
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: '#F6F6F6' }} className="w-full h-full overflow-auto">
      {/* nav- dashbord side */}
      <div className='flex px-[32px] py-[18px] justify-between h-[60px]' style={{ background: '#fff' }}>
        <p className='font-semibold tracking-wide '>Dashboard</p>
        <div className='flex items-center'>
          <img src={man} alt='arrow' className='w-[24px] h-[24px] mr-3' />
          <img src={arrowdown} alt='man' className='w-[14px] h-[14px]' />
        </div>
      </div>
      {/* end of nav */}

      {/* framesssss */}
      <div className='grid grid-cols-3 mx-7 gap-4'>
        {styling("#22085C",
          "Total Payments",
         payments,
          "N953.20K",
          "View payouts",
          "#FFF",
          arrowright)}

        {styling("var(--Color-Base-Background-Color-5, #38A169)",
          "Wallet Balance",
          users,
          "N1.25m",
          "View payments",
          "#FFF",
          arrowright)}

        {styling("var(--Surface-Primary, #FFF)",
          "All Beneficiaries",
          clock,
          "1,252",
          "View beneficiaries",
          "#4A5568",
          arrowright2)}
      </div>
      {/* end of frames */}

      {/* Second row */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="col-span-2 bg-white p-4 text-center">Box 4</div>
        <div className="col-span-1 bg-white p-4">
          <div className='py-6 mx-5'>
            <p style={{ color: 'var(--Color-Gray-Gray-70, #4A5568', fontSize: '14px', lineHeight: '24px' }}>
              Cash overflow
            </p>
            <Piechart />
          </div>
        </div>
      </div>
 
 
{/* BARRSSSSSSS */}




    

      


{/* receipts payoutsss */}
<div className='py-7'>
<div className='bg-white max-w-full h-[355px] mx-7 '>
<div className='flex justify-between py-7 mx-5'>
<p className='' style={{color:'var(--Color-Gray-Gray-70, #4A5568', fontSize:'14px', lineHeight:'24px'}}>Recent Payouts</p>
<Link to = "/chevron/error" style={{color:'var(--Color-Gray-Gray-70, #4A5568', fontSize:'12px',  lineHeight:'24px'}} className="underline font-thin">View all</Link>
  </div>
  <div style={{alignItems:'flex-end',borderRadius:'4px', border:'1px solid var(--Color-Gray-Gray-40, #CBD5E0)', margin:'0rem 1.2rem 0 1.2rem' ,height:'260px'}} className='flex-1'>
{/* imported table */}
<Table className=" text-slate-700" style={{color:"#4A5568"}}/>
  </div>
</div>


</div>











  </div>
  // end of code
  )
}

export default Dashboard