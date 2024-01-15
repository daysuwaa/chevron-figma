import React from 'react';
import payments from '../assets/FiCreditCard.svg';
import calendar from '../assets/FiCalendar.svg';
import wallet from '../assets/IoWalletOutline.svg';
import man from '../assets/image 1.png';
import arrowdown from '../assets/FiChevronDown.svg';
import info from '../assets/CkInfoOutline.svg';
import gtb from '../assets/image 2.png'
import copy from '../assets/IoCopyOutline.svg'
import search from '../assets/CkSearch.svg'
import filter from '../assets/FiFilter.svg'
const Payment = () => {
  const styling = (bgcolor, text, icons, money, tcols) => {
    return (
      <div
        className='container px-4 md:px-7 py-5 my-4 md:mx-4 h-[166px]'
        style={{
          borderRadius: '4px',
          boxShadow: '0px 3px 12px 0px rgba(197, 197, 197, 0.25)',
          backgroundColor: bgcolor,
        }}
      >
        <div className='flex justify-between'>
          <p
            style={{
              color: tcols,
              fontSize: '14px',
              lineHeight: '24px',
            }}
            className='font-light pt-2'
          >
            {text}
          </p>
          <img src={icons} alt='pay' className='w-[39px] h-[39px]' />
        </div>
        <p
          className='font-bold pb-4'
          style={{
            color: tcols,
            fontSize: '32px',
          }}
        >
          {money}
        </p>
        <div className='flex items-center'>
          <p style={{ color: tcols, fontSize: '12px' }}>
            The total amount of payments you’ve made
          </p>
          <img
            src={info}
            alt='arrowright'
            className='w-[12px] h-[12px] ml-1'
          />
        </div>
      </div>
    );
  };

  return (
    <div
      style={{ backgroundColor: '#F6F6F6' }}
      className='w-full h-full overflow-auto'
    >
      {/* nav- dashbord side */}
      <div
        className='flex px-4 md:px-[32px] py-[18px] justify-between h-[60px]'
        style={{ background: '#fff' }}
      >
        <p className='font-semibold tracking-wide '>Payment</p>
        <div className='flex items-center'>
          <img src={man} alt='arrow' className='w-[24px] h-[24px] mr-3' />
          <img src={arrowdown} alt='man' className='w-[14px] h-[14px]' />
        </div>
      </div>
      {/* end of nav */}

      {/* framesssss */}
      <div className='grid grid-cols-1 md:grid-cols-3 mx-4 md:mx-7 gap-4'>
        {styling('#22085C', 'Total Payments', payments, 'N953.20K', '#FFF')}

        {styling(
          'var(--Color-Base-Background-Color-5, #38A169)',
          'Wallet Balance',
          calendar,
          'N1.25m',
          '#FFF'
        )}

        {styling(
          'var(--Surface-Primary, #FFF)',
          'All Beneficiaries',
          wallet,
          '1,252',
          '#4A5568'
        )}
      </div>
      {/* end of frames */}

        {/* lineee */}
      <div className="w-full border-b mt-4" style={{background: 'var(--Color-Gray-Gray-40, #CBD5E0)'}}></div>

       
      {/* second side */}
      <div className="flex justify-between p-4 mx-7">
      {/* Two p tags on the extreme left */}
      <div className='flex '>
        <p className="flex mt-3 tracking-wide font-light" style={{color: 'var(--Text-Primary, #1C065A)', fontSize:'14px'}}>My account: <img src={info} alt='arrowright'className='w-[14px] h-[14px] mx-2 mt-1 '/></p>
        
        <button className="flex" style={{background: 'var(--Button-Background-Alternate, #3B2773)', padding:'6px 12px', borderRadius:'4px', justifyContent:'center'}}>
          <img src={gtb} alt='gtbimage' className='w-[16px] h-[16px] mt-[6px] mr-2' ></img>
          <p className='text-white mt-[4px] mr-2' style={{fontSize:'14px'}}>0012345678</p>
          <img src={copy} alt='copy' className='mt-[7px]'></img>
        </button>
      </div>

      

      {/* Two p tags on the extreme right */}
      <div className='flex'>
      {/* <div className='px-[20px] py-[6px] flex w-[320px] grid-cols-1' style={{ borderRadius: '4px', border: '1px solid #CBD5E0' }}>
     <img src={search} alt='searchicon' className='w-[16px]'/>
  <input type="text" placeholder='Search by Payment Id' className='font-light w-[320px] h-8' style={{ color: '#718096', fontSize: '14px', marginLeft: '6px', backgroundColor:'#F6F6F6'  }}/>
</div>
         */}

        {/* <div className='px-[20px] py-[12px] flex w-[100px] mx-5' style={{borderRadius: '4px',border: '1px solid var(--Color-Gray-Gray-40, #CBD5E0)'}} >
        <img src={filter} alt='searchicon' className='w-[16px] h-[16px] mt-1'/>
         <p className='font-light' style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'14px', marginLeft:'6px'}}>Filter</p>
        </div> */}
       








      </div>
    </div>

    </div>
    // end of code
  );
};

export default Payment;
