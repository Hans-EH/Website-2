import React, { useState } from "react";
//import { animated, useSpring } from "react-spring";
import "../App.css";

const Experience = () => {
  const exp = ["Januar", "Østre Landsret", "Q8", "Bauhaus", "Bilka"];
  const [myExp, setmyExp] = useState("Januar");
  return (
    <>
      <h1>
        <title>Professional experience</title>
        <span>02.</span> Where I have worked
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
          {myExp === "Januar" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Associate IT Security Analyst <span>@ {myExp}</span>
              </h2>
              <h4 style={{ marginTop: "0%" }}>July 2021 - Present </h4>
              <h3>
              [PLEASE INSERT DESCRIPTIVE TEXT]

              </h3>
            </div>
          )}
          {myExp === "Østre Landsret" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Lay Judge <span>@ {myExp}</span>
              </h2>
              <h4 style={{ marginTop: "0%" }}>2020 - 2024 (4 days a year) </h4>
              <h3>
              [PLEASE INSERT DESCRIPTIVE TEXT]

              </h3>
            </div>
          )}
          {myExp === "Q8" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Service Attendant <span>@ {myExp}</span>
              </h2>
              <h4 style={{ marginTop: "0%" }}>2019 - 2020 </h4>
              <h3>
              [PLEASE INSERT DESCRIPTIVE TEXT]

              </h3>
            </div>
          )}
          {myExp === "Bauhaus" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Service Attendant <span>@ {myExp}</span>
              </h2>
              <h4 style={{ marginTop: "0%" }}>2018 - 2019 </h4>
              <h3>
                [PLEASE INSERT DESCRIPTIVE TEXT]
              </h3>
            </div>
          )}
          {myExp === "Bilka" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Warehouse Worker <span>@ {myExp}</span>
              </h2>
              <h4 style={{ marginTop: "0%" }}>2017 - 2018 </h4>
              <h3>
              [PLEASE INSERT DESCRIPTIVE TEXT]

              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

//const ProfessionImage = ({ src }) => {
//  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
//  return (
//    <animated.img
//      src={src}
//      alt=""
//      style={{ width: "250px", height: "250px", ...props }}
//    />
//  );
//};

export default Experience;
