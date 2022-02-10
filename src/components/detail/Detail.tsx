import { Country } from '../../types';
import { useContinentContext } from '../../context/ContinentContext'
import { useLocation } from 'react-router-dom';
 
const Detail  = () => {

  const  {state}: any= useLocation()
  const {item}: {item: Country} = state
  const itemName = item?.languages[0]?.name
  console.log(item.languages[0].name)


    const {continents } = useContinentContext()
    const newContinents = continents.map((continent)=> continent.countries)
    console.log(newContinents)

    const newName = continents.map((continent)=> continent.name)
    console.log(newName)
  
    const filteredcountryName = newContinents?.map((countries)=> countries.filter((country: { languages: { name: string; }[]; })=> country?.languages[0]?.name === itemName))
    console.log(filteredcountryName)
    
  return (
  <div>
    <h1>Countries that speak the same language</h1>
      {newName.map((name1, index1)=>{
          return (
            <div>
                <h4 key={index1}>{name1}</h4>
                {
                  filteredcountryName[index1].map((country: Country, index2: any)=> {
                    return(
                      <li key={index2}>{country.name}</li>
                    )
                  })
                  
                }
               
            </div>
            
          )
      })}
  </div>
  );
}
export default Detail;

