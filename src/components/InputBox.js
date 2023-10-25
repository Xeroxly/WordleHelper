import WordList from "./WordList";
import { useState } from "react";

const InputBox = (props) => {
  const [input, setInput] = useState("");
  const [wordsList, setWordsList] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    wordsList.push(input);
    setWordsList(wordsList);
    setInput("");
  };

  return (
    <>
      <form className="InputBox" onSubmit={submit}>
        <input
          type="text"
          placeholder="Wordle guess"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <br></br>
      <WordList className="WordList" words={wordsList} />
    </>
  );
};

export default InputBox;
