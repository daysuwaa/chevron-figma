// Anapie component
import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 200 },
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
            value="Total"
            position="center"
            className="recharts-pie-label"
          />
        </Pie>
      </PieChart>
    );
  }
}
