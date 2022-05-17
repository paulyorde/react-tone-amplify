import Track from './tone-components/track/track.component';
// import EffectBox from './tone-components/effects/effect-box';
// import PingPong from './tone-components/effects/pingpong/pingpont.component';
import gsap from 'https://cdn.skypack.dev/gsap'
import { GUI } from 'https://cdn.skypack.dev/dat.gui'

import logo from './logo.svg';
import './App.css';
// import { IoOptionsOutline } from "react-icons/io5";

import React, { useState } from 'react';
// import MusicPlayer from './jinki/test';
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

  // new stuff

  const AUDIO = document.querySelector('audio')

  const CONFIG = {
    fft: 2048,
    show: true,
    duration: 0.1,
    fps: 24,
    barWidth: 4,
    barMinHeight: 0.04,
    barMaxHeight: 0.8,
    barGap: 2,
  }

  const CTRL = new GUI()
  CTRL.add(CONFIG, 'show')
  .name('Show Audio')
  .onChange(show => (AUDIO.style.display = show ? 'block' : 'none'))
  // .onChange(show => (AUDIO.style.display = show ? 'block' : 'none'))


  return (
    <>
     {/* <Track key={trackKey}/> */}
      {/* <MusicPlayer /> */}
      <audio controls />
    </>
  );
}

export default App;
