import { useState } from "react";

const Letter = (props) => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("White");

  const letterClick = () => {
    if (count === 0) {
      setBackgroundColor("Gray");
      props.setAlphabet(
        props.alphabet.filter((letter) => letter !== props.letter)
      );
      if (props.greenGuesses[props.position] !== "_") {
        props.setGreenGuesses(
          props.greenGuesses.toSpliced(props.position, 1, "_")
        );
      }
      setCount(count + 1);
    } else if (count === 1) {
      setBackgroundColor("Yellow");
      if (!props.alphabet.includes(props.letter)) {
        props.setAlphabet(props.alphabet.concat(props.letter));
      }
      setCount(count + 1);
    } else if (count === 2) {
      setBackgroundColor("Lime");
      if (props.greenGuesses[props.position] === "_") {
        props.setGreenGuesses(
          props.greenGuesses.toSpliced(props.position, 1, props.letter)
        );
      }
      setCount(0);
    }
  };

  return (
    <span
      className="Letter"
      onClick={letterClick}
      style={{ background: `${backgroundColor}` }}
    >
      {props.letter}
    </span>
  );
};

export default Letter;
