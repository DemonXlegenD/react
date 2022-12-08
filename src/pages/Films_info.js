import logostreamfy from '../assets/logostreamfy.png'
import fondecran from '../assets/streamfyfondecran.png'

import Banner from '../components/Banner';
import Body from '../components/Body';
import '../styles/Body.css'
import NavScroll from '../components/Navbar';

import Informations from '../components/Informations';




function Films_info(){
    
    return(
        <div>
            <Banner>
                <img src={logostreamfy} alt='logo-streamfy' className='lmj-logo' />
            </Banner>
            <NavScroll/>
            <Body>
                <img src={fondecran} alt="films" id="fondecran"/>
                <Informations/>

            </Body>
            </div>
        )
    
}

export default Films_info;