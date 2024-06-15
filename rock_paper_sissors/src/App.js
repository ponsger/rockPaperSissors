import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const choices = ['ROCK', 'PAPER', 'SISSORS'];

  const [clickedButton, setClickedButton] = useState('');
  const [computerResult, setComputerResult] = useState(-1);
  const [userWins, setUserWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);

  const checkWinner = () => {

    if (choices[computerResult].toLowerCase() === clickedButton) {
      return
    }
    //*************** Paper */
    if (choices[computerResult].toLowerCase() === 'paper' && clickedButton === 'rock') {
      setComputerWins(computerWins++);
    }
    if (choices[computerResult].toLowerCase() === 'paper' && clickedButton === 'sissors') {
      setUserWins(userWins++);
    }
    //**************** Rock */
    if (choices[computerResult].toLowerCase() === 'rock' && clickedButton === 'sissors') {
      setComputerWins(computerWins++);
    }
    if (choices[computerResult].toLowerCase() === 'rock' && clickedButton === 'paper') {
      setUserWins(userWins++);
    }
    //**************** Sissors */
    if (choices[computerResult].toLowerCase() === 'sissors' && clickedButton === 'paper') {
      setComputerWins(computerWins++);
    }
    if (choices[computerResult].toLowerCase() === 'sissors' && clickedButton === 'rock') {
      setUserWins(userWins++);
    }
  }

  useEffect(() => {
    if (clickedButton !== '') {
      setComputerResult(Math.floor(Math.random() * 3));
      checkWinner();
    }
  }, [clickedButton])

  return (
    <main className="App">
      <h1>Rock, Paper and Sissors</h1>
      <section>
        <Button clicked={setClickedButton} value='rock' />
        <Button clicked={setClickedButton} value='paper' />
        <Button clicked={setClickedButton} value='sissors' />
      </section>
      <section>
        Computer choice: {choices[computerResult]}
      </section>
      <section>
        <p> User score: {userWins} </p>
        <p> Computer score: {computerWins} </p>
      </section>
    </main>
  );
}

export default App;
