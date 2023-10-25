import Word from "./Word";

const WordList = (props) => {
  return (
    <div className="WordList">
      {props.words.map((wordEntry) => (
        <Word word={wordEntry} key={wordEntry} />
      ))}
    </div>
  );
};

export default WordList;
