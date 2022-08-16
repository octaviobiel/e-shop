import { useEffect, useState } from 'react'

const URL = 'https://fake-products-eric.herokuapp.com/api/products/';

const useFetch = (endpoint) => {
    
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const getData = async () => {
            const path = endpoint ? `${URL}${endpoint}` : URL;
            try {
                const info = await fetch(path);
                const response = await info.json();
                
                setData(response);
            } catch (error) {
                setError(error);
            }
        };
        getData();
    }, [endpoint]);

    return {data, error};
}

export default useFetch