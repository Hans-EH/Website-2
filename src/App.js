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

function App() {
  return (
    <div className="container" style={styling}>
      <Header/>
      <Greeting/>
      <div id="about" style={{marginTop: '10em'}}><About/></div>
      <div id="experience"><Experience/></div>
      <div id="education"><Education/></div>
      {/*<div id="certifications"><Certifications/></div>*/}
      <div id="projects"><Projects/></div>
      <div id="contact"><Contact/></div>
      <Footer/>
    </div>
  );
}



const styling = {
  position: 'relative',
  maxWidth: '50em',
}

export default App;
