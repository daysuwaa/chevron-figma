import React from 'react'
import payments from '../assets/FiCreditCard.svg';
import { Link } from 'react-router-dom';
import calendar from '../assets/FiCalendar.svg'
import wallet from '../assets/IoWalletOutline.svg';
import man from '../assets/image 1.png'
import arrowdown from '../assets/FiChevronDown.svg'

const Payment = () => {


  // dashboard
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
        <p className='font-semibold tracking-wide '>Payment</p>
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
         "")}

        {styling("var(--Color-Base-Background-Color-5, #38A169)",
          "Todays Payments",
          calendar,
          "N98.25K",
          "View payments",
          "#FFF",
         "")}

        {styling("var(--Surface-Primary, #FFF)",
          "Funds Balance",
          wallet,
          "N125.25M",
          "View beneficiaries",
          "#4A5568",
          ""
         )}
      </div>
      {/* end of frames */}

    </div>
    // end of code
  )
}

export default Payment