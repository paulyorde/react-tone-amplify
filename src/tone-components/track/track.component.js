import Player from "../player/player.component";
import Recorder from "../recorder/recorder.component"
import EffectBox from '../../tone-components/effects/effect-box';

import { IoOptionsOutline } from "react-icons/io5";

import { useState } from "react";

const Track = () => {

    let [showEffectBox, setShowEffectBox] = useState('')

    const toggleEffects = () => {
        setShowEffectBox(showEffectBox = !showEffectBox)
    }

    return (
        <>
        <div className="track">
            <Recorder />
            
            <button onClick={toggleEffects} className="pong tooltip"><IoOptionsOutline/></button>
            {showEffectBox ? <EffectBox className="effect-box"/> : null}
            

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