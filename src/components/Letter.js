import { useState } from "react";

const Letter = (props) => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("White");

  const letterClick = () => {
    if (count === 0) {
      setBackgroundColor("Gray");
      // Remove gray letter from the list of available letters
      props.setAlphabet(
        props.alphabet.filter((letter) => letter !== props.letter)
      );
      // Enables rollover from green to gray to account for multiple words
      if (props.greenGuesses[props.position] !== "_") {
        props.setGreenGuesses(
          props.greenGuesses.toSpliced(props.position, 1, "_")
        );
      }
      setCount(count + 1);
    } else if (count === 1) {
      setBackgroundColor("Yellow");
      // Adds letter back into list of available letters after having been gray
      if (!props.alphabet.includes(props.letter)) {
        props.setAlphabet(props.alphabet.concat(props.letter));
      }
      // Create new entry for YellowLetters and YellowData
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
      } // Changes an existing entry for YellowLetters and YellowData
      else {
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
      // Adds a new green letter to GreenGuesses in it's given position
      if (props.greenGuesses[props.position] === "_") {
        props.setGreenGuesses(
          props.greenGuesses.toSpliced(props.position, 1, props.letter)
        );
        // Cleans up YellowLetters and YellowData to account for a new green letter
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
