import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';
import React, { useRef, useEffect } from 'react';
// import * as p5 from 'p5';
// import { useEffect } from 'react';
// import React from 'react';
// import ReactDOM from 'react-dom';
import { useState } from 'react';


// const meter = new Tone.Meter();
/* TODO build factory for effects, contexts, recorders... **/
const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();

const reverb = new Tone.Reverb(
  {
    "wet": 1,
    "decay": 1.9,
    "preDelay": 1.01
  })


// const crusher = new Tone.BitCrusher(4).toDestination();
const recorder = new Tone.Recorder();
const analyser = new Tone.Analyser('waveform', 1024);

// recorder.connect(pingPong)
const actxTone = new Tone.UserMedia().connect(recorder);
// let amplitudes = 0

function _connectAnalyzer() {
  
  
  analyser.toDestination()
//   //   // Create a new list of amplitudes filled with 0s
    
    
    // for(let i = 0; i < amplitudes.length; i++) {
    //   amplitudes[i] = i
    // }
    // if(reverb) {
    //   reverb.connect(analyser)
    // }
    // amplitudes = new Array(analyser.size).fill(0);
    const values = analyser.getValue();
    // console.log('analyzer::', amplitudes)
    console.log('values::', values)
//   //   // Connect with analyser as well so we can detect waveform
//   //   player.connect(analyser);
}
function _connectReverb() {
  reverb.connect(recorder)
  // reverb.connect(analyser)
  actxTone.connect(reverb);
  actxTone.connect(analyser)
  reverb.toDestination()
}
function _disconnectReverb() {
  actxTone.disconnect(reverb);
  actxTone.disconnect(analyser)

}
function _connectPingPong() {
  pingPong.connect(recorder)
  actxTone.connect(pingPong)
  pingPong.toDestination();
}
function _disconnectPingPong() {
  actxTone.disconnect(pingPong)
}

actxTone.open().then(() => {
  // promise resolves when input is available
  console.log("mic open");
  // print the incoming mic levels in decibels
  // setInterval(() => console.log(meter.getValue()), 100);
}).catch(e => {
  // promise is rejected when the user doesn't have or allow mic access
  console.log("mic not open");
});

const synth = new Tone.MembraneSynth().toDestination();

async function _stopRecording() {
  const recording = await recorder.stop();
  // download the recording by creating an anchor element and blob url
  const url = URL.createObjectURL(recording);
  const anchor = document.createElement("a");
  anchor.download = "recording.webm";
  anchor.href = url;
  anchor.click();
}

function _startRecording() {
  recorder.start()
  synth.triggerAttackRelease("C2", "16n");
}

// function AnalyzerRate(props) {
//   if (props.width && props.height) {
//     let asize = analyser.getValue()
//     console.log('anal size::', asize)
//     return analyser.size.toFixed(1.2)
//   }
//   return 1.9
// }


function ReverbDelayRate(props) {
  if (props.decay) {
    return reverb.decay = props.decay
  }
  return 1.9
}

// function PingPongDelayRate(props) {
//   if (props.delayRate) {
//     // const dt = pingPong.delayTime.value
//     pingPong.delayTime.value = props.delayRate
//     return <p>{props.delayRate}</p>
//   }
//   return pingPong.delayTime.value
// }


const App = () => {
  const [getReverbDelayRate, setReverbDelayRate] = useState('')
  const reverbDelayRateHandler = e => setReverbDelayRate(e.target.value)

  const [getArcInput, setArcInput] = useState({
    arc1: 490,
    arc2: 250,
    arc3: 20,
    arc4: 0,
    arc5: 2 * Math.PI
  })

  let ca =((analyser.getValue()[0]) *  -10)
  let caRef = useRef(ca)

  const foo = () => {
    if(Math.sign(ca) === -0 || Math.sign(ca) === -1) {
      console.log('negative')
      ca = ca * -10000
    }
    // console.log('analyzer values::', ca)
  }
  // caRef.current = 
  foo()
  //arc3 = anaylyzer.getValue()[0] * Math.random

  
  
  // const handlPingPongChange = e => this.setState({ dt: e.target.value })
  // const handleAnalyzerChange = e => this.setState({width: e.target.value, height: e.target.value})
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.arc(getArcInput.arc1, getArcInput.arc2, getArcInput.arc3, getArcInput.arc4, getArcInput.arc5);
    console.log('arc::', getArcInput.arc1)
    ctx.stroke();
    // canvas.addEventListener('mouseup', e => {
    //   console.log('event::', e)
    // })
    _connectAnalyzer()
    // const arcInputHandler = e => {
    //   // if(Math.sign(ca) === -0 || Math.sign(ca) === -1) {
    //   //   console.log('negative')
    //   //   ca = foo()
    //   // }
    //   console.log('ca::', ca)
    // }

      setArcInput({ 
        ...getArcInput,
        // arc1: e.target.value,
        // arc2: e.target.value,
        // arc3: e.target.value,
        arc3: ca
    
        // arc4: e.target.value,
        // arc5: e.target.value,
       })
    
    
  }, [ ca,caRef, getArcInput])


  return (
    <div className="App">
       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id='wrapper'>
          {/* <PingPongDelayRate
            delayRate={delayRate} /> */}
          <ReverbDelayRate
            decay={getReverbDelayRate} />
          
          {/* <AnalyzerRate
            width={width}
            height={height} /> */}

          {/* TODO  Tone controls ui component  */}
          <button id='button' onClick={_startRecording}>record</button>
          <button id='button-stop' onClick={_stopRecording}>stop</button>

          <button id='button-stop' onClick={_connectPingPong}>ping--pong</button>
          <button id='button-stop' onClick={_disconnectPingPong}>stop--pong</button>

          <button id='button-stop' onClick={_connectReverb}>reverb</button>
          <button id='button-stop' onClick={_disconnectReverb}>stop--reverb</button>
          {/* <button id='button-stop' onClick={_setPingPongRate}>delay--pong</button> */}

          {/* <input value={dt} onChange={this.handlPingPongChange} /> */}

          <input type="range" min="1" max="100" value={getReverbDelayRate}
            className="slider" id="myRange"
            onChange={reverbDelayRateHandler} /> 

           <input type="range" min="0" max="100" 
            className="anal" id="myAnal"
            // onChange={arcInputHandler}
             /> 
<br></br>
          <canvas 
          ref={canvasRef}
          width={1000}
          height={500}
          className='c'>
          </canvas>
        </div>
      </header>
 
    </div>
  );
}

export default App;
