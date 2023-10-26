import Letter from "./Letter";

const Word = (props) => {
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
        />{" "}
        <Letter
          letter={props.word[1].toUpperCase()}
          alphabet={props.alphabet}
          setAlphabet={props.setAlphabet}
        />{" "}
        <Letter
          letter={props.word[2].toUpperCase()}
          alphabet={props.alphabet}
          setAlphabet={props.setAlphabet}
        />{" "}
        <Letter
          letter={props.word[3].toUpperCase()}
          alphabet={props.alphabet}
          setAlphabet={props.setAlphabet}
        />{" "}
        <Letter
          letter={props.word[4].toUpperCase()}
          alphabet={props.alphabet}
          setAlphabet={props.setAlphabet}
        />
      </div>
      <br></br>
    </>
  );
};

export default Word;
