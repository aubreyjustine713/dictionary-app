import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        if (index < 5) {
          return (
            <div key={index}>
              <p>
                {definition.definition}
                <br />
                <em>{definition.example}</em>
              </p>
            </div>
          );
        } else {
          return null;
        }
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
