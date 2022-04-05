import * as Tone from 'tone';
// when paul is interacting w/ reverb as he wants to 
// // - logic / - UI
// - dial parameters 
  // - decay, predelay
  // - send to channels 
  // - apply to single track or master 
// - stop / pause / start
// - record 
// - anaylyze 
// - play reverb track  
// 



const Reverb = (props) => {
  // pass in Tone-instance to init reverb 
  // useState
  // useRef
  // useEffect
  const reverb = new Tone.Reverb(
    {
      "wet": 1,
      "decay": 1.9,
      "preDelay": 1.00
    })
  const actxTone = props.actxTone
  const recorder = props.recorder

  const _connectReverb = () => {
    reverb.connect(recorder)
    // reverb.connect(analyser)
    actxTone.connect(reverb);
    // reverb.connect(anaylyzer)
    reverb.toDestination()
  }
  const _disconnectReverb = () => {
    actxTone.disconnect(reverb);
    // actxTone.disconnect(anaylyzer)
  }

  return <div>
    {/* stop start */}
    <button id='button-stop' onClick={_connectReverb}>reverb</button>
    <button id='button-stop' onClick={_disconnectReverb}>stop--reverb</button>

    {/* connections audioContext */}

    {/* UI dials */}
     {/* <ReverbDelayRate
            decay={getReverbDelayRate} /> */}

    {/* analyzer canvas */}
  </div>

}

export default Reverb