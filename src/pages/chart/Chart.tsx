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
  console.log(continents)
  
  let data: any = [];
 
 

  return (
    <div>
      {
        continents.map((item,index)=> {
          let my_object = {
            name: "",
            numberOfCountry: 0
          }
          my_object.name = item.name
          my_object.numberOfCountry = item.countries.length
          
          data.push(my_object)
        })
        
      }
          <BarChart
      width={800}
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
      
      <Bar dataKey="numberOfCountry" fill="#82ca9d" />
    </BarChart>

    </div>
  );
}

function key(key: any, name: string, length: any) {
  throw new Error('Function not implemented.');
}
