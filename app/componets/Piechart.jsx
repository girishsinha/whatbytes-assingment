"use client";
import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#3B7DF4", "#EAF2FE"];

export const Piechart = ({ chartData }) => {
  let formattedData = Object.entries(chartData).map(([name, value]) => ({
    name,
    value,
  }));
  formattedData[1] = {
    name: "miss",
    value: 15 - formattedData[0].value,
  };
  formattedData = formattedData.slice(0, 2);
  console.log(formattedData);
  return (
    <div className="h-full p-6 rounded-lg border-2 border-[#E9EBED]  w-md mt-12">
      <h2 className="font-bold text-black py-4">Question Analysis</h2>
      <p>
        <span className="font-bold">You scored 12 Question out of 15.</span>{" "}
        However it still needs some improvements
      </p>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={formattedData}
              cx="50%"
              cy="50%"
              labelLine={false}
              // label={({ name, percent }) =>
              //   `${name} (${(percent * 100).toFixed(0)}%)`
              // }
              outerRadius={100}
              innerRadius={70}
              // fill="#8884d8"
              fill="#EAF2FE"
              dataKey="value"
            >
              {formattedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            {/* <Legend /> */}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
