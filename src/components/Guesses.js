const Guesses = (props) => {
  const guessArray = [];

  const makeGuessArray = (guessLength, alphabet, greenGuesses, guessArray) => {
    const newGuessArray = [];

    if (guessLength === 5) {
      return guessArray;
    } else {
      for (let i = 0; i < guessArray.length; i++) {
        if (greenGuesses[guessLength] !== "_") {
          newGuessArray.push(guessArray[i] + greenGuesses[guessLength]);
        } else {
          for (let j = 0; j < alphabet.length; j++) {
            newGuessArray.push(guessArray[i] + alphabet[j]);
          }
        }
      }
    }
    return makeGuessArray(
      guessLength + 1,
      alphabet,
      greenGuesses,
      newGuessArray
    );
  };

  if (props.greenGuesses[0] !== "_") {
    guessArray.push(props.greenGuesses[0]);
  } else {
    for (let j = 0; j < props.alphabet.length; j++) {
      guessArray.push(props.alphabet[j]);
    }
  }

  const completedGuessArray = makeGuessArray(
    1,
    props.alphabet,
    props.greenGuesses,
    guessArray
  );

  return (
    <div>
      {completedGuessArray.map((guess) => (
        <div>{guess} </div>
      ))}
    </div>
  );
};

export default Guesses;
