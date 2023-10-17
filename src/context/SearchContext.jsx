import { createContext, useState } from "react"; 

export const SearchContext = createContext() 


export default function SearchContextProvider({ children }) { 
  
    const [search, setSearch] = useState("")

    const dataSearch = {
        search,
        setSearch
    }

    return <SearchContext.Provider value={dataSearch}>{children}</SearchContext.Provider>
}
