import '../styles/Body.css'
import '../styles/Info.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import logostreamfy from '../assets/logostreamfy.png'
import NavScroll from '../components/Navbar';
import Body from '../components/Body';

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
           <Banner>
                <img src={logostreamfy} alt='logo-streamfy' className='lmj-logo' />

            </Banner>
            <NavScroll/>
            <Body>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${films?.poster_path}`} alt="films" id="fondecran"/>
                <div className='info_Movie'>
                    <h1 id='name_Movie'>{films?.original_title}</h1>
                    <h3>{films?.tagline}</h3>
                    {films?.adulte && <img src="./moins18.png"  alt="interdit au moins de 18 ans" />}
                    {!films?.adulte && <img src="./moins3.png"  alt="interdit au moins de 3 ans" />}
                    <p id='overwiew_Movie'><br/><span class='overwiew_Movie'>Overwiew</span> : {films?.overview}</p>
                    <p><br/><span class='release_Movie'>Release date</span> : {films?.release_date}</p>
                    <a href={"/"} target="_blank"><br/><br/><br/><span id="homepage_Movie">Homepage</span></a>
                </div>
            </Body>
        </div>
    )

}

export default Informations;