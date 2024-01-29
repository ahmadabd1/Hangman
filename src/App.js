
import './App.css';
import Attemps from './components/Attemps';
import Solution from './components/Solution';
import { useState, useEffect } from 'react';

function App() {

  const words = ['react', 'javascript', 'hangman', 'dom', 'ahmad', 'amerjmal', 'computer', 'python'];
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [img,setImage]=useState(`./hangmanicon/hangman-${0}.svg`)
  const[score,setScore]=useState(100)

  useEffect(() => {

    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex]);
    // eslint-disable-next-line
  }, []);
  
  const handleLetterClick = (letter) => {

    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      setScore(score+5)
      if (!word.includes(letter)) {
        setScore(score-20)
        setRemainingAttempts(remainingAttempts - 1);
        let numImg=(6-remainingAttempts)+1
        setImage(`./hangmanicon/hangman-${numImg}.svg`)
      }
    }
  };

  const displayWord = word.split('').map((letter) => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
  const isGameOver = remainingAttempts === 0 || !displayWord.includes('_');

  const renderAlphabetButtons = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.split('').map((letter) => (
      <button className='btn' key={letter} onClick={() => handleLetterClick(letter)} disabled={guessedLetters.includes(letter) || isGameOver} >
        {letter}
      </button>
    ));
  };
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className='App'>
      <h1>Hangman Game</h1>
      <h2>Score : {score}</h2>
      <p>Remaining Attempts: <Attemps remainingAttempts={remainingAttempts}/></p>
      <Solution displayWord={displayWord} />
      <div>Hint : It's Must be a Name or Coding Language.</div>
      <div>
        {renderAlphabetButtons()}
      </div>
      {isGameOver && (
        <p>{remainingAttempts === 0 ? 'Game Over! Try again.' : 'You Win Congzzz!'}</p>
      )}
      <button className='restbtn' onClick={refreshPage}>restart</button>
        <br></br><br></br>
      <img src={img} alt=''></img>
    </div>

  );
}

export default App;
