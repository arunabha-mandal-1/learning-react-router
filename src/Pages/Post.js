import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function Post() {
    // console.log(useParams());
    const {id} = useParams(); // destructing object

    // console.log(useLocation());
    const query = new URLSearchParams(useLocation().search);
    return (
        <h2>
            ID is = {id}
            <br />
            First name = {query.get('first')}
            <br />
            First name = {query.get('last')}
        </h2>
    )
}
