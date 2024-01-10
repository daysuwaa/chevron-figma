import React from 'react';
import { PieChart, Pie } from 'recharts';

const Piechart = () => {
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
  ];

  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="Group A"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#6FCF97" // Red color for Group A
          label
        />
        <Pie
          data={data01}
          dataKey="value"
          nameKey="Group B"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#EB5757" // Blue color for Group B
          label
        />
      </PieChart>
    </div>
  );
};

export default Piechart;
