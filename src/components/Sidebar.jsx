import React from 'react'
import chevron from '../assets/chevron logo.png'
const Sidebar = () => {
  return (
    <div className="h-[1024px] w-[250px] py-4" style={{backgroundColor:"var(--Color-Base-Text-Color, #1C065A)"}}>
    <div style={{display:'inline-flex', justifyContent:'center', alignItems:'center', gap:'8px'}}>
     <img className='w=[43px] h-[43px] rounded-sm content-center' src={chevron} alt='logo'/>
     <p>Chevron Group</p>
      </div>
    </div>
  )
}

export default Sidebar