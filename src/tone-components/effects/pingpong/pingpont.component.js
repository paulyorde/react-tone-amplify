import AudioURLStateContext from '../../shared/audio-url-state-context';

import { IoOptionsOutline } from "react-icons/io5";

import { useContext } from 'react';


const PingPong = (props) => {
  const trackContext = useContext(AudioURLStateContext)

  const _connectPingPong = () => {
    trackContext.pingPong.connect(trackContext.recorder)
    trackContext.axtTone.connect(trackContext.pingPong)
    trackContext.pingPong.toDestination()
  }

  const _disconnectPingPong = async () => {
    await trackContext.pingPong.disconnect(trackContext.recorder)
    await trackContext.axtTone.disconnect(trackContext.pingPong)
    await trackContext.pingPong.dispose()
  }

  return (
    <>
      <div>
        <p>pingpong</p>
        <button className='pong-start tooltip' id='button-stop' onClick={_connectPingPong}><IoOptionsOutline/><span className='tooltiptext'>start ping-pong</span></button>
        <button className='pong-stop tooltip' id='pong-stop' onClick={_disconnectPingPong}><IoOptionsOutline/><span className='tooltiptext'>stop ping-pong</span></button>
      </div>
    </>
  )
   
}

export default PingPong