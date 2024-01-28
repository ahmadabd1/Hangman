
import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import { useState, useEffect } from 'react';

function App() {

  const words = ['react', 'javascript', 'hangman', 'Dom', 'Ahmad', 'ammerjmal', 'computer', 'python'];
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);

  useEffect(() => {

    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex]);
    // eslint-disable-next-line
  }, []);

  const handleLetterClick = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setRemainingAttempts(remainingAttempts - 1);
      }
    }
  };

  const displayWord = word
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

  const isGameOver =
    remainingAttempts === 0 || !displayWord.includes('_');

  const renderAlphabetButtons = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.split('').map((letter) => (
      <button
        key={letter}
        onClick={() => handleLetterClick(letter)}
        disabled={guessedLetters.includes(letter) || isGameOver} >
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
      <p>Remaining Attempts: <Score remainingAttempts={remainingAttempts}/></p>
      <Solution displayWord={displayWord} />
      <div>
        {renderAlphabetButtons()}
      </div>
      {isGameOver && (
        <p>{remainingAttempts === 0 ? 'Game Over! Try again.' : 'You Win!'}</p>
      )}
      <button onClick={refreshPage}>restart</button>
    </div>

  );
}

export default App;
