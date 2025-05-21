import React, { useEffect, useState } from "react";

function UseCount(){
    var [count,setCount]= useState(10)
    
    function inc(){
        setCount(count+10)
    }
    useEffect(()=>{
       console.log(count) 
    },[]);
    return(
        <div>
           <h1>{count}</h1>
           <button onClick={inc}>Increment</button>
        </div>
    )
}

export default UseCount;