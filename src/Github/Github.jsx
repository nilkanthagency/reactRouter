import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    return (
        <>
            <p>facebook followers:{data.followers}</p>
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </>
    )
}

export const gitHubData = () => {
    const response = fetch('https://api.github.com/users/facebook').then((res) => res.json()).then((res) => res)
    return response
}

export default Github