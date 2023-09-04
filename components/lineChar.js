import { LineChart, Line } from "recharts";
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
} from "recharts";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

const LineChar = (
  // <LineChart width={400} height={400} data={data}>
  //   <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  // </LineChart>
  <BarChart
    width={500}
    height={300}
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
    <Bar dataKey="pv" fill="#8884d8" />
    <Bar dataKey="uv" fill="#82ca9d" />
  </BarChart>
);
export default LineChar;
