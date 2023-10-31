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
      if (!props.yellowLetters.includes(props.letter)) {
        const allPositions = [0, 1, 2, 3, 4];
        props.setYellowLetters(props.yellowLetters.concat(props.letter));
        props.yellowData.push(
          allPositions.filter(
            (position) =>
              position !== props.position &&
              props.greenGuesses[position] === "_"
          )
        );
        props.setYellowData(props.yellowData);
      } else {
        const relaventIndex = props.yellowLetters.indexOf(props.letter);
        props.setYellowData(
          props.yellowData.toSpliced(
            relaventIndex,
            1,
            props.yellowData[relaventIndex].filter(
              (position) => position !== props.position
            )
          )
        );
      }
      setCount(count + 1);
    } else if (count === 2) {
      setBackgroundColor("Lime");
      if (props.greenGuesses[props.position] === "_") {
        props.setGreenGuesses(
          props.greenGuesses.toSpliced(props.position, 1, props.letter)
        );
        if (props.yellowLetters.includes(props.letter)) {
          const newYellowData = [];
          for (let i = 0; i < props.yellowData.length; i++) {
            newYellowData.push(
              props.yellowData[i].filter(
                (position) => position !== props.position
              )
            );
          }
          const relaventIndex = props.yellowLetters.indexOf(props.letter);
          props.setYellowData(newYellowData.toSpliced(relaventIndex, 1));
          props.setYellowLetters(
            props.yellowLetters.toSpliced(relaventIndex, 1)
          );
        }
      }
      // setCount(0);
      // Temporarily disable to correct Yellow Guess reset issue
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
