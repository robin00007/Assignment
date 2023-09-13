"use client";
import "tailwindcss/tailwind.css";
import { LineChar } from "@/components/lineChar";
import "../app/globals.css";
import data from "../data/data.jsx";
import { FaRegBell } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { BsFillTagsFill } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BsCalendar2DateFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import chartData from "../data/data.jsx";
import PieData from "@/data/pieData.jsx";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Model from "@/components/model";

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
  const router = useRouter();
  const { data: session, status } = useSession();
  const [model, setModel] = useState(false);
  const [userData, setUserData] = useState(null);
  const COLORS = ["#EE8484", "#F6DC7D", "#98D89E"];
  console.log(session);
  return (
    <div className="h-screen w-screen color-primary-white p-5 flex flex-row">
      <div className="bg-primary h-full w-1/5 rounded-lg mr-3 p-10 flex flex-col text-white">
        <p className="my-5 text-4xl">Board.</p>
        <div className="flex-1">
          <div className="text-lg mb-2 flex items-center">
            <RxDashboard style={{ marginRight: "15px" }} />
            Dashboard
          </div>
          <div className="text-lg mb-2 flex items-center">
            <BsFillTagsFill style={{ marginRight: "15px" }} />
            Transaction
          </div>
          <div className="text-lg mb-2 flex items-center">
            <BsCalendar2DateFill
              style={{ marginRight: "15px" }}
              fill="white"
              stroke="white"
              color="white"
            />
            Scheudle
          </div>
          <div className="text-lg mb-2 flex items-center">
            <GoPeople style={{ marginRight: "15px" }} />
            Users
          </div>
          <div className="text-lg mb-2 flex items-center">
            <AiFillSetting style={{ marginRight: "15px" }} />
            Settings
          </div>
        </div>
        <div>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="h-full flex-1 rounded-lg p-6 flex flex-col">
        <div className="flex">
          <div className="flex-1 font-bold text-black">Dashbaord</div>
          <div className="flex items-center">
            <input
              type="text"
              className="bg-white py-1/2 pl-3"
              placeholder="Search"
            />
            <div className="mx-2">
              <FaRegBell fill="black" />
            </div>
            {session?.user?.image && (
              <img src={session.user.image} className="mx-2 h-6 rounded-full" />
            )}
          </div>
        </div>
        <div className="flex h-1/5">
          <div className="bg-white text-black flex-1 my-3 mr-6 flex-col p-3 rounded-lg">
            <div className="">
              <BsCashCoin size={"2em"} color="#7FCD93" />
            </div>
            <div>total Revenue</div>
            <div className="font-bold">3,83,484</div>
          </div>
          <div className="bg-white text-black flex-1 my-3 mr-6 flex-col p-3 rounded-lg">
            <div className="flex-1 w-full flex pr-5">
              <BsFillTagsFill size={"2em"} color={"#DEBF85"} />
            </div>
            <div>total Transaction </div>
            <div className="font-bold">3,83,484</div>
          </div>
          <div className="bg-white text-black flex-1 my-3 mr-6 flex-col p-3 rounded-lg">
            <div className="flex-1 w-full flex pr-5">
              <BsHandThumbsUp
                size={"2em"}
                color="
#ECA4A4"
              />
            </div>
            <div>total Likes</div>
            <div className="font-bold">3,83,484</div>
          </div>
          <div className="bg-white text-black flex-1 my-3 flex-col p-3 rounded-lg">
            <div className="flex-1 w-full flex pr-5">
              <GoPeople size={"2em"} color="#A9B0E5" />
            </div>
            <div>total Users</div>
            <div className="font-bold">3,83,484</div>
          </div>
        </div>
        <div
          className="w-full h-1/2 bg-white rounded-lg my-2"
          style={{ position: "relative" }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width="100%"
              height="300"
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Guest" fill="#98D89E" barSize={30} />
              <Bar dataKey="User" fill="#EE8484" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-1/3 w-full flex justify-start flex-row my-2">
          <div className="h-full w-1/4 bg-green-700 p-3 rounded-lg rounded-e-none bg-white text-black">
            <p className="font-bold text-lg ml-3">Top Products</p>
            <ResponsiveContainer height="100%">
              <PieChart width={350} height={350}>
                <Pie
                  data={PieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={75}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      styles={{ borderRadius: "20px !important" }}
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
            <div className="h-full w-full flex justify-center items-center flex-col">
              {userData ? (
                <>
                  <p className="text-2xl w-full flex flex-col justify-start py-4">
                    {userData?.name}
                  </p>
                  <div className="flex w-full flex">
                    <p className="mr-4">{userData?.email}</p>
                    <p>{userData?.phone}</p>
                  </div>
                </>
              ) : (
                <button
                  className="font-semibold my-4 text-sm text-gray-500"
                  onClick={() => {
                    setModel(!model);
                  }}
                >
                  Add Profile
                </button>
              )}

              {model && (
                <Model
                  model={model}
                  setModel={setModel}
                  userData={userData}
                  setUserData={setUserData}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboards;
