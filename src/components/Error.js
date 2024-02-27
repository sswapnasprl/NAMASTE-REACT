import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops!!!!!!!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status}</h3>
            <h4>{err.statusText}</h4>
            <h4>{err.data}</h4>
        </div> 
     
    )    
}

export default Error;