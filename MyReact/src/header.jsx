import React from "react";
import Footer from "./footer";

function Header(){
    var message="Samaikya"
    return (
        <div>
           <Footer data={message}/>
        </div>
    )
}

export default Header;