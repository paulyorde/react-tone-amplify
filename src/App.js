import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Track from './tone-components/track/track.component';

const App = () => {
  let [getTrack, setTrack] = useState([])
  let [trackKey, setTrackKey] = useState(0)

  const createTrack = () => {
    const  keyCounter = trackKey + 1
    setTrackKey(keyCounter)
    const newTrack = [...getTrack, <Track key={trackKey}/>]
    setTrack(newTrack)
  }
 
  return (
    <>
    <div className="App">
      <header className="App-header">
        <div id='wrapper'>
         <div> <img src={logo} className="App-logo" alt="logo" /></div>
          <Track key={trackKey}/>

          {getTrack}
          <button className='tooltip' onClick={createTrack}>+<span className='tooltiptext'>add track</span></button>
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
