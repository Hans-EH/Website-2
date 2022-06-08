import React, { useState } from "react";
import "../App.css";

const Experience = () => {
  const exp = [
    "IBM",
    "Novo Nordisk",
    "Januar",
    "Østre Landsret",
    "Aalborg University",
  ];
  const [myExp, setmyExp] = useState("IBM");
  return (
    <>
      <h1>
        <title>Professional experience</title>
        <span>02.</span> Where I have worked
      </h1>
      <div class="row">
        <div class="column4">
          <div className="btn-group" role="group" aria-label="Basic example">
            {exp.map((profession) => {
              if (myExp === profession) {
                return (
                  <div>
                    <button
                      type="button"
                      key={profession}
                      className={"btnSelect"}
                      onClick={() => setmyExp(profession)}
                    >
                      {profession.toLocaleUpperCase()}
                    </button>
                    <br />
                  </div>
                );
              } else
                return (
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
                );
            })}
          </div>
        </div>
        <div class="column5">
        {myExp === "IBM" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Software Engineer <a href="https://www.IBM.com/"><span>@ {myExp}</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>February 2022 - Present</h4>
              <h3>
                Technical student assistant at the firm IBM. Handled rapid prototyping and pinpointed customer requirements. Developed experimental and proof of concept systems leveraging 'AI', machine learning and hybrid cloud architecture.
                Co-created with DBU a cloud based software system leveraging predictive machine learning to help find patterns in games in order to help guide the teams training habits and game strategies. The national team has increased its FIFA ranking from 16 to 9 since this project started.
              </h3>
            </div>
          )}
          {myExp === "Novo Nordisk" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Data Scientist <a href="https://www.novonordisk.com/"><span>@ {myExp}</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>Juni 2022 - Present</h4>
              <h3>
                Ad hoc data science to help visualize and extrapolate data to enhance the pharmaceutical production. 
              </h3>
            </div>
          )}
          {myExp === "Januar" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Cyber Security <a href="https://www.januar.com/"><span>@ {myExp}</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>August 2021 - February 2022 </h4>
              <h3>
                As a cyber security analyst at the cryptocurrency startup Januar
                I was responsible for making sure the tech team’s code was
                secure through setting up proper methodologies (S-SDLC) and pen-testing
                the system. Additionally, I did a lot of risk analysis of
                potential partners, and internal risk analysis of current
                threats. I was also in charge of the general IT security at the
                company, as well as written policies for compliance and procedures.
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
                Lay Judge <a href="https://domstol.dk/oestrelandsret/"><span>@ {myExp}</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>
                2020 - 2024 (4 days a year) • Volunteer{" "}
              </h4>
              <h3>
                As a lay judge in the high court, I get to hear a lot of
                different cases, from monetary theft to criminal cases. My job
                is together with 3 judges and 2 other lay judges to give
                verdicts and determine the consequences if one is found guilty.
                From this I have learned a new way of thinking, and a lot of
                Danish law. The job is circa 4 days a year.
              </h3>
            </div>
          )}
          {myExp === "Aalborg University" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Tutor / "Rusinstruktør" <a href="https://www.en.aau.dk/"><span>@ {myExp}</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>
                June - December 2021 • Volunteer{" "}
              </h4>
              <h3>
                With 6 others handled the study start of the new bachelor
                students of one pre existing study line and one entirely new
                study line, in total consisting of circa 85 students. Planned
                multiple events and trips, and helped with any incoming
                questions and concerns.{" "}
              </h3>
              <div class="image-holder">
                  <img
                    src="/images/tutor-certificate.png"
                    alt=""
                    style={{ width: "100%", borderRadius: "05%" }}
                  />
              </div>
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
                Service Attendant <a href="https://www.q8.dk/"><span>@ {myExp}</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>2018 - 2020 </h4>
              <h3>
                At Q8 I was responsible for the entire shop, as there was only
                ever one at work. This meant that all cleaning, sorting, making
                food and fixing spontaneous problems such as the car wash
                breaking was left to me. This developed my problem-solving
                abilities, as there was never anyone you could ask for help.
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
                Service Attendant <a href="https://www.bauhaus.dk/"><span>@ {myExp}</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>2018 - 2019 </h4>
              <h3>
                At Bauhaus I was responsible for customer satisfaction and doing
                cashier work.{" "}
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
                Warehouse Worker <a href="https://www.bilka.dk/"><span>@ {myExp}</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>2017 - 2018 </h4>
              <h3>
                At the supermarket chain Bilka, I was responsible for receiving
                packages and sorting them into their correct locations in the
                warehouse.
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
