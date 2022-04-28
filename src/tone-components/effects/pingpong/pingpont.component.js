import * as Tone from 'tone';
import { IoOptionsOutline } from "react-icons/io5";

import { useContext, useEffect } from 'react';
import AudioURLStateContext from '../../shared/audio-url-state-context';

const PingPong = (props) => {
  const trackContext = useContext(AudioURLStateContext)

  let pingPong = null
  const actxTone = props.actxTone
  const recorder = props.recorder

  /**
   * TODO fix: store pingpong in useRef to perserve state put mutable value in the '.current' property
   * why is this working w/o useeffect in Reverb?
   */
  useEffect(() => {
    pingPong =  new Tone.PingPongDelay("4n", 0.2).toDestination();
  })

  const _connectPingPong = () => {
    pingPong.connect(recorder)
    actxTone.connect(pingPong)
    pingPong.toDestination();
  }

  const _disconnectPingPong = async () => {
    await actxTone.disconnect(pingPong)
    await pingPong.disconnect(recorder)
  }

  return (
    <>
      <div>
        <button className='pong-start tooltip' id='button-stop' onClick={_connectPingPong}><IoOptionsOutline/><span className='tooltiptext'>start ping-pong</span></button>
        <button className='pong-stop tooltip' id='pong-stop' onClick={_disconnectPingPong}><IoOptionsOutline/><span className='tooltiptext'>stop ping-pong</span></button>
      </div>
    </>
  )
   
}

export default PingPong