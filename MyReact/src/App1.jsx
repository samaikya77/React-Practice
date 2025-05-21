import React from "react";

function App1(){
    var result=false
    return(
        <div>{
          result ? <h1>H1 tag</h1> : <p>P tag</p>
        }
        </div>
    )
}

export default App1;