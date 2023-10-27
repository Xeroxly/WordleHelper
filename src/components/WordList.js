import Word from "./Word";
import Guesses from "./Guesses";
import { useState } from "react";

const WordList = (props) => {
  const [alphabet, setAlphabet] = useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);

  const [greenGuesses, setGreenGuesses] = useState(["_", "_", "_", "_", "_"]);
  const [load, setLoad] = useState(false);
  const [buttonText, setButtonText] = useState("Load Guesses");

  return (
    <>
      <div className="WordList">
        {props.words.map((wordEntry) => (
          <Word
            word={wordEntry}
            key={wordEntry}
            alphabet={alphabet}
            setAlphabet={setAlphabet}
            greenGuesses={greenGuesses}
            setGreenGuesses={setGreenGuesses}
          />
        ))}
      </div>
      <div className="GreenGuesses">
        {greenGuesses.map((letter) => (
          <span>{letter} </span>
        ))}
      </div>
      <br></br>
      <div className="LoadButton">
        <input
          type="submit"
          value={buttonText}
          onClick={() => {
            setLoad(!load);
            setButtonText(
              buttonText === "Load Guesses" ? "Hide Guesses" : "Load Guesses"
            );
          }}
        />
      </div>
      <br></br>
      <div className="Guesses">
        {load && <Guesses alphabet={alphabet} greenGuesses={greenGuesses} />}
      </div>
    </>
  );
};

export default WordList;
