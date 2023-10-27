const Guesses = (props) => {
  const guessList = [];
  let guess = "";

  for (let a = 0; a < props.alphabet.length; a++) {
    for (let b = 0; b < props.alphabet.length; b++) {
      for (let c = 0; c < props.alphabet.length; c++) {
        for (let d = 0; d < props.alphabet.length; d++) {
          for (let e = 0; e < props.alphabet.length; e++) {
            guess += props.alphabet[a];
            guess += props.alphabet[b];
            guess += props.alphabet[c];
            guess += props.alphabet[d];
            guess += props.alphabet[e];
            guessList.push(guess);
            guess = "";
          }
        }
      }
    }
  }

  return (
    <div>
      {guessList.map((guess) => (
        <div>{guess} </div>
      ))}
    </div>
  );
};

export default Guesses;
