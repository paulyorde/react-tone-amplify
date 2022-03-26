import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';

const synth = new Tone.MembraneSynth().toDestination();

function playSynth() {
  synth.triggerAttackRelease("C2", "8n");
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <div id='wrapper'>
       <button id='button' onClick={playSynth}>play</button>
       </div>
      </header>
    </div>
  );
}

export default App;
