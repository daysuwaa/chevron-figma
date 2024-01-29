// Anapie component
import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

const data = [
  { name: "Group A", money: 211, value: 400 },
  { name: "Group B", money: 1211, value: 300 },
  { name: "Group C", money: 999911, value: 300 },
  { name: "Group D", money: 211, value: 200 },
  { name: "Group E", money: 211, value: 200 },
];
const COLORS = ["#EB5757", "#6FCF97", "#1C065A", "#7535FC", "#EBB040"];

export default class Anapie extends PureComponent {
  render() {
    return (
      <PieChart width={300} height={300} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}

          <Label
            position="center"
            value={`Total: ${data.reduce((acc, curr) => acc + curr.money, 0)}`} // show the total money value
            className="recharts-pie-label"
          />
        </Pie>
      </PieChart>
    );
  }
}
