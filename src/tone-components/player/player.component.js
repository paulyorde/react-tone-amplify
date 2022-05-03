
import AudioURLStateContext from '../shared/audio-url-state-context'; 

import { useContext } from 'react';

const Player = () => {
  const ctx = useContext(AudioURLStateContext)

  return (
    <>
      <div className='tooltip'>
        <span className='tooltiptext'>play</span>
        <audio src={ctx.audioTrack} controls></audio>
      </div>
    </>
  )

}

export default Player