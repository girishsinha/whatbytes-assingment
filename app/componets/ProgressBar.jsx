"use client";
const ProgressBar = ({ value, color }) => {
  const mode = true;

  return (
    // single bar
    <div className="flex gap-2 items-center">
      <div
        className={`relative w-full h-3  z-2 
        bg-[#E9EBED]
       rounded-lg overflow-hidden`}
      >
        <div
          className={`absolute bottom-0 rounded-lg h-full`}
          style={{ width: `${value}%`, backgroundColor: `${color}` }}
        ></div>
      </div>
      <h1 style={{ color: `${color}` }}>{value}%</h1>
    </div>
  );
};

const Chart = () => {
  const mode = true;

  const data = [
    { text: "HTML Tool, Forms, history ", value: 80, color: "#3B7DF4" },
    { text: "Tags & Reference in HTML ", value: 60, color: "#FBB142" },
    { text: "Tables & Reference in HTML", value: 24, color: "#ED5B75" },
    { text: "Tables & CSS Basics", value: 96, color: "#4FDFB1" },
  ];

  return (
    <div className="flex flex-col space-y-6 justify-center  h-full font-[600]  relative">
      {/* Looping throgh the each bar and feed the data */}

      {data.map((bar, index) => (
        <div key={index}>
          <p>{bar.text}</p>
          <ProgressBar value={bar.value} color={bar.color} />
        </div>
      ))}
    </div>
  );
};

export default Chart;
