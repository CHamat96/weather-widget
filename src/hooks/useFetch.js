import { useState, useEffect } from 'react'

const appid = process.env.REACT_APP_API_KEY

export default function useFetch(endpoint, location){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fetchData = async() => {
            const url = new URL(`https://api.openweathermap.org/data/2.5/${endpoint}`)
            url.search = new URLSearchParams({
                q:location,
                appid,
                units: 'metric'
            })
            const response = await fetch(url)
            if(!response.ok){
                setLoading(false)
                throw new Error(`Please only select one of the three cities listed`)
            }
            const apiData = await response.json()
            if(apiData){
                setData(apiData)
                setLoading(false)
            }
        }
        fetchData()
        .catch((err) => {
            setError(err)
        })
    }, [endpoint, location])

    return { data, loading, error }
}