import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Bravo from './components/Bravo';
import Charlie from './components/Charlie'
import Delta from './components/Delta';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [ taskList, setTaskList] = useState([])



  const handleChange = (event) => {

  }

  const handleClick = () => {

  }

  const addTask = (newTask) => setTaskList([... taskList, newTask])
  console.log("list: ", taskList)

  return (
    <div className="App">
      <h1>app</h1>
      <Form addTask={addTask}/>
      <List/>
    </div>
  );
}

export default App;
