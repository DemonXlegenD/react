import logostreamfy from '../assets/logostreamfy.png'
import fondecran from '../assets/streamfyfondecran.png'
import Banner from '../components/Banner';
import Body from '../components/Body';
import '../styles/Body.css'
import NavScroll from '../components/Navbar';
import HomeFilms from '../components/HomeFilms';



function Home() {


    return (
        <div>
            <Banner>
                <img src={logostreamfy} alt='logo-streamfy' className='lmj-logo' />

            </Banner>
            <NavScroll />
            <Body>

                <h1 className='card-title'>HOME PAGE</h1>
                <img src={fondecran} alt="films" id="fondecran" />
                
                <HomeFilms/>
            </Body>

        </div>
    )
}

export default Home;