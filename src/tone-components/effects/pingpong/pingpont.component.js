import * as Tone from 'tone';

import { useEffect } from 'react';

const PingPong = (props) => {

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
        <button id='button-stop' onClick={_connectPingPong}>ping--pong</button>
        <button id='button-stop' onClick={_disconnectPingPong}>stop--pong</button>
      </div>
    </>
  )
   
}

export default PingPong