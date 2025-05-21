import React from "react";
import Products from "./products";

function App(){
 return(
    <div>
      {
        Products.map((item)=>{
          return(
            <div>
              <h1>{item.id}</h1>
              <h2>{item.name}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;