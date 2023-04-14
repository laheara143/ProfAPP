import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //Change API Below to Custom API and change api key in file env
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": '8bb63228aamsh314fc9f8c0fa2b9p131e58jsn8b91faa28062',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
        const response = await axios.request
        (options);

        setData(response.data.data);
        setIsLoading(false)
    } catch (error){
        setError(error);
        alert('There is an error')
    } finally {
        isLoading(false);
    }
  }

  useEffect(() => {
    fetchData();  
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch};

};

export default useFetch;