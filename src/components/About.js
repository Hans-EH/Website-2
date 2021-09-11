import "../App.css";

const About = () => {
  return (
    <body>
        <title>Who am I?</title>
      <h1 style={{ marginBottom: "0%" }}>
        <span>01.</span> About me
      </h1>

      <div class="row">
        <div class="column">
          <h3> [PLEASE INSERT DESCRIPTIVE TEXT]</h3>
        </div>
        <div class="column">
          <div class="image-holder">
            <br clear="left" />
            <img
              src="/images/me.jpg"
              alt=""
              style={{ width: "100%", borderRadius: "20%" }}
            />
          </div>
        </div>
      </div>
    </body>
  );
};

//const Colors = {
//    color: 'red',
//    backgroundColor: 'black'
//}

export default About;
