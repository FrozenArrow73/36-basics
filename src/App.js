import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Bravo from './components/Bravo';
import Charlie from './components/Charlie'
import Delta from './components/Delta';

function App() {
const [userInput, setUserInput] = useState("")
const [name, setName] = useState("")
const [complete, setComplete] = useState(false)

  let person = "Brady"

  const handleChange = (event) => {
    setName (event.target.value)
  }

  const handleClick = () => {
    setName(userInput)
    setUserInput("")
  }

  return (
    <div className="App">
      <h1>app {name}</h1>
      <Delta changeName={handleChange}/>
      <Bravo personName={name}/>
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
