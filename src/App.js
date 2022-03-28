import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';
import React from 'react';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { useState } from 'react';


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
// recorder.connect(pingPong)
const actxTone = new Tone.UserMedia().connect(recorder);


function _connectReverb() {
  reverb.connect(recorder)
  actxTone.connect(reverb);
  reverb.toDestination()
}

function _disconnectReverb() {
  actxTone.disconnect(reverb);
}


// pingPong.connect(actxTone);

function _connectPingPong() {
  pingPong.connect(recorder)
  actxTone.connect(pingPong)
  pingPong.toDestination();


  // _setPingPongRate()
}

function _disconnectPingPong() {
  actxTone.disconnect(pingPong)
}
// const [amt, setAmt] = useState('')
// function _setPingPongRate(amt = 24) {
//   const dt = pingPong.delayTime
//   console.log('dt::', dt['value'] = amt)

// }
// pingPong
// const actx = Tone.context;
// const dest = actx.createMediaStreamDestination();
// const audioStremaRecorder = new MediaRecorder(dest.stream)


// mic.connect(crusher)

// const synthSynth = new Tone.Synth().connect(recorder);
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

async function stopRecording() {
  const recording = await recorder.stop();
  // download the recording by creating an anchor element and blob url
  const url = URL.createObjectURL(recording);
  const anchor = document.createElement("a");
  anchor.download = "recording.webm";
  anchor.href = url;
  anchor.click();
}

function startRecording() {
  recorder.start()
  synth.triggerAttackRelease("C2", "16n");
}


function ReverbDelayRate(props) {
  if (props.decay) {
    return reverb.decay = props.decay
  }
  return 1.9
}

function PingPongDelayRate(props) {
  if (props.delayRate) {
    // const dt = pingPong.delayTime.value
    pingPong.delayTime.value = props.delayRate
    return <p>{props.delayRate}</p>
  }
  return pingPong.delayTime.value
}

// function App() {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dt: 18, rdr: 1.9 }
  }

  handleReverbChange = e => this.setState({ rdr: e.target.value })
  handlPingPongChange = e => this.setState({ dt: e.target.value })

  render() {
    const dt = this.state.dt
    const rdr = this.state.rdr
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id='wrapper'>
            <PingPongDelayRate
              delayRate={dt} />
            <ReverbDelayRate
              decay={rdr} />

            <button id='button' onClick={startRecording}>record</button>
            <button id='button-stop' onClick={stopRecording}>stop</button>

            <button id='button-stop' onClick={_connectPingPong}>ping--pong</button>
            <button id='button-stop' onClick={_disconnectPingPong}>stop--pong</button>

            <button id='button-stop' onClick={_connectReverb}>reverb</button>
            <button id='button-stop' onClick={_disconnectReverb}>stop--reverb</button>
            {/* <button id='button-stop' onClick={_setPingPongRate}>delay--pong</button> */}

            {/* <input value={dt} onChange={this.handlPingPongChange} /> */}

            <input type="range" in="1" max="100" value={rdr}
              class="slider" id="myRange"
              onChange={this.handleReverbChange} /> 
          </div>
        </header>

      </div>
    );
  }
}

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// const ele = <App name="PlugNPlay" />;

// ReactDOM.render(
//   ele,
//   document.getElementById('root')
// )

export default App;
