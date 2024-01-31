import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    outflows: 2600,
    inflows: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    outflows: 1400,
    inflows: 1200,
    amt: 2210,
  },
  {
    name: "Mar",
    outflows: 6900,
    inflows: 5000,
    amt: 2290,
  },
  {
    name: "April",
    outflows: 2480,
    inflows: 2608,
    amt: 2000,
  },
  {
    name: "May",
    outflows: 3290,
    inflows: 2500,
    amt: 2181,
  },
  {
    name: "Jun",
    outflows: 1200,
    inflows: 1400,
    amt: 2500,
  },
  {
    name: "July",
    outflows: 2090,
    inflows: 2300,
    amt: 2100,
  },
  {
    name: "Aug",
    outflows: 2100,
    inflows: 1900,
    amt: 2100,
  },
  {
    name: "Sep",
    outflows: 4600,
    inflows: 4000,
    amt: 2100,
  },
  {
    name: "Oct",
    outflows: 2490,
    inflows: 2200,
    amt: 2100,
  },
  {
    name: "Nov",
    outflows: 1900,
    inflows: 1700,
    amt: 2100,
  },
  {
    name: "Dec",
    outflows: 3490,
    inflows: 3300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="83%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            className="font-light"
            style={{
              color: "var(--Color-Gray-Gray-60, #718096)",
              fontSize: "10px",
            }}
          />

          <Tooltip />
          <Legend className="text-black font-thin" />
          <Bar yAxisId="left" dataKey="inflows" fill="#844CFC" />
          <Bar yAxisId="right" dataKey="outflows" fill="#FFA1D4" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
