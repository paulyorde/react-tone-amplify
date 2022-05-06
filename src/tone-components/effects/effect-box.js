import { useState } from "react";
import PingPong from "./pingpong/pingpont.component";

import { IoOptionsOutline } from "react-icons/io5";

const EffectBox = () => {

    let [showEffectBox, setShowEffectBox] = useState('')

    const toggleEffects = () => {
        setShowEffectBox(showEffectBox = !showEffectBox)
    }

    return (
        <>
        <div className="effect-box">
           
            {showEffectBox ? <PingPong className=""/> : null}

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

