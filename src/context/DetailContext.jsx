import { createContext, useState } from "react"; 

export const DetailContext = createContext() 


export default function DetailContextProvider({ children }) { 
  
    const [showDetail, setShowDetail] = useState(false)

    function handleShowDetail(value) {
        setShowDetail(value)
    }

    const data = {
        showDetail,
        setShowDetail,
        handleShowDetail
    }

    return <DetailContext.Provider value={data}>{children}</DetailContext.Provider>
}
