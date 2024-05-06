import { useState, useEffect } from "react";

export const useFetchMovies = (url, searchTerm) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setData(json);

        } catch(error){
            setError(error);
        } finally{
            setLoading(false);
        }
        };
        fetchData();
    }, [searchTerm]);
  return { data, loading, error };
};