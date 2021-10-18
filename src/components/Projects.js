import "../App.css";

import React, { useState } from "react";

const Projects = () => {
  const exp = [
    "Sustanify",
    "Compliment Clock",
    "Math App",
    "CV Generator",
    "Website 2.0",
    "Website 1.0",
  ];
  const [myExp, setmyExp] = useState("Sustanify");
  return (
    <body>
                              <title>
        Here is a collection of my highlighted projects that I have done
      </title> 
      <h1>
        <span>05.</span> Highlighted Projects
      </h1>
      <div class="row">
        <div class="column4" style={{height: '25em'}}>
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
              <h4 style={{ marginTop: "0%" }}>2020 • Digital Electronics, C</h4>
              <h3>
                This project was my first dip into electronics, and as such I
                found many things needed to be learned. I had to learn some of
                the basics of circuits, how digital electronics work, and how to
                calculate which resistors were required for it to work. Not all
                parts were using digital logic though, some were using analogue,
                and figuring out how analogue parts work, was another beast in
                of itself. My goal was to make a box, that gave out compliments
                occasionally, while giving the time at the current moment: My
                thinking was that when waiting all day for the time to pass, a
                nice compliment would make one smile.
              </h3>
              <a
                href="https://www.youtube.com/watch?v=zRxGmwva2Es"
                class="btnDown"
              >
                Showcase
              </a>
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
              <h4 style={{ marginTop: "0%" }}>
                2021 • JavaScript, MongoDB, Node.js, REST API
              </h4>
              <h3>
                We analysed a problem and created requirements through a
                detailed 80-page rapport. From this we deduced that we could cut
                around 4% of the global carbon footprint if people used
                electricity when it was more sustainable. From this we created a
                dynamic website that through a REST API got current energy data
                live and displayed it using graphs. Using a SARIMA model we tried
                to forecast when throughout the day was the best time to use
                electricity. Using the model’s information, we made a custom
                recommendation system that gave individual recommendation based
                upon when was the cleanest time to use electricity.
              </h3>
              <a
                href="https://github.com/Hans-EH/sustaininator"
                class="btnDown"
              >
                Github
              </a>
              •
              <a href="https://youtu.be/XguRPLWmR10" class="btnDown">
                Showcase
              </a>
              •
              <a href="http://Sustaininator.eu" class="btnDown">
                Website
              </a>
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
              <h4 style={{ marginTop: "0%" }}>2019 • C#, Game Dev., Unity</h4>
              <h3>
                For my A level project, I decided to make a mobile app, that
                could motivate and help kids learn different types of basic
                calculations using a mobile app. For the project, I designed,
                tested, and created the final project, including graphics done
                in photoshop, coding and music using fruity loops studio. The
                justification for this project and all details is described in
                the report. The application is not the best, but it was my first
                attempt at coding in over 6 years. I learned some of the basics
                of object-oriented coding, and just generally how to design a
                mobile application. If I were to attempt this project again,
                then I know exactly what I would change. The project totals
                around 1000 lines of code and was done using the unity game
                engine.
              </h3>
              <a href="https://github.com/Hans-EH/mobilegame" class="btnDown">
                Github
              </a>
              •
              <a
                href="https://www.youtube.com/watch?v=qJ_S0RqMAWI"
                class="btnDown"
              >
                Showcase
              </a>
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
              <h4 style={{ marginTop: "0%" }}>
                2020 • C, Unit Testing, Leadership
              </h4>
              <h3>
                For my first semester project we decided in a group of 7 people
                to create an automatic CV generator, which could generate an
                appropriate CV depending on the job opening. The project was
                done in C, and therefore required a lot of manually created
                pointers and dynamic expanding arrays. One of the big hurdles,
                was that throughout our 2 months process, 4 out of 7 decided to
                drop out. This made it hard to keep our project organized.
                People were losing motivation, and I stepped in after the first
                person dropped out, to become the project lead. Using scrum
                meetings and other organization devices I made sure everyone was
                active, orientated, and understood why they did what they were
                doing. We used multiple different algorithms, all implemented
                from scratch, including an algorithm to determine levenshtein
                distance.{" "}
              </h3>
              <a
                href="https://github.com/Hans-EH/Semester-1-cv-filter"
                class="btnDown"
              >
                Github
              </a>
              •
              <a
                href="https://www.youtube.com/watch?v=8PGPephRR24"
                class="btnDown"
              >
                Showcase
              </a>
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
              <h4 style={{ marginTop: "0%" }}>2021 • React</h4>
              <h3>
                I thought it was high time to revamp my website layout and
                design, and in the meantime learning React: Something I have
                been considering for a long time now.
              </h3>
              <a href="https://github.com/Hans-EH/Website-2" class="btnDown">
                Github
              </a>
              •
              <a href="https://hansheje.com/" class="btnDown">
                Website
              </a>
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
              <h4 style={{ marginTop: "0%" }}>2021 • JavaScript, HTML, CSS</h4>
              <h3>
                To learn the basics of front-end web development, I decided to
                create a website that needed to serve as an online portfolio
                including basic information about me. For this project, my goal
                was to make it as simple as possible. No fancy animations, just
                a static layout with the most important things an employer might
                need to see, to consider me as a candidate.
              </h3>
              <a href="https://github.com/Hans-EH/Website" class="btnDown">
                Github
              </a>
              •
              <a
                href="https://mywebsiteportfolio-1.netlify.app/"
                class="btnDown"
              >
                Website
              </a>
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
