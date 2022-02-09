/* eslint-disable array-callback-return */
import { FunctionComponent, Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import { Country } from '../../types';
import { useContinentContext } from '../../context/ContinentContext'
 
const Detail  = ({languages}:{languages: any}) => {
    const {continents} = useContinentContext()
    console.log(continents)
    
    const newLanguage = languages[0].name
    console.log(newLanguage)
    
  return (
  <div>
        {
            continents.map((continent,index)=> {
                return(
                   <ul key={index}>
                       {
                           continent.countries.map((country: { languages: { name: string; }[]; }, index: any)=>{
                               console.log(country.languages[0].name)
                               return(
                                
                                   <li key={index}>{country.languages[0].name}</li>
                               )
                           })
                       }
                   </ul>
                )
            })
        }
  </div>
  );
};

export default Detail;
