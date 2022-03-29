import React from "react";
import * as Tone from 'tone';
// const actxTone = new Tone.UserMedia()
// const recorder = new Tone.Recorder();

const reverb = new Tone.Reverb(
  {
    "wet": 1,
    "decay": 1.9,
    "preDelay": 1.01
  })

function ReverbDelayRate(props) {
  if (props.decay) {
    reverb.decay = props.decay
    return reverb.decay
  }
  return ''
}

function _connectReverb(actx, record) {
  if(reverb) {
    reverb.connect(record)
  actx.connect(reverb);
  reverb.toDestination()
  }
}

 function _disconnectReverb(actx) {
  if(reverb) {
    actx.disconnect(reverb);
  }
}

  const _setReverbDecayRate = e => this.setState({ rdr: e.target.value })
   

/** Reverb Component
 * param decay
 * param predelay
 * param web 
 */
class Reverb extends React.Component {

  constructor(props) {
    super(props);
    this.state = { dt: 18, rdr: 1.9, actx: Tone.UserMedia, record: Tone.Recorder }
  }

  /* Reverb Service:: **/
  // get values from props in component class
  // move this outside class
 

//  ReverbDelayRate(props) {
//   if (props.decay) {
//     this.reverb.decay = props.decay
//     return this.reverb.decay  
//   }
//   return this.reverb.decay
// }

 


  render() {
    // const dt = this.state.dt
    const rdr = this.state.rdr
    const actx = this.state.actx
    const record = this.state.record
    return (
      /* Reverb Card **/
      <div>
        <h1>Reverb</h1>
        <ReverbDelayRate
              decay={rdr} />


        <button id='button-stop' onClick={_connectReverb(actx,record)}>reverb</button>
        <button id='button-stop' onClick={_disconnectReverb(actx)}>stop--reverb</button>
        <br></br>
        <input type="range" in="1" max="100" value={rdr}
          className="slider" id="myRange"
          onChange={_setReverbDecayRate} /> 
      </div>
    );
  }
}

export default Reverb

