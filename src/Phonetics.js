import React from "react";

export default function Phonetics(props) {
  let audio = props.props.phonetics[0].audio;
  if (audio === "") {
    return `${props.props.phonetics[0].text}`;
  } else {
    return (
      <div className="Phonetics">
        <a
          href={props.props.phonetics[0].audio}
          target="_blank"
          rel="noreferrer"
        >
          Listen 🔊
        </a>
        <br />
        {props.props.phonetics[0].text}
      </div>
    );
  }
}
