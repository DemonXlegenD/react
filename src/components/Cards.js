import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function Cards(props){
  const string = props.string
  
  console.log(string)
    
    const [listMovies, setListMovies]= useState([])
    const [listMoviesFiltered, setListMoviesFiltered]= useState([])
  
    async function getData() {

        const res = await axios.get(`https://api.themoviedb.org/3/movie/${props.category}?api_key=d3994bb5c3f66e144147b5e2130fc60c`)
        console.log("res", res.data);
        setListMovies(res.data.results);
        setListMoviesFiltered(res.data.results)
        console.log("liste", listMovies)
        
    }

    function filtre(){
        if(string != ""){
          setListMoviesFiltered(
          listMovies.filter((film) => film.original_title.includes(string))
        )} else {
          setListMoviesFiltered(listMovies)
          console.log("liste", listMoviesFiltered)
        }
    }

    function addList(){
      
    }

    useEffect(() => {
      getData();
      
    }, []);

    useEffect(() => {
      filtre();
    }, [string]);
    
    
    return(
        <div>
          {listMoviesFiltered.length !=0 && <div>
            <h1 className="populaire">{props.category.toUpperCase()}</h1>
            <section className="secards">
              
              {listMoviesFiltered.map((film) => {
              return(
                  <div key={film.id}>
                    <Link to={`/films/info/${film.id}`}>
                    <a href="" className="card">
                    {film.poster_path =="" && <img src="./logostreamfy.png" className="card__image" alt="logo STREAMFY"/>}
                    {film.poster_path !="" && <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.poster_path}`} className="card__image" alt={film.original_title}/>}
                    <div className="card__overlay">
                      <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        {film.adulte && <img className="card__thumb" src="./moins18.png"  alt="" />}
                        {!film.adulte && <img className="card__thumb" src="./moins3.png"  alt="" />}
                        <div className="card__header-text">
                          <h3 className="card__title">{film.original_title}</h3>            
                          <span className="card__date">{film.release_date}</span>
                        </div>
                      </div>
                      <p className="card__description">{film.overview}</p>
                    </div>
                    </a> 
                    </Link>
                  </div>
              ) 
              })} 
              
               

              
            </section>
            </div>}
        </div>
    )   
}

export default Cards;