import '../App.css';

const Greeting = (props) => {
    return (
        <body style={{marginBottom: "10%"}}>
                  <title>Greetings, welcome to my personal web portfolio</title>
            <div class="fade-in1">
            <h2 style={{marginBottom: '0em', paddingLeft: '1%',color:'var(--highlightText)'}}>Hi, my name is</h2>
            </div>
            <div class="fade-in2">
            <h2 style={{ fontSize: '7em',  fontFamily: '"Copperplate", fantasy', marginTop: '0em',marginBottom: '0em', padding: "0em",color:'var(--importantText)' }}>HANS HEJE</h2>
            </div>
            <div class="fade-in4">
            <text style={{paddingLeft: "1%", fontSize: '1.5em',  fontFamily: '"Copperplate", fantasy', marginTop: '0em',marginBottom: '0em', paddingTop: "0em", paddingBottom: "0em",color:'var(--importantText)'}}>Stud. Computer Science and Engineering</text>
            </div>
            <div class="fade-in3">
            <h2 style={{paddingLeft: '1%'}}>I'm a data enthusiast; cryptology lover; machine learning nerd. Currently working as an <a href="#experience"><span> student software engineer </span></a> at IBM</h2>
            </div>
        </body>
    )
}



export default Greeting;
