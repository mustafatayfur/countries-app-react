import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {Continent,Country,Data, Language} from '../types'

interface IDataProps {
    children: any
}
interface setLang {
  setLanguage1: (input: Language) => void
  language1: Language[]
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
    const [languages1, setLanguages1] = useState<setLang>()

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