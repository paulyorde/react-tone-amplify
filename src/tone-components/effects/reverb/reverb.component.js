import * as Tone from 'tone';

const Reverb = (props) => {
  
  const actxTone = props.actxTone
  const recorder = props.recorder
  let reverb = null

  const _connectReverb = () => {
    reverb = new Tone.Reverb(
    {
      "wet": 1,
      "decay": 1.9,
      "preDelay": 1.00
    })
    reverb.connect(recorder)
    reverb.toDestination()
    actxTone.connect(reverb);
  }

  const _disconnectReverb = async () => {
    await actxTone.disconnect(reverb);
    reverb.disconnect(recorder)
  }

  return (
    <>
      <div>
        <button id='button-stop' onClick={_connectReverb}>reverb</button>
        <button id='button-stop' onClick={_disconnectReverb}>stop--reverb</button>
      </div>
    </>
  )
 

}

export default Reverb