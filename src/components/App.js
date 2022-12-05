import logostreamfy from '../assets/logostreamfy.png'
import fondecran from '../assets/streamfyfondecran.jpg'
import '../styles/App.css';
import Banner from './Banner';
import Body from './Body';
import '../styles/Body.css'
import NavScroll from './Navbar';


function App() {
  return (
    <div>
      <Banner>
        <img src={logostreamfy} alt='logo-streamfy' className='lmj-logo' />
      </Banner>
      <NavScroll/>
      <Body>
        <img src={fondecran} alt="films" id="fondecran"/>
      </Body>
    </div>
  );
}

export default App;
