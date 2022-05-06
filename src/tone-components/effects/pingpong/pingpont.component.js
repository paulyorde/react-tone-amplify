import AudioURLStateContext from '../../shared/audio-url-state-context';

import { IoOptionsOutline } from "react-icons/io5";

import { useContext } from 'react';
import PingPongEffectParameters from './pingpong-effect-parametes';


const PingPong = () => {
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
        <PingPongEffectParameters />
      </div>
      {/* EffectParameters = box for specific UI location / styles - takes an effect as a parameter - 
        delay, decay, signal, ...
        slider
        slider
        slider

        single component interface to control parmeters - data passes to 
        pass data to effect 
        {delayRate}
            <input type="range" min="0" max="10" value={delayRate} step=".01"
                className="slider" id="delayrate"
                onChange={delayRateHandler} /> 

            
        {feedBack}
        <input type="range" min="0" max="10" value={feedBack} step=".01"
            className="slider" id="feedback"
            onChange={feedBackHandler} /> 
      */}
    </>
  )
   
}

export default PingPong