import { useState } from "react";

const Letter = (props) => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("White");

  const letterClick = () => {
    if (count === 0) {
      setBackgroundColor("Gray");
      setCount(count + 1);
      props.setAlphabet(
        props.alphabet.filter((letter) => letter !== props.letter)
      );
    } else if (count === 1) {
      setBackgroundColor("Yellow");
      setCount(count + 1);
      if (!props.alphabet.includes(props.letter)) {
        props.setAlphabet(props.alphabet.concat(props.letter));
      }
    } else if (count === 2) {
      setBackgroundColor("Lime");
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
