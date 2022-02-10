/* eslint-disable array-callback-return */
import { FunctionComponent, Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import { Country,Language } from '../../types';
import { useContinentContext } from '../../context/ContinentContext'
import { useLocation } from 'react-router-dom';
 
const Detail  = ({languages}:{languages: any}) => {

  const location= useLocation()
  console.log(location.state)
  // const recipe = location.state.item

    const {continents } = useContinentContext()
    const newContinents = continents.map((continent)=> continent.countries)
    console.log(newContinents)
    const newName = continents.map((continent)=> continent.name)
    console.log(newName)
    const newCountries = newContinents.map((countries)=> countries)
    console.log(newCountries)

    
    // const newLanguage = languages[0]
    // console.log(newLanguage)
    
  return (
  <div>
      {newName.map((name1, index1)=>{
          return (
            <ul key={index1}>{name1}</ul>
          )
      })}
      
        {

            // newContinents.map((countries)=> {
            //     console.log(countries)
            // }
                
            //.filter((country:  { languages: { name: string; }[] })=>
            //country.languages[0].name === newLanguage
    
        }
  </div>
  );
};

export default Detail;
