import React from 'react'
import chevron from '../assets/chevron logo.png'
const Sidebar = () => {
  return (
    <div className="h-[1024px] w-[250px] py-4" style={{backgroundColor:"var(--Color-Base-Text-Color, #1C065A)"}}>

        {/* the image and title */}
    <div className="flex justify-center items-center space-x-2 py-6">
  <img className="w-10 h-10 rounded-sm" src={chevron} alt="logo"/>
  <p className="text-white font-semibold tracking-wider" style={{fontSize:'16px', lineHeight:'24px'}}>Chevron Group</p>
  </div>
  {/* end of image */}

 
<div className="w-[250px] h-[1px] bg-gray-200"></div>

    </div>
    // end of side bar
  )
}

export default Sidebar