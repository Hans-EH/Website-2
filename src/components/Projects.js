import "../App.css";

import React, { useState } from "react";

const Projects = () => {
  const exp = ["Sustanify","Compliment Clock","Math App","CV Generator","Website 2.0","Website 1.0"];
  const [myExp, setmyExp] = useState("Chainalysis");
  return (
    <body>
      <title>
        Here is a collection of my highlighted projects that I have done
      </title>
      <h1>
        <span>05.</span> Highlighted Projects
      </h1>
      <div class="row">
        <div class="column4">
          <div className="btn-group" role="group" aria-label="Basic example">
            {exp.map((profession) => (
              <div>
                <button
                  type="button"
                  key={profession}
                  className={"btn"}
                  onClick={() => setmyExp(profession)}
                >
                  {profession.toLocaleUpperCase()}
                </button>
                <br />
              </div>
            ))}
          </div>
        </div>
        <div class="column5">
          {myExp === "Compliment Clock" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Electronic Compliment Giving Clock
              </h2>
              <h4 style={{ marginTop: "0%" }}>2021 • Digital Electronics, C</h4>
              <h3>[DESCRIPTION MISSING]</h3>
            </div>
          )}
        </div>
        <div class="column5">
          {myExp === "Sustanify" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Reducing Carbon Footprint of Electricity
              </h2>
              <h4 style={{ marginTop: "0%" }}>2021 • Digital Electronics, C</h4>
              <h3>[DESCRIPTION MISSING]</h3>
            </div>
          )}
        </div>
        <div class="column5">
          {myExp === "Math App" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Mobile Math App
              </h2>
              <h4 style={{ marginTop: "0%" }}>2021 • Digital Electronics, C</h4>
              <h3>[DESCRIPTION MISSING]</h3>
            </div>
          )}
        </div>
        <div class="column5">
          {myExp === "CV Generator" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                CV Generator
              </h2>
              <h4 style={{ marginTop: "0%" }}>2021 • Digital Electronics, C</h4>
              <h3>[DESCRIPTION MISSING]</h3>
            </div>
          )}
        </div>
        <div class="column5">
          {myExp === "Website 2.0" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Website 2.0
              </h2>
              <h4 style={{ marginTop: "0%" }}>2021 • Digital Electronics, C</h4>
              <h3>[DESCRIPTION MISSING]</h3>
            </div>
          )}
        </div>
        <div class="column5">
          {myExp === "Website 1.0" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Website 1.0
              </h2>
              <h4 style={{ marginTop: "0%" }}>2021 • Digital Electronics, C</h4>
              <h3>[DESCRIPTION MISSING]</h3>
            </div>
          )}
        </div>
      </div>
    </body>
  );
};

//const Colors = {
//    color: 'red',
//    backgroundColor: 'black'
//}

export default Projects;
