import WordList from "./WordList";
import { useState } from "react";

const InputBox = (props) => {
  const [input, setInput] = useState("");
  const [wordsList, setWordsList] = useState([]);
  const [load, setLoad] = useState(false);
  const [buttonText, setButtonText] = useState("Load Guesses");

  // Hides guess when a new word is added to prevent lag
  const submit = (e) => {
    e.preventDefault();
    wordsList.push(input);
    setWordsList(wordsList);
    setInput("");
    setLoad(false);
    setButtonText("Load Guesses");
  };

  return (
    <>
      <form className="InputBox" onSubmit={submit}>
        <input
          type="text"
          placeholder="Wordle guess"
          value={input}
          onChange={(e) => (
            setInput(e.target.value),
            setLoad(false),
            setButtonText("Load Guesses")
          )}
        />
        <input type="submit" value="Submit" />{" "}
        <input
          type="submit"
          value="NEW GAME"
          onClick={() => window.location.reload(false)}
        />
      </form>
      <br></br>
      <WordList
        className="WordList"
        words={wordsList}
        load={load}
        setLoad={setLoad}
        buttonText={buttonText}
        setButtonText={setButtonText}
      />
    </>
  );
};

export default InputBox;
