import "tailwindcss/tailwind.css";
import { LineChar } from "@/components/lineChar";
import '../app/globals.css'

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";
import chartData from "../data/data.jsx";
import PieData from "@/data/pieData.jsx";

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Dashboards = () => {
  const COLORS = ["#EE8484", "#F6DC7D", "#98D89E"];
  return (
    <div className="h-screen w-screen color-primary-white p-5 flex flex-row">
      <div className="bg-black h-full w-1/5 rounded-lg mr-3 p-10 flex flex-col text-white">
        <p className="my-5 text-4xl">Board.</p>
        <div className="flex-1">
          <div className="text-lg mb-2">Dashboard</div>
          <div className="text-lg mb-2">Transaction</div>
          <div className="text-lg mb-2">Scheudle</div>
          <div className="text-lg mb-2">Users</div>
          <div className="text-lg mb-2">Settings</div>
        </div>
        <div>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="h-full flex-1 rounded-lg p-6 flex flex-col">
        <div className="flex">
          <div className="flex-1 font-bold">Dashbaord</div>
          <div className="flex">
            <input
              type="text"
              className="bg-white py-1/2 pl-3"
              placeholder="Search"
            />
            <div className="mx-2">Icon 1</div>
            <div className="mx-2">Icon 2</div>
          </div>
        </div>
        <div className="flex h-1/5">
          <div className="bg-red-400 flex-1 my-3 mr-6 flex-col p-3 rounded-lg">
            <div className="flex-1 justify-end w-full flex pr-5">Icon</div>
            <div>total Revenue</div>
            <div className="font-bold">3,83,484</div>
          </div>
          <div className="bg-red-400 flex-1 my-3 mr-6 flex-col p-3 rounded-lg">
            <div className="flex-1 justify-end w-full flex pr-5">Icon</div>
            <div>total Transaction </div>
            <div className="font-bold">3,83,484</div>
          </div>
          <div className="bg-red-400 flex-1 my-3 mr-6 flex-col p-3 rounded-lg">
            <div className="flex-1 justify-end w-full flex pr-5">Icon</div>
            <div>total Likes</div>
            <div className="font-bold">3,83,484</div>
          </div>
          <div className="bg-red-400 flex-1 my-3 mr-6 flex-col p-3 rounded-lg">
            <div className="flex-1 justify-end w-full flex pr-5">Icon</div>
            <div>total Users</div>
            <div className="font-bold">3,83,484</div>
          </div>
        </div>
        <div className="w-full h-1/2 bg-white rounded-lg my-2" style={{ position: "relative" }}>
          <ResponsiveContainer
            width="100%"
            height="100%"
            style={{ position: "relative" }}
          >
            <LineChart
              style={{ position: "relative" }}
              width={600}
              height={400}
              data={chartData}
              margin={{
                left: 0,
              }}
            >
              <Line
                type="monotone"
                dataKey="Guest"
                stroke="#9BDD7C"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="User"
                stroke="#E9A0A0"
                strokeWidth={3}
              />
              <CartesianGrid stroke="#EAEAEA" vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={{ stroke: "#EAEAEA" }}
                tick={{ fill: "#858585" }}
              />
              <YAxis axisLine={false} tick={{ fill: "#858585" }} />
              <Tooltip />
              <Legend className="LegendLineChart" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="h-1/3 w-full flex justify-start flex-row my-2">
          <div className="h-full w-1/4 bg-green-700 p-3 rounded-lg rounded-e-none bg-white text-black">
            <p className="font-bold text-lg ml-3">Top Products</p>
            <ResponsiveContainer height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={PieData}
                  // cx="50%"
                  // cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {PieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-col w-1/4 bg-white text-black rounded-s-none rounded-lg p-2">
            <p className="flex justify-end pr-3">May - June 2021 </p>
            <div className="flex">
              <div className="pieColorFirst w-5 h-5 rounded-3xl circle mr-3"></div>
              <div>
                <p className="font-bold text-lg">Basic Tees</p>
                <p>60%</p>
              </div>
            </div>
            <div className="flex">
              <div className="pieColorSecond w-5 h-5 rounded-3xl circle mr-3"></div>
              <div>
                <p className="font-bold text-lg">Custom short pants</p>
                <p>10%</p>
              </div>
            </div>
            <div className="flex">
              <div className="pieColorThird w-5 h-5 rounded-3xl circle mr-3"></div>
              <div>
                <p className="font-bold text-lg">Super Hoodies</p>
                <p>30%</p>
              </div>
            </div>
          </div>
          <div className="bg-white flex-1 flex ml-2 rounded-lg text-black flex-col p-5">
            <div className="flex flex-row justify-between w-full ">
              <p>Todays Schedule </p>
              <p>see all</p>
            </div>
            <div className="border-t-none border-l-4 border-green-600 p-1 m-1 text-sm">
              <p>meeting with suppliers from kutu bali</p>
              <p>14:00 to 15:00</p>
              <p>At sunset road kutu bali</p>
            </div>
            <div className="border-t-none border-l-4 border-green-600 p-1 m-1 text-sm">
              <p>meeting with suppliers from kutu bali</p>
              <p>14:00 to 15:00</p>
              <p>At sunset road kutu bali</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboards;
