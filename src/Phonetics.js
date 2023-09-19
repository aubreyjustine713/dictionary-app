import React from "react";

export default function Phonetics(props) {
  let audio = props.phonetics.audio;
  if (audio === "") {
    return `${props.phonetics.text}`;
  } else {
    return (
      <div className="Phonetics">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen 🔊
        </a>
        <br />
        {props.phonetics.text}
      </div>
    );
  }
}
