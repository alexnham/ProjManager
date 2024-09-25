import {useState, useEffect} from 'react';

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errorMessage, setError] = useState(null);


    useEffect(() => {
        fetch(endpoint)
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch data');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false)
                setData(data);
            })
            .catch(e => {
                setIsPending(false)
                setError(e.message);
            })
    }, [endpoint]);
    return {data, isPending, errorMessage}
}
export default useFetch