import React from "react";

function Use(){
    var [color,setColor]= useState("red")
    function Change(){
        setColor("blue")
    }
    return(
        <div>
            <h1>I am the {color} color</h1>
            <button onClick={Change}>Change color</button>
            <button onClick={()=>(setColor("yellow"))}>Change color</button>
        </div>
    )
}

export default Use;