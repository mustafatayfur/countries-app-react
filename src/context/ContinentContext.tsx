import { createContext, useContext, useEffect, useState } from "react";
import { Data }from '../types'


export const ContinentContext = createContext<Data[]>([]);;

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
    const [continents, setContinents] = useState([])

    useEffect(()=> {
        fetch('https://countries.trevorblades.com/graphql', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({query: LAUNCHES_QUERY })
        }).then(response => response.json())
        .then(data => setContinents(data))
    },[])

    const values = {
        continents
      };

      return <ContinentContext.Provider value={values}>{children}</ContinentContext.Provider>;
}
export default ContinentContextProvider;