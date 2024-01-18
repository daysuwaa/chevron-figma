import React from 'react';
import man from '../assets/image 1.png';
import arrowdown from '../assets/FiChevronDown.svg';
import computer from '../assets/computer.png';

const Schedules = () => {
  return (
    <div className='bg-[#F6F6F6] h-full'>
      {/* navbar */}
      <div className='flex px-[32px] py-[18px] justify-between h-[60px]' style={{ background: '#fff' }}>
        <p className='font-semibold tracking-wide '>Schedules</p>
        <div className='flex items-center'>
          <img src={man} alt='arrow' className='w-[24px] h-[24px] mr-3' />
          <img src={arrowdown} alt='man' className='w-[14px] h-[14px]' />
        </div>
      </div>

      {/* button */}
      <div className='flex ml-auto justify-end items-center mx-5 px-[12px] mt-8'>
        <button className="bg-[#3B2774] h-[32px] w-[153px] rounded text-center text-white text-sm gap-8">
          Add New Schedule
        </button>
      </div>

      {/* centered image with text below */}
      <div className='flex flex-col items-center mt-[8rem]'>
        <img src={computer} alt='' className='mb-4' />
        <p className='text-center text-[#1C065A] font-light tracking-wide text-xl'>No schedules created</p>
        <p className='text-center text-[#718096] font-light tracking-wide text-sm'> You do not have any schedules. <br></br>
        Click the button below to generate a template for one
        </p>

        <div className='h-[48px] mt-4 rounded bg-white  items-center w-[251px] text-center' style={{border:' 1px solid var(--Button-Background-Alternate, #3B2773)'}}>
        <button onClick={{}} className ='text-[#1C065A] mt-2'>Get Schedule Template</button>
      </div>
      </div>
    </div>
  );
}

export default Schedules;
