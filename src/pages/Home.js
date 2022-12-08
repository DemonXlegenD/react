
import logostreamfy from '../assets/logostreamfy.png'
import fondecran from '../assets/streamfyfondecran.png'

import Banner from '../components/Banner';
import Body from '../components/Body';
import '../styles/Body.css'
import NavScroll from '../components/Navbar';
import RandomFilms from '../components/RandomFilms';



function Home() {


    return (
        <div>
            <Banner>
                <img src={logostreamfy} alt='logo-streamfy' className='lmj-logo' />

            </Banner>
            <NavScroll />
            <Body>
                <img src={fondecran} alt="films" id="fondecran" />
                
                {/* <RandomFilms/> */}
            </Body>

        </div>
    )
}

export default Home;