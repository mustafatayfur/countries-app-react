// import "./styles.css";
import { useContinentContext } from '../../context/ContinentContext'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { useState } from "react";



export default function Chart() {
  // const [name, setName] = useState("")
  // const [uv,setUv] = useState(0)
  const {continents} = useContinentContext()
  let data = [
    {
      name: "",
      uv: 45,
    },
  ];
  // const data = Object.key(continents).map(key => {
  //   return
  // })
   

  return (
    <div>
      {
        
      }
          <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>

    </div>
  );
}