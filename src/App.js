import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';
import React from 'react';
// import Reverb from './tone-components/effects/reverb/reverb.component';
// import PingPong from './tone-components/effects/pingpong/pingpont.component';
// import Recorder from './tone-components/recorder/recorder.component';
import Track from './tone-components/track/track.component';

const recorder = new Tone.Recorder();
const actxTone = new Tone.UserMedia().connect(recorder);

actxTone.open().then(() => {
  console.log("mic open");
}).catch(e => {
  console.log("mic not open");
});

const App = () => {
 
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Track />
        <div id='wrapper'>
          {/* <Recorder
          recorder={recorder}
          actxTone={actxTone}/>

         <PingPong
          actxTone={actxTone}
          recorder={recorder}/>
          
         <Reverb
          actxTone={actxTone}
          recorder={recorder}/> */}
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
