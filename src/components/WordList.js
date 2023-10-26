import Word from "./Word";
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

  return (
    <>
      <div className="WordList">
        {props.words.map((wordEntry) => (
          <Word
            word={wordEntry}
            key={wordEntry}
            alphabet={alphabet}
            setAlphabet={setAlphabet}
          />
        ))}
      </div>
      <div className="Alphabet">
        {alphabet.map((letter) => (
          <span>{letter} </span>
        ))}
      </div>
    </>
  );
};

export default WordList;
