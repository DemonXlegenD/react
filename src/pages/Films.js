import { useEffect, useState } from 'react';
import axios from 'axios';
import logostreamfy from '../assets/logostreamfy.png'
import fondecran from '../assets/streamfyfondecran.jpg'
import '../styles/App.css';
import Banner from '../components/Banner';
import Body from '../components/Body';
import '../styles/Body.css'
import NavScroll from '../components/Navbar';
import '../styles/Cards.css'

function Films(){

    const [listMovies, setListMovies]= useState([])
    const [listMoviesFiltered, setListMoviesFiltered]= useState([])

    async function getData() {
        const res = await axios.get(`https://api.themoviedb.org/3/movie?api_key=d3994bb5c3f66e144147b5e2130fc60c`)

        console.log("res", res.data);
        setListMovies(res.data.results);
        setListMoviesFiltered(res.data.results);
        console.log(listMovies)


    }

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
            <Banner>
                <img src={logostreamfy} alt='logo-streamfy' className='lmj-logo' />
            </Banner>
            <NavScroll/>
            <Body>
                <img src={fondecran} alt="films" id="fondecran"/>
                
            
            <div>
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
                
                
    
              {listMoviesFiltered.map((film) => {
              return(
                  <div key={film.id}>
                    <a href="" className="card">
                    <img src="./logostreamfy.png" className="card__image" alt="" />
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
              {/* {(axios.get(`https://api.themoviedb.org/3/movie/${film.id}/images?api_key=d3994bb5c3f66e144147b5e2130fc60c)`))} */}

              
            </section>
        </div>
        
        
        </Body>
        </div>
        
    )
}

export default Films;