import '../styles/Body.css'
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

function Informations(){

    let { id } = useParams();
    const [film, setFilm] = useState(null);
    const [films, setFilms] = useState(null);
      
    
      
    async function getData() {
        const film = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d3994bb5c3f66e144147b5e2130fc60c`);
        setFilm(film.data);
        setFilms(film.data)
    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <div>
            <p>Nom : {films?.original_title}</p>
            <p>Type : {films?.overview}</p>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${films?.poster_path}`} />
        </div>
    )

}

export default Informations;