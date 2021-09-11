import '../App.css';

const Greeting = (props) => {
    return (
        <body style={{marginBottom: "10%"}}>
            <title>Greetings, welcome to my personal web portfolio</title>
            <div class="fade-in1">
            <h2 style={{marginBottom: '0em', paddingLeft: '1%',color:'var(--highlightText)'}}>Hi, my name is</h2>
            </div>
            <div class="fade-in2">
            <text style={{ fontSize: '7em',  fontFamily: '"Copperplate", fantasy', marginTop: '0em',marginBottom: '0em', padding: "0em" }}>Hans Heje</text>
            </div>
            <div class="fade-in4">
            <text style={{paddingLeft: "1%", fontSize: '1.5em',  fontFamily: '"Copperplate", fantasy', marginTop: '0em',marginBottom: '0em', paddingTop: "0em", paddingBottom: "0em"}}>Stud. Software Engineer</text>
            </div>
            <div class="fade-in3">
            <h2 style={{paddingLeft: '1%'}}>I'm a data enthusiast; cryptology lover; aspiring machine learning engineer. Currently working as an <a href="#experience"><span> associate IT security analyst </span></a> at Januar</h2>
            </div>
        </body>
    )
}



export default Greeting;
