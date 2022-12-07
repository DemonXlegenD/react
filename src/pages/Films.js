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
import Movies from '../components/Movies';

function Films(){

  
    return(
        <div>
            <Banner>
                <img src={logostreamfy} alt='logo-streamfy' className='lmj-logo' />
            </Banner>
            <NavScroll/>
            <Body>
                <img src={fondecran} alt="films" id="fondecran"/>
                <Movies />
            </Body>
        </div>
        
    )
}

export default Films;