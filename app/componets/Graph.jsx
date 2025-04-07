import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import Chart from "./ProgressBar";

const data = [
  { name: "0", value: 0 },
  { name: "10", value: 10 },
  { name: "25", value: 15 },
  { name: "50", value: 90 },
  { name: "65", value: 70 },
  { name: "75", value: 65 },
  { name: "80", value: 40 },
  { name: "100", value: 0 },
];

const Graph = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis stroke="#959595" />
        {/* <YAxis stroke="#959595" /> */}
        <Tooltip
          contentStyle={{
            // backgroundColor: "#A855F7",
            // color: "#fff",
            borderRadius: 5,
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8655FB"
          strokeWidth={2}
          fill="url(#colorUv)"
        />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#986FFA47" stopOpacity={1} />
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.4} />
          </linearGradient>
        </defs>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
