import React from 'react'
import { BarChart, Bar, XAxis, Tooltip,  } from 'recharts';
const Barchart = () => {
    const data = [
        {
          "name": "11/09",
           "pv": 3060
        },
        {
          "name": "12/09",
          "pv": 1608
        },
        {
          "name": "13/09",
          "pv": 3600
        },
        {
          "name": "14/09",
          "pv": 2998
        },

        {
            "name": "15/09",
            "pv": 4500
          },
          {
            "name": "16/09",
            "pv": 1700
          },
          {
            "name": "17/09",
            "pv": 2700
          },
          {
            "name": "18/09",
            "pv": 2400
          },
          {
            "name": "19/09",
            "pv": 6800
          },
          {
            "name": "20/09",
            "pv": 5400
          },

          {
            "name": "21/09",
            "pv": 4000
          },
          {
            "name": "22/09",
            "pv": 6800
          },
          {
            "name": "23/09",
            "pv": 2000
          },
          {
            "name": "24/09",
            "pv": 5300
          }
        
    ]

    
   

  return (
    <div>
  <BarChart width={739} height={280} data={data}>
  <XAxis dataKey="name" className='font-light' style={{color: 'var(--Color-Gray-Gray-60, #718096)', fontSize:'10px'}} />
  {/* <YAxis /> */}
  <Tooltip />
  {/* <Legend /> */}
  <Bar dataKey="pv" fill="#844CFC" barSize={11} bar/>
</BarChart>
    </div>
  )
}

export default Barchart