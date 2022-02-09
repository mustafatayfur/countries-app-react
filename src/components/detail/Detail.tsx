/* eslint-disable array-callback-return */
import { FunctionComponent } from 'react';
import { Country } from '../../types';
import { useContinentContext } from '../../context/ContinentContext'
 
const Detail  = ({languages}:{languages: any}) => {
    const {continents} = useContinentContext()
    console.log(continents)
    
    // const newLanguage = languages[0].nam
    // console.log(newLanguage)
    
  return (
  <div>
        {
            continents.map((item)=> item)
            .map((continent,index)=> {
             console.log("continent",continent.name)
               
           
            })
            
            
    
          

        }

  </div>
  );
};

export default Detail;
