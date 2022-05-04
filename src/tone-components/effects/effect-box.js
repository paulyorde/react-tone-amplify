import { useState } from "react";
import PingPong from "./pingpong/pingpont.component";

import { IoOptionsOutline } from "react-icons/io5";


const EffectBox = () => {

    let [getEffects, setEffects] = useState([])
    let [trackKey, setTrackKey] = useState(0)
    /** build effects component */
    // const openEffects = () => {
    //     const  keyCounter = trackKey + 1
    //     setTrackKey(keyCounter)
    //     setEffects(<PingPong key={keyCounter} />)
    //   }

    const openEffects = () => {
        setTrackKey(trackKey + 1)
        const newEffect = [<PingPong key={trackKey} />]
        setEffects(newEffect)
      }

    return (
        <>
        <div className="effect-box">
            {/* list of effects */}
            {/* show hide effects -> effect params within effect */} 
            {getEffects}
            <button 
                onClick={openEffects} 
                className='pong tooltip'><IoOptionsOutline/>
                <span className='tooltiptext'>open effects</span>
            </button>
        </div>
        </>
    )
}

export default EffectBox

