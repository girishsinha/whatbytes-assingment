"use client"
import React, { useState } from "react";
// import { Navbar } from "./components/Navbar";
// import { HeroSection } from "./components/HeroSection";
// import { FeatureSection } from "./components/FeatureSection";
// import { Footer } from "./components/Footer";
import Chart from "./componets/ProgressBar"
import Graph from "./componets/Graph"
import { Piechart } from "./componets/Piechart";
import { UpdateStateModal } from "./componets/UpdateStateModal";




const initialData = { Score: 10, miss: 14, percentile: 30, rank: 1 };
export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chartData, setChartData] = useState(initialData);

  return (
    <div className="flex lg:flex-row flex-col justify-around p-8 pl-10 mt-18">
      <div className="flex flex-col gap-6">
        <h3 className="">Skill Test</h3>
        <div className="md:w-2xl p-6 rounded-lg border-2 border-[#E9EBED] flex sm:flex-row flex-col justify-between sm:gap-0 gap-2 md:items-center">
          <div className="flex"><img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" className="aspect-square" />
            <div><h3 className="font-bold text-black">Hyper Text Markup Language</h3><p>Question: 8 | Duration: 15 mins| Submitted on 5 June 2021</p></div>
          </div>
          <button className="bg-[#132278] rounded-md ring-black ring-2 px-6 h-10 text-sm font-semibold text-white" onClick={() => setIsModalOpen(true)}>Update</button>
        </div>
        <div className="md:w-2xl p-6 rounded-lg border-2 border-[#E9EBED] flex flex-col">
          <h3 className="font-bold text-black">Quick Statistics</h3>
          <div className="flex justify-around">
            <div className=" p-2 px-4">
              <h3 className="font-bold text-black text-2xl">{chartData.rank}</h3>
              <p className="text-sm">YOUR RANK</p>
            </div>
            <div className="border-r-2 border-[#E9EBED]"></div>
            <div className=" p-2 px-4">
              <h3 className="font-bold text-black text-2xl">{chartData.percentile}%</h3>
              <p className="text-sm">PERCENTILE</p>
            </div>
            <div className="border-r-2 border-[#E9EBED]"></div>
            <div className="p-2 px-4">
              <h3 className="font-bold text-black text-2xl">{chartData.Score}/15</h3>
              <p className="text-sm">CORRECT ANSWERS</p>
            </div>

          </div>
        </div>
        <div className="p-6 rounded-lg border-2 border-[#E9EBED] md:w-2xl">
          <h2 className="font-bold text-black py-4">Comparison Graph</h2>
          <p>
            <span className="font-bold">  You scored {chartData.percentile}% percentile</span> which is lower than the avarage percentile 72% of all the engineers who took this assessment
          </p>
          <Graph />
        </div>
      </div>
      <div className="h-full flex lg:flex-col gap-0.5 md:flex-row flex-col">
        <div className="p-6 rounded-lg border-2 border-[#E9EBED] md:w-1/2 lg:w-md mt-12">
          <h3 className="font-bold text-black py-4">Syllabus Wise Analysis</h3>
          <Chart />

        </div>
        <Piechart chartData={chartData} />
      </div>
      <UpdateStateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(updatedData) => setChartData(updatedData)}
      />
    </div>
  );
}
