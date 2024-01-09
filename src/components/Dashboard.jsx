import React from 'react'
import man from '../assets/image 1.png'
import arrowdown from '../assets/FiChevronDown.png'
import arrowright from '../assets/FiChevronRight-2.png'
import users from '../assets/FiUsers.png';
import payments from '../assets/FiCreditCard.png';
import clock from '../assets/BsClock-2.png';

const Dashboard = () => {
  return (
    <div style={{backgroundColor:'#F6F6F6'}}>
      {/* nav- dashbord side */}
    <div className='flex px-[18px] py-[32px] justify-between' style={{background:'#fff'}}>
      <p>Dashboard</p>
      <div className='flex items-center'>
        <img src={man} alt='arrow' className='w-[24px] h-[24px] mr-3' />
        <img src={arrowdown} alt='man' className='w-[14px] h-[14px]' />
      </div>
    </div>
    {/* end of nav */}

   
    {/* framesssss */}
    <div className=' mx-auto grid grid-cols-3 gap-8 ml-7'>

      {/* frame1 */}
      <div className='flex flex-col px-7 py-5 my-4 w-[352px] h-[166px]' style={{borderRadius:'4px', backgroundColor:'#22085C', boxShadow:'0px 3px 12px 0px rgba(197, 197, 197, 0.25)'}}>
        <div className='flex justify-between'>
        <p style={{color:'#FFF', fontSize:'14px', lineHeight:'24px' }} className="font-light pt-2">Total Payout</p>
        <img src={payments} alt='pay' className='w-[39px] h-[39px]'/>
        </div>
        <p className='font-bold' style={{color:'#FFF', fontSize:'32px'}}>N953.20K</p>
        <div className='flex'>
        <p className='underline' style={{color:'#FFF', fontSize:'12px'}}>View payouts</p>
        <img src={arrowright} alt='arrowright' />
        </div>

      </div>



    

</div>
  </div>
  // end of code
  )
}

export default Dashboard