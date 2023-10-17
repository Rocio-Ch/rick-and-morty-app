import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function useDataCharacters() {

  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const getData = async (url) => {
    try {
      const { data } = await axios.get(url)
        setData(data)
        setTotalPages(data.info?.pages)
    } catch (error) {
        navigate("/no-results")
        
    }
  }
   
  return { getData, setCurrentPage, data, totalPages, currentPage }
}