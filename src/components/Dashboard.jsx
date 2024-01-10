import React from 'react'
import { Link } from 'react-router-dom';
import Barchat from '../components/Barchart';
// import Piechart from '../components/Piechart';
import man from '../assets/image 1.png'
import arrowdown from '../assets/FiChevronDown.svg'
import arrowright2 from '../assets/FiChevronRight.svg'
import arrowright from '../assets/FiChevronRight.svg'
import users from '../assets/FiUsers.svg';
import payments from '../assets/FiCreditCard.svg';
import clock from '../assets/BsClock.svg';
import circle from '../assets/Group 2.svg';

const Dashboard = () => {
  return (
    <div style={{backgroundColor:'#F6F6F6'}} className="w-full h-full overflow-auto">
      {/* nav- dashbord side */}
    <div className='flex px-[32px] py-[18px] justify-between h-[60px]' style={{background:'#fff'}}>
      <p className='font-semibold tracking-wide '>Dashboard</p>
      <div className='flex items-center'>
        <img src={man} alt='arrow' className='w-[24px] h-[24px] mr-3' />
        <img src={arrowdown} alt='man' className='w-[14px] h-[14px]' />
      </div>
    </div>
    {/* end of nav */}

   
    {/* framesssss */}
    <div className='flex grid-cols-3 gap-8 mx-7 flex-wrap'>
      {/* frame1 */}
      <div className='flex flex-col px-7 py-5 my-4 max-w-[37rem] h-[166px] flex-1 min-w-[250px]' style={{borderRadius:'4px', backgroundColor:'#22085C', boxShadow:'0px 3px 12px 0px rgba(197, 197, 197, 0.25)', width:'max-width'}}>
        <div className='flex justify-between'>
        <p style={{color:'#FFF', fontSize:'14px', lineHeight:'24px' }} className="font-light pt-2">Total Payout</p>
        <img src={payments} alt='pay' className='w-[39px] h-[39px]'/>
        </div>
        <p className='font-bold pb-4' style={{color:'#FFF', fontSize:'32px'}}>N953.20K</p>
        <div className='flex items-center'>
        <Link to =" " className='underline' style={{color:'#FFF', fontSize:'12px'}}>
            View payouts
           </Link>
        <img src={arrowright} alt='arrowright' className='w-[12px] h-[12px] ml-1' />
        </div>
      </div>

        {/* frame2 */}
      <div className='flex-1 flex-col px-7 py-5 my-4  max-w-[37rem] h-[166px] min-w-[250px]' style={{borderRadius:'4px', backgroundColor:'var(--Color-Base-Background-Color-5, #38A169)', boxShadow:'0px 3px 12px 0px rgba(197, 197, 197, 0.25)'}}>
        <div className='flex justify-between'>
        <p style={{color:'#FFF', fontSize:'14px', lineHeight:'24px' }} className="font-light pt-2">Wallet Balance</p>
        <img src={users} alt='pay' className='w-[39px] h-[39px]'/>
        </div>
        <p className='font-bold pb-4' style={{color:'#FFF', fontSize:'32px'}}>N1.25m</p>
        <div className='flex items-center'>
          <Link to =" " className='underline' style={{color:'#FFF', fontSize:'12px'}}>
            View payments
           </Link>
        <img src={arrowright} alt='arrowright' className='w-[12px] h-[12px] ml-1' />
        </div>
      </div>


      {/* frame3 */}
      <div className='flex-1 flex-col px-7 py-5 my-4 max-w-[37rem] h-[166px] min-w-[250px]' style={{borderRadius:'4px', backgroundColor:' var(--Surface-Primary, #FFF)', boxShadow:'0px 3px 12px 0px rgba(197, 197, 197, 0.25)'}}>
        <div className='flex justify-between'>
        <p style={{color:'#4A5568', fontSize:'14px', lineHeight:'24px' }} className="font-light pt-2">All Beneficiaries</p>
        <img src={clock} alt='pay' className='w-[39px] h-[39px]'/>
        </div>
        <p className='font-bold pb-4' style={{color:'#4A5568', fontSize:'32px'}}>1,252</p>
        <div className='flex items-center'>
       <Link to =""className='underline' style={{color:'#4A5568', fontSize:'12px'}} >
        View beneficiaries
       </Link>
        <img src={arrowright2} alt='arrowright' className='w-[12px] h-[12px] ml-1' />
        </div>
      </div>
</div>
{/* end of frames */}

{/* graphs thingy */}

<div className='grid grid-cols-2 gap-12 mx-7 pr-4 pt-5'>
  {/* first graph - barchart */}
  <div className='w-[739px] h-[400px] py-6' style={{borderRadius:'4px', background:'#FFF', boxShadow: '0px 4px 6px 0px rgba(197, 197, 197, 0.25)'}}>
    <div className='flex justify-between mx-5'>
      <p className='' style={{color:'var(--Color-Gray-Gray-70, #4A5568', fontSize:'14px', lineHeight:'24px'}}>Payouts Overview</p>
      <div style={{borderRadius:'4px', border:'1px solid var(--Color-Gray-Gray-40, #CBD5E0)', padding:'6px 12px', alignItems:'center'}}>
        <p style={{color:'var(--Color-Gray-Gray-70, #4A5568', fontSize:'12px', lineHeight:'16px'}}>Last 1 month</p>
      </div>
    </div>

    {/* the borderrrr */}
    <div style={{   alignItems:'flex-end',borderRadius:'4px', border:'1px solid var(--Color-Gray-Gray-40, #CBD5E0)', margin:'1.2rem 1.2rem 0 1.2rem' ,height:'300px'}} className='flex-1'>
    {/* imported the bar chart */}
    <Barchat/>
    </div>
  </div>
  {/* end of 1st */}


  {/* second graph */}
  <div className='w-[352px] h-[400px] py-6 mx-[12rem] items-center flex-1' style={{borderRadius:'4px', background:'#FFF', boxShadow: '0px 4px 6px 0px rgba(197, 197, 197, 0.25)'}} >
  <div className='mx-6'>
  <p className='' style={{color:'var(--Color-Gray-Gray-70, #4A5568', fontSize:'14px', lineHeight:'24px'}}>Cash Overflow</p>
  {/* <Piechart className='mx-auto mt-4'/> */}
  <img src={circle} alt='' className='w-[229.084px] h-[229.084px] mx-auto mt-4' style={{ justifyItems:'center'}}/>
  {/* the two boxes */}
  <div className='flex mt-[1.5rem]'>
  <div className='w-[12px] h-[12px] mt-[0.2rem] mr-[0.2rem]' style={{backgroundColor:'#6FCF97'}}></div>
  <p style={{color:'var(--Color-Gray-Gray-70, #4A5568', fontSize:'12px'}}>Credit: <span className='font-semibold mr-3'>N1,560,230.00</span></p>
  <div className='w-[12px] h-[12px] mt-[0.2rem] mr-[0.2rem]' style={{backgroundColor:'#EB5757'}}></div>
  <p style={{color:'var(--Color-Gray-Gray-70, #4A5568', fontSize:'12px'}}>
  Debit: <span className='font-semibold'>N1,560,230.00</span></p>
  </div>
  </div>
</div>
  {/* end of 2nd */}


 
</div>








  </div>
  // end of code
  )
}

export default Dashboard