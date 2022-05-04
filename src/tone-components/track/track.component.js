import Player from "../player/player.component";
import Recorder from "../recorder/recorder.component"
import EffectBox from '../../tone-components/effects/effect-box';
// import PingPong from '../../tone-components/effects/pingpong/pingpont.component';

import { IoOptionsOutline } from "react-icons/io5";

import { useState } from "react";

const Track = () => {
   
    let [getEffects, setEffects] = useState([])
    let [trackKey, setTrackKey] = useState(0)
    {/* pass trackkey=#  to recorder / effects to display */}

    /** build effects component */
    // const openEffects = () => {
    //     const  keyCounter = trackKey + 1
    //     setTrackKey(keyCounter)
    //     setEffects(<PingPong key={keyCounter} />)
    //   }

      const openEffects = () => {
        const  keyCounter = trackKey + 1
        const newEffect = [<EffectBox />]
        setEffects(newEffect)
      }

      let [showEffectBox, setShowEffectBox] = useState('')

      const toggleEffects = () => {
          // hide div
          // showEffectBox = !showEffectBox
          setShowEffectBox(showEffectBox = !showEffectBox)
      }

    //   const closeEffects = () => {

    //   }

    return (
        <>
            <div className="track">
                <Recorder />

                {/* {getEffects}
                <button onClick={openEffects} className='pong tooltip'><IoOptionsOutline/><span className='tooltiptext'>open effects</span>---</button> */}
                <button onClick={toggleEffects} className="effect-close pong tooltip"><IoOptionsOutline/></button>
                {showEffectBox ? <EffectBox /> : null}
                {/* <button onClick={closeEffects} className="effect-close">-</button> */}

                {/* Replace with <Effects />
                <div className="effectSoundBox">
                    {effects}
                </div> */}
                {/* <button onClick={openEffects} className='pong tooltip'><IoOptionsOutline/><span className='tooltiptext'>open effects</span></button> */}
                
                <Player />
            </div>
        </>
    )
}

export default Track