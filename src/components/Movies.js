import React from "react";
import Cards from "./Cards";
import { useState } from "react";



function Movies({string, setString}){

    const cat = ["popular", "top_rated","upcoming","now_playing"]
    
    console.log(string)
    
    return(
      <div>
        <Cards  string={string}  setString={setString} category={cat[0]}/>
        <Cards   string={string} setString={setString} category={cat[1]}/>
        <Cards   string={string} setString={setString} category={cat[2]}/>
        <Cards   string={string} setString={setString} category={cat[3]}/>
      </div>
    )
}
export default Movies