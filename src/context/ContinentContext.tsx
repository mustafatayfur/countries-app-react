import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {Continent,Data} from '../types'

interface IDataProps {
    children: ReactNode
}



export const ContinentContext = createContext<Data>({} as Data);

export function useContinentContext() {
    return useContext(ContinentContext);
}

const LAUNCHES_QUERY = `
{
        continents{
          name
          countries{
            name
            capital
            emojiU
            languages{
              name
            }
          }
        }
    }
`
const ContinentContextProvider = (
    { children }: IDataProps 
) => {
    const [continents, setContinents] = useState<Continent[]>([])

    useEffect(()=> {
        fetch('https://countries.trevorblades.com/graphql', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({query: LAUNCHES_QUERY })
        }).then(response => response.json())
        .then(data => setContinents(data.data.continents))
    },[])
    console.log(continents)
   
    


      return <ContinentContext.Provider value={{continents}}>{children}</ContinentContext.Provider>;
}
export default ContinentContextProvider;