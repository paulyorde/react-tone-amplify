import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';
import React from 'react';
// import * as p5 from 'p5';
// import { useEffect } from 'react';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { useState } from 'react';
import Reverb from './tone-components/effects/reverb/reverb.component';
import PingPong from './tone-components/effects/pingpong/pingpont.component';
import Recorder from './tone-components/recorder/recorder.component';


// const meter = new Tone.Meter();
/* TODO build factory for effects, contexts, recorders... **/




// const crusher = new Tone.BitCrusher(4).toDestination();

// const analyser = new Tone.Analyser('waveform', 1024);

const recorder = new Tone.Recorder();
const actxTone = new Tone.UserMedia().connect(recorder);
// let amplitudes = 0

// function _connectAnalyzer() {
//   analyser.toDestination()
//     const values = analyser.getValue();
//     console.log('values::', values)
// }




actxTone.open().then(() => {
  // promise resolves when input is available
  console.log("mic open");
  // print the incoming mic levels in decibels
  // setInterval(() => console.log(meter.getValue()), 100);
}).catch(e => {
  // promise is rejected when the user doesn't have or allow mic access
  console.log("mic not open");
});



// function AnalyzerRate(props) {
//   if (props.width && props.height) {
//     let asize = analyser.getValue()
//     console.log('anal size::', asize)
//     return analyser.size.toFixed(1.2)
//   }
//   return 1.9
// }







const App = () => {
  

  // const [getArcInput, setArcInput] = useState({
  //   arc1: 490,
  //   arc2: 250,
  //   arc3: 20,
  //   arc4: 0,
  //   arc5: 2 * Math.PI
  // })

  // let ca =((analyser.getValue()[0]) *  -10)
  // let caRef = useRef(ca)

  // const foo = () => {
  //   if(Math.sign(ca) === -0 || Math.sign(ca) === -1) {
  //     console.log('negative')
  //     ca = ca * -10000
  //   }
  //   // console.log('analyzer values::', ca)
  // }
 // foo()


  // caRef.current = 

 


  //arc3 = anaylyzer.getValue()[0] * Math.random

  
  
  
  // const canvasRef = useRef(null);

  // useEffect(() => {
    // const canvas = canvasRef.current;
    // const ctx = canvas.getContext('2d');
    // ctx.beginPath();
    // ctx.arc(getArcInput.arc1, getArcInput.arc2, getArcInput.arc3, getArcInput.arc4, getArcInput.arc5);
    // console.log('arc::', getArcInput.arc1)
    // ctx.stroke();


    // _connectAnalyzer()
    // const arcInputHandler = e => {
    //   // if(Math.sign(ca) === -0 || Math.sign(ca) === -1) {
    //   //   console.log('negative')
    //   //   ca = foo()
    //   // }
    //   console.log('ca::', ca)
    // }

  //     setArcInput({ 
  //       ...getArcInput,
  //       // arc1: e.target.value,
  //       // arc2: e.target.value,
  //       // arc3: e.target.value,
  //       arc3: ca
    
  //       // arc4: e.target.value,
  //       // arc5: e.target.value,
  //      })
    
    
  // }, [ ca,caRef, getArcInput])

  //TODO create actxTone component
  // import recorder 

  return (
    <div className="App">
       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id='wrapper'>
        
         
          
          {/* <AnalyzerRate
            width={width}
            height={height} /> */}

          {/* TODO  Tone controls ui component  */}
          <Recorder
          recorder={recorder}
          actxTone={actxTone}/>

         <PingPong
          actxTone={actxTone}
          recorder={recorder}/>
          
        <Reverb
          actxTone={actxTone}
          recorder={recorder}/>
 
           {/* <input type="range" min="0" max="100" 
            className="anal" id="myAnal"
            // onChange={arcInputHandler}
             />  */}
<br></br>
          {/* <canvas 
          ref={canvasRef}
          width={1000}
          height={500}
          className='c'>
          </canvas> */}
        </div>
      </header>
 
    </div>
  );
}

export default App;
