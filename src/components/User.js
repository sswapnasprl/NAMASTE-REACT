import { useEffect, useState } from "react";

const User = (props) => {
    const {name, location, contact} = props;
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('UseEffect Timer');
        },1000)
        return()=>{
            clearInterval(timer);
        }
    },[]);

    return(
        <div class = "user-card">
            <p>Count : {count}</p>
            <button type="button" onClick={()=>{
                setCount(count + 1);
            }}>
            Increment Count
            </button>

            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h3>Contact: {contact}</h3>
        </div>
    )
}

export default User;