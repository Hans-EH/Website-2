import "../App.css";

import React, { useState } from "react";

const Publications = () => {
  const exp = [
    "CreoleVal",
  ];
  const [myPublication, setPublication] = useState("CreoleVal");
  return (
    <body>
                              <title>
        Here is a collection of my publications
      </title> 
      <h1>
      <a href="#publications"><span>04.</span></a> Publications
      </h1>
      <div class="row">
        <div class="column4" style={{height: '25em'}}>
          <div className="btn-group" role="group" aria-label="Basic example">
              {exp.map((publication) => {
              if(myPublication === publication) {
                return(
                <div >
                <button
                  type="button"
                  key={publication}
                  className={"btnSelect"}
                  onClick={() => setPublication(publication)}
                >
                  {publication.toLocaleUpperCase()}
                </button>
                <br />
                </div>)
              }else return (
              <div >
                <button
                  type="button"
                  key={publication}
                  className={"btn"}
                  onClick={() => setPublication(publication)}
                >
                  {publication.toLocaleUpperCase()}
                </button>
                <br />
              </div>
              )
            })}
          </div>
        </div>
        
        <div class="column5">
          {myPublication === "CreoleVal" && (
            <div>
              <h2
                style={{
                  marginTop: "2%",
                  marginBottom: "0%",
                  color: "var(--titleText)",
                }}
              >
                 CreoleVal: Multilingual Multitask Benchmarks for Creoles
              </h2>
              <h4 style={{ marginTop: "0%" }}>
                2023 • Computation and Language, arXiv
              </h4>
              <h3>
              Creoles represent an under-explored and marginalized group of languages, with few available resources for NLP research. While the genealogical ties between Creoles and other highly-resourced languages imply a significant potential for transfer learning, this potential is hampered due to this lack of annotated data. In this work we present CreoleVal, a collection of benchmark datasets spanning 8 different NLP tasks, covering up to 28 Creole languages; it is an aggregate of brand new development datasets for machine comprehension, relation classification, and machine translation for Creoles, in addition to a practical gateway to a handful of preexisting benchmarks. For each benchmark, we conduct baseline experiments in a zero-shot setting in order to further ascertain the capabilities and limitations of transfer learning for Creoles. Ultimately, the goal of CreoleVal is to empower research on Creoles in NLP and computational linguistics. We hope this resource will contribute to technological inclusion for Creole language users around the globe.

              </h3>
              <a
                href="https://arxiv.org/abs/2310.19567"
                class="btnDown"
              >
                Lent, H., et al. "CreoleVal: Multilingual Multitask Benchmarks for Creoles." arXiv:2310.19567 [cs.CL], 2023.

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

export default Publications;
