import Track from './tone-components/track/track.component';
// import EffectBox from './tone-components/effects/effect-box';
// import PingPong from './tone-components/effects/pingpong/pingpont.component';

import logo from './logo.svg';
import './App.css';
// import { IoOptionsOutline } from "react-icons/io5";

import React, { useState } from 'react';
// import { AudioProvider } from './tone-components/shared/audio-url-state-context';


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
          <div className='logo-box'><img src={logo} className="App-logo" alt="logo" /></div>

          {/* {getEffects}
          <button onClick={openEffects} className='tooltip'><IoOptionsOutline/><span className='tooltiptext'>open effects</span></button> */}

          <Track key={trackKey}/>
          {/* <AudioProvider><Track key={trackKey}/></AudioProvider> */}

          {getTrack}
          <button className='tooltip' onClick={createTrack}>+<span className='tooltiptext'>add track</span></button>
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
