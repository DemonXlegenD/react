import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { CardGroup } from "react-bootstrap";
import '../styles/HomeFilms.css'


function HomeFilms() {

    //Page Home avec beaucoups de films affichés pour présenter un peu le contenu du site
    const [listMovies1, setListMovies1]= useState([])
    const [listMovies2, setListMovies2]= useState([])
    const [listMoviesFiltered1, setListMoviesFiltered1]= useState([])
    const [listMoviesFiltered2, setListMoviesFiltered2]= useState([])
  
    async function getData() {

        const res1 = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=d3994bb5c3f66e144147b5e2130fc60c`)
        setListMovies1(res1.data.results);
        setListMoviesFiltered1(res1.data.results)
        const res2 = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=d3994bb5c3f66e144147b5e2130fc60c`)
        setListMovies2(res2.data.results);
        setListMoviesFiltered2(res2.data.results)
        
    }
    
    useEffect(() => {
        getData();
        
      }, []);

    return (
        <div>
            <CardGroup className="cardgroup">
            {listMoviesFiltered1.map((film) => {
                 return (
                     <div key={film.id}>
                         <Card style={{ width: '18rem' }}>
                             <Card.Img variant="top"  />
                             <Card.Body>
                                 <Card.Title>{film.original_title}</Card.Title>
                                 <Card.Text>
                                 <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.poster_path}`}/> 
                                 </Card.Text>
                                 <Button><Link to={`/films/info/${film.id}`}>Informations</Link></Button>
                             </Card.Body>
                         </Card>
                     </div>
                    )
                }

                )
            }
            {listMoviesFiltered2.map((film) => {
                 return (
                     <div key={film.id}>
                         <Card style={{ width: '18rem' }}>
                             <Card.Img variant="top"  />
                             <Card.Body>
                                 <Card.Title>{film.original_title}</Card.Title>
                                 <Card.Text>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.poster_path}`}/> 
                                 </Card.Text>
                                 <Button><Link to={`/films/info/${film.id}`}>Informations</Link></Button>
                             </Card.Body>
                         </Card>
                     </div>
                    )
                }

                )
            }
            </CardGroup>
        </div>
    )
}

export default HomeFilms;