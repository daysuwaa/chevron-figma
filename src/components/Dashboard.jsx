import React from 'react'
import man from '../assets/image 1.png'

const Dashboard = () => {
  return (
    <div>
      <div className='flex px-[18px] py-[32px] items-start'>
        <p>Dashboard</p>
        <img src ={man} alt='man' className='justify-end'/>

      </div>
     
    </div>
  )
}

export default Dashboard