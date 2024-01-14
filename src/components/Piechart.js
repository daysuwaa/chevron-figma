import React from 'react';
import { PieChart, Pie, Legend} from 'recharts';

const Piechart = () => {
  const data01 = [
    { name: 'Credit',money:"1111", value: 620, fill: "#6FCF97"},
    { name: 'Debit', money: "111", value: 380, fill: "#EB5757" },
  ];

  return (
    <div className='flex items-center justify-center max-w-full'>
      <PieChart width={300} height={300}>
        <Pie
          data={data01}
          innerRadius={70}
          dataKey="value"
          nameKey="name"
          fillKey="fill"
          moneyKey="money"
        />
        <Legend verticalAlign="bottom" height={36}/>
       <moneyKey/>
      </PieChart>
    </div>
  );
};

export default Piechart;
