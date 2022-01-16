import React from 'react'
import { useParams } from 'react-router-dom'
export default function Users() {
    const params = useParams()
    return (
        <div>
            username : {params.Invoicd}
        </div>
    )
}
