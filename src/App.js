import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';
import React from 'react';
import Reverb from './tone-components/effects/reverb/reverb.component';
import PingPong from './tone-components/effects/pingpong/pingpont.component';
import Recorder from './tone-components/recorder/recorder.component';

const recorder = new Tone.Recorder();
const actxTone = new Tone.UserMedia().connect(recorder);

actxTone.open().then(() => {
  console.log("mic open");
}).catch(e => {
  console.log("mic not open");
});

const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  return (
    <>
    <div className="App">
    <NumberList numbers={numbers} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id='wrapper'>
          <Recorder
          recorder={recorder}
          actxTone={actxTone}/>

         <PingPong
          actxTone={actxTone}
          recorder={recorder}/>
          
         <Reverb
          actxTone={actxTone}
          recorder={recorder}/>
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
