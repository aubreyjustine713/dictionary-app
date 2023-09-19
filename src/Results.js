import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map((phonetics, index) => {
            if (index < 2) {
              return (
                <div key={index} className="phoneticsBlock">
                  <Phonetics phonetics={phonetics} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
