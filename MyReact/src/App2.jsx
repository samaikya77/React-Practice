import React from "react";

function App2(){
    var result=true
    var output
    if(result){
        output= <h1>Hello world</h1>
    }else{
        output= <h1>Hello India</h1>
    }
    return(
        <div>
            <h1>{output}</h1>
        </div>
    )
}

export default App2;