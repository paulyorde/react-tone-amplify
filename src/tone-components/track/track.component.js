import Player from "../player/player.component";
import Recorder from "../recorder/recorder.component"
import PingPong from '../../tone-components/effects/pingpong/pingpont.component';

import { IoOptionsOutline } from "react-icons/io5";

import { useState } from "react";

const Track = () => {
   
    let [effects, setEffects] = useState(null)
    let [trackKey, setTrackKey] = useState(0)
    {/* pass trackkey=#  to recorder / effects to display */}

    /** build effects component */
    const openEffects = () => {
        const  keyCounter = trackKey + 1
        setTrackKey(keyCounter)
        setEffects(<PingPong key={keyCounter} />)
      }

    return (
        <>
            <div className="track">
                <Recorder />

                {/* Replace with <Effects /> */}
                <div className="effectSoundBox">
                    {effects}
                </div>
                <button onClick={openEffects} className='pong tooltip'><IoOptionsOutline/><span className='tooltiptext'>open effects</span></button>
                
                <Player />
            </div>
        </>
    )
}

export default Track