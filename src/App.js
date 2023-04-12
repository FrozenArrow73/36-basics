import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Bravo from './components/Bravo';
import Charlie from './components/Charlie'

function App() {
const [userInput, setUserInput] = useState("")
const [name, setName] = useState("")
const [complete, setComplete] = useState(false)

  let person = "Brady"

  const handleChange = (event) => {
    setUserInput (event.target.value)
  }

  const handleClick = () => {
    setName(userInput)
    setUserInput("")
  }

  return (
    <div className="App">
      <h1>app {name}</h1>
      <input placeholder="What's your name?" value={userInput} onChange={handleChange}/>
      <button onClick={handleClick}>Change Name</button>
      <Bravo personName={person}/>
      <Bravo personName="Dave"/>
      <Bravo personName="Katie"/>
      <Bravo personName="Jess"/>
      <Bravo personName="Erica"/>
      <Charlie num={12}/>
      <Charlie num={78}/>
      
    </div>
  );
}

export default App;
