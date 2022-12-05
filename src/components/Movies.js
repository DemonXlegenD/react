import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import '../styles/Movies.css'



function Movies(){

    const [listMovies, setListMovies]= useState([])
    const [listMoviesImages, setListMoviesImages]= useState([])
    const [listMoviesFiltered, setListMoviesFiltered]= useState([])

    async function getData() {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=d3994bb5c3f66e144147b5e2130fc60c")
        
        console.log("res", res.data);
        setListMovies(res.data.results);
        setListMoviesFiltered(res.data.results);
        console.log(listMovies)
     
    }
    console.log(listMovies)

    useEffect(() => {
      getData();
    }, []);

    function handleChange(e) {
      if (!e.target.value) {
          setListMoviesFiltered(listMovies);
        return;
      }
      setListMoviesFiltered(
        listMovies.filter((film) => film.original_title.includes(e.target.value))
      );
      }
    return(
        <div>
            <input onChange={handleChange} type="text" />
            {listMoviesFiltered.map((film) => {
            return(
                <div className="row">
                    <p key={film.id}>{film.original_title}</p>
                    <img src={axios.get(`https://api.themoviedb.org/3/movie/${film.id}/images?api_key=d3994bb5c3f66e144147b5e2130fc60c&language=en-US`)}/>
                </div>
            )
          })}
        </div>
    )
}
export default Movies