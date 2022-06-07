import { useState, useEffect } from 'react'

import sleep from './sleep'

const createMockDataHook = (getData) => {
  return function useData() {
    const [ cache, setCache ] = useState({
      isLoaded: false,
      data: []
    })
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await sleep(getData)
  
        setCache({
          isLoaded: true,
          data: response
        })
      }
  
      fetchData()
    }, [])
  
    return cache
  }
}

export default createMockDataHook
