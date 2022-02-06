import { createContext, useContext, useEffect, useState } from "react";
import { Data }from '../types'


export const ContinentContext = createContext({});;

export function useContinentContext() {
    return useContext(ContinentContext);
}

const LAUNCHES_QUERY = `
{
    continents{
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
    props:React.PropsWithChildren<{}>
): JSX.Element => {
    const [continents, setContinents] = useState<Data[]>([])

    useEffect(()=> {
        fetch('https://countries.trevorblades.com/graphql', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({query: LAUNCHES_QUERY })
        }).then(response => response.json())
        .then(data => setContinents(data))
    },[])
    console.log(continents)
    const values = {
        continents,
        
    };


      return <ContinentContext.Provider value={values}>{props.children}</ContinentContext.Provider>;
}
export default ContinentContextProvider;