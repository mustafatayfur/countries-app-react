import "./Chart.css";
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




export default function Chart() {
  const {continents} = useContinentContext()
  console.log(continents)
  
  let data: any = [];
 
 

  return (
    <div className='chart'>
      <h2>Country numbers of continents</h2>
      {
        // eslint-disable-next-line array-callback-return
        continents.map((item,index)=> {
          let my_object = {
            name: "",
            countryNumber: 0
          }
          my_object.name = item.name
          my_object.countryNumber = item.countries.length
          
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
      
      <Bar dataKey="countryNumber" fill="#82ca9d" />
    </BarChart>

    </div>
  );
}


