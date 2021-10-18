import "../App.css";

const About = () => {
  return (
    <body>
      <title>Who am I?</title>
      <h1 style={{ marginBottom: "0%" }}>
        <span>01.</span> About me
      </h1>

      <div class="row">
        <div class="column" style={{paddingRight: "1%"}}>
          <h3>
            {" "}
            An ambitious Danish man born in 1999 currently residing in the
            capital region of Denmark. My passion is anything data related:
            Visualizing, extrapolating, and securing the data. Therefore, it is
            fitting that I’m currently doing a BSc in Software engineering. My
            primary technological competencies lie in the following areas: OOP
            (Java, C#, and Python), full stack development (MERN stack, SQL),
            digital electronics (C) and general data science. All of which I
            have applied in large solo- or group projects consisting of 6-7
            people.{" "}
          </h3>
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
