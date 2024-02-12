import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/Cartes.css'



function Cards({mine, setMine, string, rangeValue1, rangeValue2, rangeValue3, category}){

  //affiche les films sous formes de cartes déroulantes
    const [myList, setMyList] = useState(JSON.parse(localStorage.getItem("list")) || []);
    const [listMovies, setListMovies]= useState([])
    const [listMoviesFiltered, setListMoviesFiltered]= useState([])
    const [val, setVal] = useState("");
  
    async function getData() {

        const res = await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=d3994bb5c3f66e144147b5e2130fc60c`)
        setMyList(myList)
        setListMovies(res.data.results);
        setListMoviesFiltered(res.data.results)
       
    }
   

    function filtre(){
        if(string != ""){
          setListMoviesFiltered(
          listMovies.filter((film) => film.original_title.includes(string) && film.popularity >= rangeValue3 && film.vote_count >= rangeValue2 && film.vote_average >= rangeValue1
          )
        )} else {
          setListMoviesFiltered(listMovies.filter((film) => film.popularity >= rangeValue3 && film.vote_count >= rangeValue2 && film.vote_average >= rangeValue1))
        }
    }

    function handleSubmit(e, film) {
      e.preventDefault()
      if(!myList.includes(film)){
        const tmpVal = film
        const tmpList =[...myList, tmpVal ] 
        setMyList(tmpList);
        setVal("")
        localStorage.setItem("list", JSON.stringify(tmpList))
        setMine(JSON.parse(localStorage.getItem("list")))
      }
      
    }


    useEffect(() => {
      getData(); 
      setMine(JSON.parse(localStorage.getItem("list")) || []   ) 
    }, []);

    useEffect(() => {
      filtre();
    }, [string, rangeValue1, rangeValue2, rangeValue3]);
    
    
    return(
        <div>
          {listMoviesFiltered.length !=0 && <div>
            <h1 className="populaire title">{category.toUpperCase()}</h1>
            <section className="secards">
              
              {listMoviesFiltered.map((film) => {
              return(
                  <div key={film.id}>
                    <div>
                    <Link to={`/films/info/${film.id}`}>
                    <a href="" className="card_">
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
                       <button onClick={(e)=>handleSubmit(e, film)} value={film} type="submit" className="button_add_movie">+</button>
                      </div>
                    </div>
                    </a> 
                    </Link>
                    </div>
                  </div>
              ) 
              })} 
            </section>
            </div>}
            
        </div>
    )   
}

export default Cards;