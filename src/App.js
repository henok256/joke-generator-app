
import {useState} from 'react';
import './App.css';

function App() {
  const [randomJoke, setRandomJoke] = useState('');
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why do we tell actors to 'break a leg?' Because every play has a cast.",
    "Why don't oysters share their pearls? Because they're shellfish.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels.",
    "Why did the coffee file a police report? It got mugged.",
    "Why did the chicken cross the playground? To get to the other slide.",
    "What do you call fake spaghetti? An impasta.",
    "Why did the math book look so sad? Because it had too many problems.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "Why don't ants get sick? Because they have tiny ant-bodies.",
    "What do you get when you cross a snowman and a shark? Frostbite.",
    "Why do bees have sticky hair? Because they use honeycombs.",
    "Why was the computer cold? It left its Windows open.",
    "What do you call a can opener that doesn't work? A can't opener.",
    "Why did the cookie go to the doctor? Because it was feeling crumbly.",
    "Why did the banana go to the doctor? Because it wasn't peeling well.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why did the chicken go to the séance? To talk to the other side.",
    "Why do fish live in salt water? Because pepper water makes them sneeze.",
    "Why don't ghosts use elevators? Because they lift their own spirits.",
    "Why did the hipster burn his tongue? He drank his coffee before it was cool.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why did the football team go to the bank? To get their quarterback.",
    "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
    "What do you call a fake noodle? An impasta.",
    "What did one hat say to the other? You stay here, I'll go on ahead.",
    "Why do elephants never use computers? They're afraid of mice.",
    "Why do pirates not know the alphabet? Because they always get stuck at C.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "Why was the broom late? It swept in.",
    "Why did the bee get married? Because he found his honey.",
    "Why was the belt arrested? It held up some pants.",
    "Why did the snail go to the auto body shop? To get a new shell.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "Why did the robber take a shower? To make a clean getaway.",
    "What did the grape say when it got stepped on? Nothing, it just let out a little whine.",
    "Why do cows wear bells? Because their horns don't work.",
    "Why did the toilet paper roll down the hill? To get to the bottom.",
    "Why did the banana go to the doctor? Because it wasn't peeling well.",
    "What do you call a dinosaur with an extensive vocabulary"
  ]

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
