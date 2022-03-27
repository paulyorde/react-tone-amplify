import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';

// function play() {
//   const record = document.querySelector(('.record'));
// const stop = document.querySelector(('.stop'));
// const soundClips = document.querySelector(('.sound-clips'));
// const canvas = document.querySelector(('.visualizer'));
// const mainSection = document.querySelector(('.main-controls'));

// stop.disabled = true;

// let audioCtx;
// const canvasCtx = canvas.getContext("2d");

// if (navigator.mediaDevices.getUserMedia) {
//   console.log('getUserMedia supported.');

//   const constraints = { audio: true };
//   let chunks = [];

//   let onSuccess = function(stream) {
//     const mediaRecorder = new MediaRecorder(stream);

//     visualize(stream);

//     record.onclick = function() {
//       mediaRecorder.start();
//       console.log(mediaRecorder.state);
//       console.log("recorder started");
//       record.style.background = "red";

//       stop.disabled = false;
//       record.disabled = true;
//     }

//     stop.onclick = function() {
//       mediaRecorder.stop();
//       console.log(mediaRecorder.state);
//       console.log("recorder stopped");
//       record.style.background = "";
//       record.style.color = "";
//       // mediaRecorder.requestData();

//       stop.disabled = true;
//       record.disabled = false;
//     }

//     mediaRecorder.onstop = function(e) {
//       console.log("data available after MediaRecorder.stop() called.");

//       const clipName = prompt('Enter a name for your sound clip?','My unnamed clip');

//       const clipContainer = document.createElement('article');
//       const clipLabel = document.createElement('p');
//       const audio = document.createElement('audio');
//       // const deleteButton = document.createElement('button');

//       clipContainer.classList.add('clip');
//       audio.setAttribute('controls', '');
//       // deleteButton.textContent = 'Delete';
//       // deleteButton.className = 'delete';

//       if(clipName === null) {
//         clipLabel.textContent = 'My unnamed clip';
//       } else {
//         clipLabel.textContent = clipName;
//       }

//       clipContainer.appendChild(audio);
//       clipContainer.appendChild(clipLabel);
//       // clipContainer.appendChild(deleteButton);
//       soundClips.appendChild(clipContainer);

//       audio.controls = true;
//       const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
//       chunks = [];
//       const audioURL = window.URL.createObjectURL(blob);
//       audio.src = audioURL;
//       console.log("recorder stopped");

//       // deleteButton.onclick = function(e: any) {
//       //   let evtTgt = e.target;
//       //   evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
//       // }

//       clipLabel.onclick = function() {
//         const existingName = clipLabel.textContent;
//         const newClipName = prompt('Enter a new name for your sound clip?');
//         if(newClipName === null) {
//           clipLabel.textContent = existingName;
//         } else {
//           clipLabel.textContent = newClipName;
//         }
//       }
//     }

//     mediaRecorder.ondataavailable = function(e) {
//       chunks.push(e.data);
//     }
//   }

//   let onError = function(err) {
//     console.log('The following error occured: ' + err);
//   }

//   navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

// } else {
//    console.log('getUserMedia not supported on your browser!');
// }

// function visualize(stream) {
//   if(!audioCtx) {
//     audioCtx = new AudioContext();
//   }

//   const source = audioCtx.createMediaStreamSource(stream);

//   const analyser = audioCtx.createAnalyser();
//   analyser.fftSize = 2048;
//   const bufferLength = analyser.frequencyBinCount;
//   const dataArray = new Uint8Array(bufferLength);

//   source.connect(analyser);
//   //analyser.connect(audioCtx.destination);

//   draw()

//   function draw() {
//     const WIDTH = canvas.width
//     const HEIGHT = canvas.height;

//     requestAnimationFrame(draw);

//     analyser.getByteTimeDomainData(dataArray);

//     canvasCtx.fillStyle = 'rgb(200, 200, 200)';
//     canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

//     canvasCtx.lineWidth = 2;
//     canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

//     canvasCtx.beginPath();

//     let sliceWidth = WIDTH * 1.0 / bufferLength;
//     let x = 0;


//     for(let i = 0; i < bufferLength; i++) {

//       let v = dataArray[i] / 128.0;
//       let y = v * HEIGHT/2;





//       if(i === 0) {
//         canvasCtx.moveTo(x, y);
//       } else {
//         canvasCtx.lineTo(x, y);
//       }

//       x += sliceWidth;
//     }

//     canvasCtx.lineTo(canvas.width, canvas.height/2);
//     canvasCtx.stroke();

//   }
// }

// window.onresize = function() {
//   canvas.width = mainSection.offsetWidth;
// }

// window.onresize();
// }

// const meter = new Tone.Meter();
/* TODO build factory for effects, contexts, recorders... **/
const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
// const crusher = new Tone.BitCrusher(4).toDestination();
const recorder = new Tone.Recorder();
// recorder.connect(pingPong)
const actxTone = new Tone.UserMedia().connect(recorder);
// pingPong.connect(actxTone);

function _connectPingPong() {
  pingPong.connect(recorder)
  pingPong.toDestination();
  actxTone.connect(pingPong)
}

function _disconnectPingPong() {
  actxTone.disconnect(pingPong)
}
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
  synth.triggerAttackRelease("C2", "1n");
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <div id='wrapper'>
         

      {/* <section class="main-controls">
        <canvas class="visualizer" height="60px"></canvas>
        <div id="buttons">
          <button id='button' onClick={play}>play</button>
          <button class="record">Record</button>
          <button class="stop">Stop</button>
        </div>
      </section>

      <section class="sound-clips">


      </section> */}

       <button id='button' onClick={startRecording}>record</button>
       <button id='button-stop' onClick={stopRecording}>stop</button>

       <button id='button-stop' onClick={_connectPingPong}>ping--pong</button>
       <button id='button-stop' onClick={_disconnectPingPong}>stop--pong</button>
       </div>
      </header>
    </div>
  );
}

export default App;
