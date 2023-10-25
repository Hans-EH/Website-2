import './App.css';
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Greeting from './components/Greeting';
import Certifications from './components/Certifications';
import Education from './components/Education';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import Natascha from './components/Natascha';


function App() {
  const [secretPassword] = useState("9290238a8641a0ca91bf64ce61c5eeb897190cd5428855a81bf9aa43bcc15274");
  const [password, setPassword] = useState("placeholderpassword");

  const [showNatascha, setShowNatascha] = useState(false);
  useEffect(() => {
    const currentUrl = window.location.href;
    const isNataschaUrl = currentUrl.endsWith("nans")
    setShowNatascha(isNataschaUrl);

  }, []);
  const crypto = require('crypto');
  function hashString(inputString, algorithm) {
    const hash = crypto.createHash(algorithm);
    hash.update(inputString);
    return hash.digest('hex');
  }
  const algorithm = 'sha256';

  return (
    <div>
      {showNatascha ? <>
        {hashString(password, algorithm) !== secretPassword ?
          <form style = {{display:"flex",marginTop:"25vh"}}>
            <label >
            <h1 style={{float:"center"}}>Natascha + Hans = Nans {"<3"}</h1>

              Enter Password
              <br />
              <input type="password"
                name="Enter Password"
                placeholder="Hint, noget du altid glemmer ;)"
                onChange={e => setPassword(e.target.value)}
              />
            </label>
          </form> :
          <Natascha />}
          </>: 

      <div className="container" style={styling}>
        <Header />
        <div style={{ marginBottom: "10rem" }}><Greeting /></div>

        <ScrollAnimation animateIn="fadeBlockIn" style={margin} duration="2" animateOnce="true" offset="300">
          <div id="about" ><About /></div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeBlockIn" style={margin} duration="2" animateOnce="true" offset="300">
          <div id="experience"><Experience /></div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeBlockIn" style={margin} duration="2" animateOnce="true" offset="300">
          <div id="certifications"><Certifications /></div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeBlockIn" style={margin} duration="2" animateOnce="true" offset="300">
          <div id="education"><Education /></div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeBlockIn" style={margin} duration="2" animateOnce="true" offset="300">
          <div id="projects"><Projects /></div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeBlockIn" style={margin} duration="2" animateOnce="true" offset="300">
          <div id="contact"><Contact /></div>
        </ScrollAnimation>

        <Footer />
      </div>}
    </div>
  );
}



const styling = {
  position: 'relative',
  maxWidth: '53rem',
  paddingLeft: "1.5%",
  paddingRight: "1.5%"

}

const margin = {
  marginBottom: '10rem',
}

export default App;
