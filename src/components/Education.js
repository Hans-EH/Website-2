import "../App.css";

const Education = () => {
  return (
    <body>
      <title>Educational background</title>
      <h1>
        <a href="#education"><span>03.</span></a> Education
      </h1>

      <div class="row">
        <div class="column2">
          <h2>
            <strong>2023-2025</strong>
          </h2>
        </div>
        <div class="column3">
          <h2 style={{ marginBottom: "0%" }}><a href="https://www.dtu.dk/"><span>Technical University of Denmark</span></a></h2>
          <h2 style={{ marginTop: "0%", marginBottom: "0%" }}>MSc. Computer Science and Engineering</h2>
          <h2 style={{ marginTop: "0%", marginBottom: "0%" }}>Studyline: Algorithms and Artificial Intelligence</h2>
          <h2 style={{ marginTop: "0%", marginBottom: "2%" }}>Focus Area: Machine Learning</h2>
        </div>
      </div>

      <div class="row">
        <div class="column2">
          <h2>
            <strong>2020-2023</strong>
          </h2>
        </div>
        <div class="column3">
          <h2 style={{ marginBottom: "0%" }}><a href="https://www.en.aau.dk/"><span>Aalborg University</span></a></h2>
          <h2 style={{ marginTop: "0%", marginBottom: "0%" }}>BSc. Software Engineering </h2>
          <h2 style={{ marginTop: "0%", marginBottom: "2%" }}>ECTS GPA: 4.5</h2>

        </div>
      </div>

      <div class="row">
        <div class="column2">
          <h2>
            <strong>2016-2019</strong>
          </h2>
        </div>
        <div class="column3">
          <h2 style={{ marginBottom: "0%" }}><a href="https://nextkbh.dk/gymnasier/albertslund-gymnasium"><span>Albertslund Gymnasium</span></a></h2>
          <h2 style={{ marginTop: "0%", marginBottom: "5%" }}>
            Math, Biotech., Robot-tech. and Chemistry A-levels.
          </h2>
        </div>
      </div>
    </body>
  );
};

export default Education;
