import React from 'react'
import { Link } from 'react-router-dom';
import man from '../assets/image 1.png'
import arrowdown from '../assets/FiChevronDown.png'
import arrowright2 from '../assets/FiChevronRight.png'
import arrowright from '../assets/FiChevronRight-2.png'
import users from '../assets/FiUsers.png';
import payments from '../assets/FiCreditCard.png';
import clock from '../assets/BsClock.png';
import circle from '../assets/Group 2.png';

const Dashboard = () => {
  return (
    <div style={{backgroundColor:'#F6F6F6'}} className="w-full">
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
    <div className='grid grid-cols-3 gap-8 mx-7'>

      {/* frame1 */}
      <div className='flex flex-col px-7 py-5 my-4 w-[352px] h-[166px]' style={{borderRadius:'4px', backgroundColor:'#22085C', boxShadow:'0px 3px 12px 0px rgba(197, 197, 197, 0.25)'}}>
        <div className='flex justify-between'>
        <p style={{color:'#FFF', fontSize:'14px', lineHeight:'24px' }} className="font-light pt-2">Total Payout</p>
        <img src={payments} alt='pay' className='w-[39px] h-[39px]'/>
        </div>
        <p className='font-bold' style={{color:'#FFF', fontSize:'32px'}}>N953.20K</p>
        <div className='flex items-center'>
        <Link to =" " className='underline' style={{color:'#FFF', fontSize:'12px'}}>
            View payouts
           </Link>
        <img src={arrowright} alt='arrowright' className='w-[12px] h-[12px] ml-1' />
        </div>
      </div>

        {/* frame2 */}
      <div className='flex flex-col px-7 py-5 my-4 w-[352px] h-[166px]' style={{borderRadius:'4px', backgroundColor:'var(--Color-Base-Background-Color-5, #38A169)', boxShadow:'0px 3px 12px 0px rgba(197, 197, 197, 0.25)'}}>
        <div className='flex justify-between'>
        <p style={{color:'#FFF', fontSize:'14px', lineHeight:'24px' }} className="font-light pt-2">Wallet Balance</p>
        <img src={users} alt='pay' className='w-[39px] h-[39px]'/>
        </div>
        <p className='font-bold' style={{color:'#FFF', fontSize:'32px'}}>N1.25m</p>
        <div className='flex items-center'>
          <Link to =" " className='underline' style={{color:'#FFF', fontSize:'12px'}}>
            View payments
           </Link>
        <img src={arrowright} alt='arrowright' className='w-[12px] h-[12px] ml-1' />
        </div>
      </div>


      {/* frame3 */}
      <div className='flex flex-col px-7 py-5 my-4 w-[352px] h-[166px]' style={{borderRadius:'4px', backgroundColor:' var(--Surface-Primary, #FFF)', boxShadow:'0px 3px 12px 0px rgba(197, 197, 197, 0.25)'}}>
        <div className='flex justify-between'>
        <p style={{color:'#4A5568', fontSize:'14px', lineHeight:'24px' }} className="font-light pt-2">All Beneficiaries</p>
        <img src={clock} alt='pay' className='w-[39px] h-[39px]'/>
        </div>
        <p className='font-bold' style={{color:'#4A5568', fontSize:'32px'}}>1,252</p>
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
  {/* first graph */}
  <div className='w-[739px] h-[380px] py-6' style={{borderRadius:'4px', background:'#FFF', boxShadow: '0px 4px 6px 0px rgba(197, 197, 197, 0.25)'}}>
    <div className='flex justify-between mx-5'>
      <p className='' style={{color:'var(--Color-Gray-Gray-70, #4A5568', fontSize:'14px', lineHeight:'24px'}}>Payouts Overview</p>
      <div style={{borderRadius:'4px', border:'1px solid var(--Color-Gray-Gray-40, #CBD5E0)', padding:'6px 12px', alignItems:'center'}}>
        <p style={{color:'var(--Color-Gray-Gray-70, #4A5568', fontSize:'12px', lineHeight:'16px'}}>Last 1 month</p>
      </div>
    </div>

    {/* the borderrrr */}
    <div style={{ display:'flex',  alignItems:'flex-end',borderRadius:'4px', border:'1px solid var(--Color-Gray-Gray-40, #CBD5E0)', margin:'1.2rem 1.2rem 0 1.2rem' ,height:'248px'}} >
      {/* the purple graph thingy */}
      <div className='w-[11px] h-[106px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
      <div className='w-[11px] h-[55px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
      <div className='w-[11px] h-[118px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
      <div className='w-[11px] h-[98px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
      <div className='w-[11px] h-[148px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
      <div className='w-[11px] h-[55px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
      <div className='w-[11px] h-[98px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
      <div className='w-[11px] h-[72px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
      <div className='w-[11px] h-[188px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
      <div className='w-[11px] h-[148px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
      <div className='w-[11px] h-[98px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
      <div className='w-[11px] h-[188px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
      <div className='w-[11px] h-[55px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
      <div className='w-[11px] h-[148px] ml-9' style={{background: 'var(--Color-Purple-Light-Purple-70, #844CFC)'}}></div>
    </div>
    {/* end of purple thingy */}

    <div className='flex ' >
      <p className='font-light ml-12'style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}} >11/09</p>
      <p className='font-light ml-5'style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}}>12/09</p>
      <p className='font-light ml-6'style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}}>13/09</p>
      <p className='font-light ml-[21.5px]'style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}}>14/09</p>
      <p className='font-light ml-6'style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}}>15/09</p>
      <p className='font-light ml-5'style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}}>16/09</p>
      <p className='font-light ml-4'style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}}>17/09</p>
      <p className='font-light ml-5'style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}}>18/09</p>
      <p className='font-light ml-5'style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}}>19/09</p>
      <p className='font-light ml-5'style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}}>20/09</p>
      <p className='font-light ml-4'style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}}>21/09</p>
      <p className='font-light ml-6' style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}}>22/09</p>
      <p className='font-light ml-4' style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}}>23/09</p>
      <p className='font-light ml-4' style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}}>24/09</p>
    </div>
    
  </div>
  {/* end of 1st */}


  {/* second graph */}
  <div className='w-[352px] h-[380px] py-6 mx-[12rem]' style={{borderRadius:'4px', background:'#FFF', boxShadow: '0px 4px 6px 0px rgba(197, 197, 197, 0.25)'}}>
  <p className='mx-5' style={{color:'var(--Color-Gray-Gray-70, #4A5568', fontSize:'14px', lineHeight:'24px'}}>Cash Overflow</p>
  </div>
  {/* end of 2nd */}
</div>





  </div>
  // end of code
  )
}

export default Dashboard