import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import '../styles/Cards.css'



function Cards(props){

    const [listMoviesPopular, setListMoviesPopular]= useState([])
    const [listMoviesPopularFiltered, setListMoviesPopularFiltered]= useState([])
    
   
    async function getData() {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${props.category}?api_key=d3994bb5c3f66e144147b5e2130fc60c`)

        console.log("res", res.data);
        setListMoviesPopular(res.data.results);
        setListMoviesPopularFiltered(res.data.results);
        console.log(listMoviesPopular)


    }

    useEffect(() => {
      getData();
    }, []);

    function handleChange(e) {
      if (!e.target.value) {
          setListMoviesPopularFiltered(listMoviesPopular);
        return;
      }
      setListMoviesPopularFiltered(
        listMoviesPopular.filter((film) => film.original_title.includes(e.target.value))
      );
      }

    return(

          
        <div>
            <h1 className="populaire">{props.category}</h1>
            <section className="secards">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                
                
    
              {listMoviesPopularFiltered.map((film) => {
              return(
                  <div key={film.id}>
                    <a href="" className="card">
                    {film.poster_path=="" && <img src="./logostreamfy.png" className="card__image" alt="logo STREAMFY"/>}
                    {film.poster_path!="" && <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.poster_path}`} className="card__image" alt={film.original_title}/>}
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
                  </div>
              ) 
              })} 
               

              
            </section>
        </div>
    )   
}

export default Cards;