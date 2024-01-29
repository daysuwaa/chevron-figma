import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const Barchart = () => {
  const data = [
    {
      name: "11/09",
      pv: 3060,
    },
    {
      name: "12/09",
      pv: 1608,
    },

    {
      name: "13/09",
      pv: 3600,
    },

    {
      name: "14/09",
      pv: 2998,
    },

    {
      name: "15/09",
      pv: 4500,
    },

    {
      name: "16/09",
      pv: 1700,
    },

    {
      name: "17/09",
      pv: 2700,
    },

    {
      name: "18/09",
      pv: 2400,
    },

    {
      name: "19/09",
      pv: 6800,
    },

    {
      name: "20/09",
      pv: 5400,
    },

    {
      name: "21/09",
      pv: 4000,
    },

    {
      name: "22/09",
      pv: 6800,
    },

    {
      name: "23/09",
      pv: 2000,
    },

    {
      name: "24/09",
      pv: 5300,
    },
  ];

  return (
    <div
      style={{
        borderRadius: "4px",
        border: "1px solid var(--Color-Gray-Gray-40, #CBD5E0)",
        margin: "1rem 0rem 1rem 0rem",
        height: "320px",
      }}
      className="flex-1"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap={3} barGap={3}>
          <XAxis
            dataKey="name"
            className="font-light"
            style={{
              color: "var(--Color-Gray-Gray-60, #718096)",
              fontSize: "10px",
            }}
          />
          <Tooltip />
          <Bar dataKey="pv" fill="#844CFC" barSize={11} bar />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
