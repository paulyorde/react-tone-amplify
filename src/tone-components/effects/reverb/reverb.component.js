import * as Tone from 'tone';
import { IoOptionsOutline } from "react-icons/io5";

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
        <button className='reverb-start tooltip' id='button-stop' onClick={_connectReverb} ><IoOptionsOutline/><span className='tooltiptext'>reverb</span></button>
        <button className='reverb-stop' id='button-stop' onClick={_disconnectReverb}><IoOptionsOutline/><span className='tooltiptext'></span></button>
      </div>
    </>
  )
 

}

export default Reverb