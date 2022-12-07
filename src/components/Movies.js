import React from "react";
import Cards from "./Cards";


function Movies(props){

    const cat = ["popular", "top_rated","upcoming","now_playing"]
   
    return(
          <div>
            <Cards listMovieFiltered={props.listMovieFiltered} category={cat[0]}/>
            <Cards listMovieFiltered={props.listMovieFiltered}  category={cat[1]}/>
            <Cards listMovieFiltered={props.listMovieFiltered}  category={cat[2]}/>
            <Cards listMovieFiltered={props.listMovieFiltered}  category={cat[3]}/>

          </div>
          



    )
}
export default Movies