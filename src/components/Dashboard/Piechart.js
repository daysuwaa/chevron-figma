import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

const Piechart = () => {
  const data = [
    { name: "Credit", money: 211, value: 620 },
    { name: "Debit", money: 111, value: 380 },
  ];

  const COLORS = ["#6FCF97", "#EB5757"];

  return (
    <div className="flex items-center justify-center max-w-full">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
          fillKey="fill"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
          <Label position="center" className="recharts-pie-label" />
        </Pie>
        {/* <Legend verticalAlign="bottom" height={36} align="center" /> */}
      </PieChart>
    </div>
  );
};

export default Piechart;
