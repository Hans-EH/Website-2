import React, { useState } from "react";
import "../App.css";

const Certifications = () => {
  const exp = ["Chainalysis"];
  const [myCert, setMyCert] = useState("Chainalysis");
  
  return (
    <>
      <title>Certifications</title>
      <h1>

        <span>03.</span> Courses and Certifications
      </h1>
      <div class="row">
        <div class="column4">
          <div className="btn-group" role="group" aria-label="Basic example">
            {exp.map((Certifications) => (
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
            ))}
          </div>
        </div>
        <div class="column5">
          {myCert === "Chainalysis" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                Cryptocurrency Course <span>@ {myCert}</span>
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
