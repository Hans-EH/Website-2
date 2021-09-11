import React, { useState } from "react";
import "../App.css";

const Certifications = () => {
  const exp = ["Chainalysis"];
  const [myExp, setmyExp] = useState("Chainalysis");
  return (
    <>
      <h1>
        <title>Certications </title>
        <span>03.</span> Courses and Certifications
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
          {myExp === "Chainalysis" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Blockchain course <span>@ {myExp}</span>
              </h2>
              <h4 style={{ marginTop: "0%" }}>September 2021 </h4>
              <h3>
[DESCRIPTION MISSING]
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

export default Certifications;
