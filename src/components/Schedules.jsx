import React from 'react'
import man from '../assets/image 1.png'
import arrowdown from '../assets/FiChevronDown.svg'


const Schedules = () => {
  return (
    <div className='bg-[#F6F6F6]]'>
   <div className='flex px-[32px] py-[18px] justify-between h-[60px]' style={{ background: '#fff' }}>
        <p className='font-semibold tracking-wide '>Schedules</p>
        <div className='flex items-center'>
          <img src={man} alt='arrow' className='w-[24px] h-[24px] mr-3' />
          <img src={arrowdown} alt='man' className='w-[14px] h-[14px]' />
        </div>
      </div>
    </div>
  )
}

export default Schedules