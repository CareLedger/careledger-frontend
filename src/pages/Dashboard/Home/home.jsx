import React from "react";

import {
  FaUser,
  FaFileUpload,
  FaClipboardList,
  //   FaBlockchain,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { DashboardCardData } from "../../../Utils/dashboardCardData";
import PatientTableData from "../../../component/PatientTableData/patientTableData";

const data = [
  { name: "Jan", uploads: 10 },
  { name: "Feb", uploads: 20 },
  { name: "Mar", uploads: 15 },
  { name: "Apr", uploads: 25 },
  { name: "May", uploads: 30 },
  { name: "Jun", uploads: 35 },
  { name: "Jul", uploads: 45 },
  { name: "Aug", uploads: 50 },
  { name: "Sep", uploads: 40 },
  { name: "Oct", uploads: 30 },
  { name: "Nov", uploads: 35 },
  { name: "Dec", uploads: 40 },
];



function MainContent() {
  return (
    <div className="flex-grow py-[20px] px-[30px]">
      <h1 className="text-3xl mb-1 mt-[5px] text-[#00b4b6] font-bold">
        Welcome back, Bisola 👋
      </h1>
      <p className="text-[15px] text-gray-400">
        This is the latest update for the last 7 days, check now!
      </p>

      <div className="flex flex-col w-full mt-[40px]">
        <div className="grid grid-cols-4 gap-4">
          {DashboardCardData.map((item, i) => {
            return (
              <div className=" shadow rounded-lg px-4 py-[20px] flex items-center card-shadow">
                <div className="w-full flex flex-col gap-y-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-x-2 w-full">
                      <div className="mb-2">{item.icon}</div>
                      <div>
                        <h2 className=" text-white text-sm font-medium mb-2">
                          {item.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex gap-x-1 mb-1 ">
                      <div className="w-[6px] h-[6px] rounded-[50%] bg-white" />
                      <div className="w-[6px] h-[6px] rounded-[50%] bg-white" />
                      <div className="w-[6px] h-[6px] rounded-[50%] bg-white" />
                    </div>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <p className="text-gray-400 text-3xl font-bold">1,000</p>
                    <p className="bg-[#ffffff10] py-1 px-2 text-[#46f0f3] rounded-[14px]">
                      + 10.4%
                    </p>
                  </div>
                  <p className="text-[11px] leading-2 text-white">
                    Data obtained from the last 7days from 1,040 Visitors to
                    2,587 Visitors.
                  </p>
                  <div className="">
                    <div className="w-[100px] h-[7px] bg-[#ffffff] rounded-[6px] absolute" />
                    <div className="w-full h-[7px] bg-[#00000040] relative rounded-[6px]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h1 className="text-[18px] text-white mb-1 mt-[45px]">
        Patients Records Upload
      </h1>
      <div className="w-full mt-[10px]">
        <LineChart
          width={1000}
          height={300}
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          {/* <XAxis dataKey="name" /> */}
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="uploads"
            stroke="#00b4b6"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
        
      <PatientTableData/>


    </div>
  );
}

export default MainContent;
