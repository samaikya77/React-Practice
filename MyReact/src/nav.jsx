import React, { useState } from "react";


function Nav(){
    var [cars,setCars]= useState({
        car1:"benz",
        car2:"audi",
        model1:2019,
        model2:2020
    })
    return(
        <div>
            <h1>my car is {cars.car1} and the model is {cars.model2}</h1>
            
        </div>
    )
}

export default Nav;