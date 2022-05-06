import { useState } from "react";
import PingPong from "./pingpong/pingpont.component";

import { IoOptionsOutline } from "react-icons/io5";

/**
 * 
 * @Effectbox 
 * @effets delay, chorus, dis, reverb
 * @effectparamters wet/dry timedelay
 * per track / global 
 */


const EffectBox = () => {

    // let [getEffects, setEffects] = useState([])
    // let [trackKey, setTrackKey] = useState(0)
    /** build effects component */
    // const openEffects = () => {
    //     const  keyCounter = trackKey + 1
    //     setTrackKey(keyCounter)
    //     setEffects(<PingPong key={keyCounter} />)
    //   }

    // const openEffects = () => {
    //     setTrackKey(trackKey + 1)
    //     const newEffect = [<PingPong key={trackKey} />]
    //     setEffects(newEffect)
    //   }

    let [showEffectBox, setShowEffectBox] = useState('')

    const toggleEffects = () => {
        setShowEffectBox(showEffectBox = !showEffectBox)
    }

    return (
        <>
        <div className="effect-box">
            {/* list of effects */}
            {/* show hide effects -> effect params within effect */} 
            {showEffectBox ? <PingPong className=""/> : null}


            {/* {getEffects} */}
            <button 
                onClick={toggleEffects} 
                className='pong tooltip'><IoOptionsOutline/>
                <span className='tooltiptext'>open effects</span>
            </button>
        </div>
        </>
    )
}

export default EffectBox

