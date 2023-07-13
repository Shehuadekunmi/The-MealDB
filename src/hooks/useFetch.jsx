import React, {useState, useEffect} from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  const fetchData = async() =>{
    const res = await fetch(url)
    const response = await res.json();

    setLoading(false);
    setData(response);
  };
  useEffect(() =>{
    fetchData()
  }, [])

  return {data, loading}
  
}

