import { IoOptionsOutline } from "react-icons/io5";

import { useContext } from 'react';
import AudioURLStateContext from '../../shared/audio-url-state-context';

const Reverb = () => {
  const trackConext = useContext(AudioURLStateContext)

  const _connectReverb = () => {
    trackConext.axtTone.connect(trackConext.reverb)
    // isRecording Event Present? then -> connect :: for separating reverb specific to track to enable effect w/o recording and on mixing
    trackConext.reverb.connect(trackConext.recorder)
    trackConext.reverb.toDestination()
  }

  const _disconnectReverb = async () => {
    trackConext.reverb.disconnect(trackConext.recorder)
    await trackConext.axtTone.disconnect(trackConext.reverb)
  }

  return (
    <>
      <div>
        <button className='reverb-start tooltip' id='button-start-reverb' onClick={_connectReverb} ><IoOptionsOutline/><span className='tooltiptext'>start reverb</span></button>
        <button className='reverb-stop tooltip' id='button-stop-reverb' onClick={_disconnectReverb}><IoOptionsOutline/><span className='tooltiptext'>stop reverb</span></button>
      </div>
    </>
  )
 

}

export default Reverb