import "../App.css";

const Education = () => {
  return (
    <body>
        <title>Educational background</title>
      <h1>
        <span>04.</span> Education
      </h1>
      <div class="row">
        <div class="column2">
          <h2>
            <strong>2020-2023</strong>
          </h2>
          <br/>
          <h2>
            <strong>2016-2019</strong>
          </h2>
        </div>
        <div class="column3">
        <h2 style={{marginBottom: "0%"}}><span>Aalborg University</span></h2>
          <h2 style={{marginTop: "0%", marginBottom: "5%"}}>Software Engineering, GPA 3.7; grade 10.5</h2>
          <h2 style={{marginBottom: "0%"}}><span>Albertslund Gymnasium</span></h2>
          <h2 style={{marginTop: "0%", marginBottom: "5%"}}>
            Math, Biotech., Robot-tech. and Chemistry A-levels: GPA 3.7; Grade 10.5
          </h2>
        </div>
      </div>
    </body>
  );
};

export default Education;
