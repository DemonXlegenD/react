import React from "react";
import Cards from "./Cards";


function Movies(){

    const cat = ["popular", "top_rated","upcoming","now_playing"]
   
    return(
          <div>
            <Cards category={cat[0]}/>
            <Cards category={cat[1]}/>
            <Cards category={cat[2]}/>
            <Cards category={cat[3]}/>

          </div>
          



    )
}
export default Movies