const Guesses = (props) => {
  const guessArray = [];

  //Define recursive function to generate guesses based off of alphabet and greenGuesses
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

  //Initialize the guessArray to have a length >0
  if (props.greenGuesses[0] !== "_") {
    guessArray.push(props.greenGuesses[0]);
  } else {
    for (let j = 0; j < props.alphabet.length; j++) {
      guessArray.push(props.alphabet[j]);
    }
  }

  //Call function to populate the array with eligible guesses based of of known grey and green information.
  const unfilteredGuessArray = makeGuessArray(
    1,
    props.alphabet,
    props.greenGuesses,
    guessArray
  );

  //Define recursive function to filter generated guesses by the info in YellowLetters and YellowData
  const filterGuessArray = (
    unfilteredGuessArray,
    yellowLetters,
    yellowData,
    timesFiltered
  ) => {
    if (timesFiltered === yellowLetters.length) {
      return unfilteredGuessArray;
    } else {
      if (yellowData[timesFiltered].length === 1) {
        return filterGuessArray(
          unfilteredGuessArray.filter(
            (guess) =>
              guess[yellowData[timesFiltered][0]] ===
              yellowLetters[timesFiltered]
          ),
          yellowLetters,
          yellowData,
          timesFiltered + 1
        );
      } else if (yellowData[timesFiltered].length === 2) {
        return filterGuessArray(
          unfilteredGuessArray.filter(
            (guess) =>
              guess[yellowData[timesFiltered][0]] ===
                yellowLetters[timesFiltered] ||
              guess[yellowData[timesFiltered][1]] ===
                yellowLetters[timesFiltered]
          ),
          yellowLetters,
          yellowData,
          timesFiltered + 1
        );
      } else if (yellowData[timesFiltered].length === 3) {
        return filterGuessArray(
          unfilteredGuessArray.filter(
            (guess) =>
              guess[yellowData[timesFiltered][0]] ===
                yellowLetters[timesFiltered] ||
              guess[yellowData[timesFiltered][1]] ===
                yellowLetters[timesFiltered] ||
              guess[yellowData[timesFiltered][2]] ===
                yellowLetters[timesFiltered]
          ),
          yellowLetters,
          yellowData,
          timesFiltered + 1
        );
      } else {
        return filterGuessArray(
          unfilteredGuessArray.filter(
            (guess) =>
              guess[yellowData[timesFiltered][0]] ===
                yellowLetters[timesFiltered] ||
              guess[yellowData[timesFiltered][1]] ===
                yellowLetters[timesFiltered] ||
              guess[yellowData[timesFiltered][2]] ===
                yellowLetters[timesFiltered] ||
              guess[yellowData[timesFiltered][3]] ===
                yellowLetters[timesFiltered]
          ),
          yellowLetters,
          yellowData,
          timesFiltered + 1
        );
      }
    }
  };

  // Call function to filter original array with info from yellow letters
  const filteredGuessArray = filterGuessArray(
    unfilteredGuessArray,
    props.yellowLetters,
    props.yellowData,
    0
  );

  return (
    <div>
      {filteredGuessArray.map((guess) => (
        <div>{guess} </div>
      ))}
    </div>
  );
};

export default Guesses;
