import React from "react";

export default function Phonetics(props) {
  let word = props.props.word;
  let audioUrl = `https://api.dictionaryapi.dev/media/pronunciations/en/${word}-us.mp3`;
  return (
    <div className="Phonetics">
      <a href={audioUrl} target="_blank" rel="noreferrer">
        Listen 🔊
      </a>
      <br />
      {props.props.phonetics[0].text}
    </div>
  );
}
