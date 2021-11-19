import React, { useState } from "react";
import "../App.css";

const Certifications = () => {
  const exp = ["Cryptography","Blockchain"];
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
              if(myCert === Certifications) {
                return(
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
              }else return (
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
                    style={{ width: "100%", borderRadius: "05%" }}
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
                    style={{ width: "100%", borderRadius: "05%" }}
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
