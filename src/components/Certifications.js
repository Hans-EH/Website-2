import React, { useState } from "react";
import "../App.css";

const Certifications = () => {
  const exp = ["Digital Signal Processing","Inferential Statistics", "Game Theory", "Digital Systems", "Cryptography", "Blockchain"];
  const [myCert, setMyCert] = useState("Cryptography");

  return (
    <>
      <title>Certificates</title>
      <h1>

        <span>03.</span> Courses and Certificates
      </h1>
      <div class="row">
        <div class="column4">
          <div className="btn-group" role="group" aria-label="Basic example">
            {exp.map((Certifications) => {
              if (myCert === Certifications) {
                return (
                  <div >
                    <button
                      type="button"
                      key={Certifications}
                      className={"btnSelect"}
                      onClick={() => setMyCert(Certifications)}
                    >
                      {Certifications.toLocaleUpperCase()}
                    </button>
                    <br />
                  </div>)
              } else return (
                <div >
                  <button
                    type="button"
                    key={Certifications}
                    className={"btn"}
                    onClick={() => setMyCert(Certifications)}
                  >
                    {Certifications.toLocaleUpperCase()}
                  </button>
                  <br />
                </div>
              )
            })}
          </div>
        </div>
        <div class="column5">
          {myCert === "Cryptography" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                {myCert} Course <a href="https://www.stanford.edu/"><span>@ Stanford Online</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>November 2021 • Grade: 92% </h4>
              <h3>
                Learned classic cryptography, DES and AES, the RSA system, digital signatures, secret sharing, the discrete logarithm problem, and its use cases. Learned different types of symmetric and asymmetric cryptography, including the math behind it and the different types of attacks against them, such as but not limited to: Chosen plaintext attack (CPA), Chosen Ciphertext Attack (CCA), Birthday attack and existential forgery. Learned about key principles, such as semantic security, perfect secrecy, and integrity (Message Authentication Code).              </h3>
              <div class="image-holder">
                <a href="https://coursera.org/share/2eb5c4dcbaa5755bae2cc7d870391572">
                  <img
                    src="/images/Stanford-Cryptography1-Certificate.png"
                    alt=""
                    style={{ width: "100%", borderRadius: "0%" }}
                  />
                </a>
              </div>
            </div>
          )}
          {myCert === "Digital Signal Processing" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                {myCert} Course <a href="https://www.epfl.ch/en/"><span>@ EPFL</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>August 2022 • Grade: 88% </h4>
              <h3>
               Learned Fourier analysis, filter design, signal- types and classes, sampling, interpolation and quantization to build a DSP toolset complete enough to analyze a practical communication system in detail. 
              </h3>
              <div class="image-holder">
                <a href="https://coursera.org/share/d38c33d8145f93d85b325ffa5ff9d087">
                  <img
                    src="/images/Digital-Signal-Processing-Certificate.png"
                    alt=""
                    style={{ width: "100%", borderRadius: "0%" }}
                  />
                </a>
              </div>
            </div>
          )}
          {myCert === "Inferential Statistics" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                {myCert} Course <a href="https://duke.edu/"><span>@ Duke University</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>February 2022• Grade: 88% </h4>
              <h3>
                Learned about general methods of inferential statistics. How to sample data, what techniques to use and how to interpret the data. Theories and methods such as the central limit theorem, variance, confidence intervals, significance, and different types of errors. A big focus was put on hypothesis testing, using techniques such as T-distribution, normal distribution, ANOVA, Bootstrap and Chi-square testing.

              </h3>
              <div class="image-holder">
                <a href="https://coursera.org/share/179c8b8da8b87483b8ea2a58ecf1f97f">
                  <img
                    src="/images/Duke-Statistics-Certificate.png"
                    alt=""
                    style={{ width: "100%", borderRadius: "00%" }}
                  />
                </a>
              </div>
            </div>
          )}
          {myCert === "Game Theory" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                {myCert} Course <a href="https://www.stanford.edu/"><span>@ Stanford Online</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>February 2022 • Grade: 90% </h4>
              <h3>
                Learned about different types of games, such as games of pure cooperation and pure competition. Learned how games are expressed in normal and extensive form, including games of perfect and imperfect information. Learned different kinds of strategies, such as randomized strategies, maximin and minimax strategies, strictly/weakly dominant, strictly/weakly dominated strategies,  pure strategies and mixed strategies. Learned about Nash equilibrium, pareto optimality and best response. Learned about utility, stochastic games, Bayesian games, the Shapley value and the core. All of this was learned mathematically.
              </h3>
              <div class="image-holder">
                <a href="https://coursera.org/share/fdbb0d0038f8e284a390f03a4c87b145">
                  <img
                    src="/images/Stanford-Gametheory-Certificate.png"
                    alt=""
                    style={{ width: "100%", borderRadius: "0%" }}
                  />
                </a>
              </div>
            </div>
          )}
          {myCert === "Digital Systems" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                {myCert} Course <a href="https://www.uab.cat/"><span>@ UAB</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>December 2021 • Universitat Autonoma de Barcelona </h4>
              <h3>
                Learned basic methods to develop digital systems, such as: Combinational circuits, sequential circuits, and basic digital components such as logic gates, multiplexers, decoders, flip-flops, memory blocks, etc.

                I learned digital circuit synthesis, that is the translation of an initial specification to a digital circuit consisting of components: How to translate a truth table to a Boolean expression,

                how to transform a Boolean expression into an optimized Boolean expression,

                how to translate a Boolean expression to a logic circuit made up of logic components.

                In the case of sequential circuits: The definition of the circuit with a transition-states graph, the encoding of their internal states, the decomposition into a combinational circuit that computes the next state and the outputs, and into a set of memory elements.
                Under the course, the usage of VHDL as a synthesis tool was continuously applied.
              </h3>
              <div class="image-holder">
                <a href="https://coursera.org/share/3f6622c1138725a4f8c580ab777caf61">
                  <img
                    src="/images/Digital-Systems-Certificate.png"
                    alt=""
                    style={{ width: "100%", borderRadius: "0%" }}
                  />
                </a>
              </div>
            </div>
          )}
          {myCert === "Blockchain" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                {myCert}/Cryptocurrency Course <a href="https://www.chainalysis.com/"><span>@ Chainalysis</span></a>
              </h2>
              <h4 style={{ marginTop: "0%" }}>September 2021 • Grade: 96% </h4>
              <h3>
                Learned the basis of blockchain and its technology. Learned
                about different cryptocurrencies, their usage, and how they can
                be exploited. Learned mitigations against crypto scams and
                hacks. Learned Blockchain analysis / cryptanalysis of
                blockchains and how to track and understand the proof of work,
                smart contracts and NFTs. Learned proper risk management and compliance of cryptocurrencies.{" "}
              </h3>
              <div class="image-holder">
                <a href="https://verify.skilljar.com/c/gcp2tkv2fjea">
                  <img
                    src="/images/Chainalysis-Certificate.png"
                    alt=""
                    style={{ width: "100%", borderRadius: "0%" }}
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

//const CertificationsImage = ({ src }) => {
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
