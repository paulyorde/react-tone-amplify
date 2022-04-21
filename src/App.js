import logo from './logo.svg';
import './App.css';
// import * as Tone from 'tone';
import React from 'react';
// import Reverb from './tone-components/effects/reverb/reverb.component';
// import PingPong from './tone-components/effects/pingpong/pingpont.component';
// import Recorder from './tone-components/recorder/recorder.component';
import Sketch from 'react-p5'
import 'p5/lib/addons/p5.sound';
// const recorder = new Tone.Recorder();
// const actxTone = new Tone.UserMedia().connect(recorder);

// actxTone.open().then(() => {
//   console.log("mic open");
// }).catch(e => {
//   console.log("mic not open");
// });



const App = () => {
  // const setup = (p5, canvasParentRef) => {
  //   p5.createCanvas(500, 400).parent(canvasParentRef)
  //   p5.soundFormats('mp3', 'ogg');
	//   const	mySound = p5.loadSound('https://freesound.org/data/previews/612/612610_5674468-lq');
  //   mySound.play()
  // }
  
  // const draw = p5 => {
  //   p5.background(255, 130, 20)
  //   p5.ellipse(100, 100, 100)
  //   p5.ellipse(300, 100, 100)
  // }
  let mySound

  const preload = (p5) => {
		p5.soundFormats('mp3', 'ogg');
		 mySound = p5.loadSound('https://freesound.org/data/previews/612/612610_5674468-lq');
  };

  const setup = (p5, parentRef) => {
		const cnv = p5.createCanvas(200, 200).parent(parentRef);
		cnv.mousePressed(() => {
			mySound.play();
		});
		p5.background(220);
		p5.text('tap here to play', 10, 20);
	};

  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id='wrapper'>
        <Sketch preload={preload} setup={setup}  />
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
