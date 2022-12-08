import { useEffect, useState } from 'react';
import logostreamfy from '../assets/logostreamfy.png'
import fondecran from '../assets/streamfyfondecran.png'
import Banner from '../components/Banner';
import Body from '../components/Body';
import '../styles/Body.css'
import NavScroll from '../components/Navbar';
import '../styles/Cards.css'
import Movies from '../components/Movies';

function Films(){

    const [string, setString] = useState("")
    console.log(string)
  
    return(
        <div>
            <Banner>
                <img src={logostreamfy} alt='logo-streamfy' className='lmj-logo' />
            </Banner>
            <NavScroll string={string} setString={setString}/>
            <Body>
                <img src={fondecran} alt="films" id="fondecran"/>
                <Movies string={string} setString={setString}/>
            </Body>
        </div>
        
    )
}

export default Films;