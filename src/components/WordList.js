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
  const [yellowLetters, setYellowLetters] = useState([]);
  const [yellowData, setYellowData] = useState([]);

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
            yellowLetters={yellowLetters}
            setYellowLetters={setYellowLetters}
            yellowData={yellowData}
            setYellowData={setYellowData}
          />
        ))}
      </div>
      {/* Displays current state of greenGuesses */}
      <div className="GreenGuesses">
        {greenGuesses.map((letter) => (
          <span>{letter} </span>
        ))}
      </div>
      <br></br>
      {/* Displays button to load guesses based off of current information */}
      <div className="LoadButton">
        <input
          type="submit"
          value={props.buttonText}
          onClick={() => {
            props.setLoad(!props.load);
            props.setButtonText(
              props.buttonText === "Load Guesses"
                ? "Hide Guesses"
                : "Load Guesses"
            );
          }}
        />
      </div>
      <br></br>
      {/* Loads the generated and filtered guesses from words gathered above */}
      <div className="Guesses">
        {props.load && (
          <Guesses
            alphabet={alphabet}
            greenGuesses={greenGuesses}
            yellowLetters={yellowLetters}
            yellowData={yellowData}
          />
        )}
      </div>
    </>
  );
};

export default WordList;
