import React, { PureComponent } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 2500,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/synchronized-area-chart-kpg1s";

  render() {
    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={120}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#EBB040"
              fill="#EBB0401A"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
