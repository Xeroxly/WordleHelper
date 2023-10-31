import Letter from "./Letter";

const Word = (props) => {
  const letterPosition = 0;

  if (props.word.length === 0) {
    return;
  } else if (props.word.length !== 5) {
    return (
      <>
        <div>
          Your word is the wrong length! Enter one that is 5 letters exactly!
        </div>
        <br></br>
      </>
    );
  }

  return (
    <>
      <div className="Word">
        {" "}
        <Letter
          letter={props.word[0].toUpperCase()}
          alphabet={props.alphabet}
          setAlphabet={props.setAlphabet}
          position={letterPosition}
          greenGuesses={props.greenGuesses}
          setGreenGuesses={props.setGreenGuesses}
          key={props.word[0].toUpperCase()}
          yellowLetters={props.yellowLetters}
          setYellowLetters={props.setYellowLetters}
          yellowData={props.yellowData}
          setYellowData={props.setYellowData}
        />{" "}
        <Letter
          letter={props.word[1].toUpperCase()}
          alphabet={props.alphabet}
          setAlphabet={props.setAlphabet}
          position={letterPosition + 1}
          greenGuesses={props.greenGuesses}
          setGreenGuesses={props.setGreenGuesses}
          key={props.word[1].toUpperCase()}
          yellowLetters={props.yellowLetters}
          setYellowLetters={props.setYellowLetters}
          yellowData={props.yellowData}
          setYellowData={props.setYellowData}
        />{" "}
        <Letter
          letter={props.word[2].toUpperCase()}
          alphabet={props.alphabet}
          setAlphabet={props.setAlphabet}
          position={letterPosition + 2}
          greenGuesses={props.greenGuesses}
          setGreenGuesses={props.setGreenGuesses}
          key={props.word[2].toUpperCase()}
          yellowLetters={props.yellowLetters}
          setYellowLetters={props.setYellowLetters}
          yellowData={props.yellowData}
          setYellowData={props.setYellowData}
        />{" "}
        <Letter
          letter={props.word[3].toUpperCase()}
          alphabet={props.alphabet}
          setAlphabet={props.setAlphabet}
          position={letterPosition + 3}
          greenGuesses={props.greenGuesses}
          setGreenGuesses={props.setGreenGuesses}
          key={props.word[3].toUpperCase()}
          yellowLetters={props.yellowLetters}
          setYellowLetters={props.setYellowLetters}
          yellowData={props.yellowData}
          setYellowData={props.setYellowData}
        />{" "}
        <Letter
          letter={props.word[4].toUpperCase()}
          alphabet={props.alphabet}
          setAlphabet={props.setAlphabet}
          position={letterPosition + 4}
          greenGuesses={props.greenGuesses}
          setGreenGuesses={props.setGreenGuesses}
          key={props.word[4].toUpperCase()}
          yellowLetters={props.yellowLetters}
          setYellowLetters={props.setYellowLetters}
          yellowData={props.yellowData}
          setYellowData={props.setYellowData}
        />
      </div>
      <br></br>
    </>
  );
};

export default Word;
