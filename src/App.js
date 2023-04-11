import logo from './logo.svg';
import './App.css';
import Bravo from './components/Bravo';
import Charlie from './components/Charlie'

function App() {

  let person = "Brady"

  return (
    <div className="App">
      <h1>app</h1>
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
