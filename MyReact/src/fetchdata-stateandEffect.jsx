import React, { useEffect, useState } from "react";

function StateandEffect(){
    var [data,setData]=useState([])
    console.log(data)
    function fetchdata(){
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setData(data));
    }
    
    useEffect(()=>{
      fetchdata()
    },[])
    return(
        <div>
            {
                data.map((item)=>{
                    return(
                        <div>
                            <h1>{item.id}</h1>
                        </div>

                    )
                })
            }
            
        </div>
    )
}

export default StateandEffect;