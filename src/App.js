import './App.css';
import Header from './components/Header';
import Greeting from './components/Greeting';
//import Certifications from './components/Certifications';
import Education from './components/Education';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
  return (
    <div className="container" style={styling}>
      <Header/>
      <Greeting/>

      <ScrollAnimation animateIn="fadeBlockIn"   duration="2" animateOnce="true">
      <div id="about" style={{marginTop: '10em'}}><About/></div>
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="fadeBlockIn"   duration="2" animateOnce="true">
      <div id="experience"><Experience/></div>
      </ScrollAnimation>

      {/*<div id="certifications"><Certifications/></div>*/}

      <ScrollAnimation animateIn="fadeBlockIn"   duration="2" animateOnce="true">
      <div id="education"><Education/></div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeBlockIn"   duration="2" animateOnce="true">
      <div id="projects"><Projects/></div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeBlockIn"   duration="2" animateOnce="true">
      <div id="contact"><Contact/></div>
      </ScrollAnimation>
      
      <Footer/>
    </div>
  );
}



const styling = {
  position: 'relative',
  maxWidth: '50em',
}

export default App;
