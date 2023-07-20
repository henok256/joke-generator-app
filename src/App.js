
import jokes from './jokes';
import {useState} from 'react';
import './App.css';

function App() {
  const [randomJoke, setRandomJoke] = useState('');
  

  const jokeGenerator = ()=>{
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setRandomJoke(jokes[randomIndex]);     
  }

  return (
    <div className="App">
      <div className="main">
      <h1>Jokes Generator App</h1>
      {randomJoke ?<p>{randomJoke}</p>  :<p>not joke generated, please click the genenrator button to generate  JOKE</p>}
      <button onClick={jokeGenerator}>click here to generate new joke</button>
      </div>
    </div>
  );
}

export  default App;
