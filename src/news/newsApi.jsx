import {useEffect, useState} from "react";

export function useData() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const apiKey = '9ed75077aadd4787807280206139aa05'
    useEffect(() => {
        async function fetchData() {
            setError('')

            const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`)
                .then((res) => res.json())
                .catch((error) => {
                    const msg = error.message
                    setError(msg)
                })
            setLoading(true)
            setData(response.articles)
        }

        fetchData();
    }, [])

    return [data];
}
