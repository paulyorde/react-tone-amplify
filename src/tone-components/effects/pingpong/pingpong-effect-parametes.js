import AudioURLStateContext from "../../shared/audio-url-state-context"

import { useContext, useState } from "react"

const PingPongEffectParameters = () => {
    const effectContext = useContext(AudioURLStateContext)

    const [delayRate, setDelayRate] = useState(.4)
    const delayRateHandler = e => {
        setDelayRate(e.target.value)
        effectContext.pingPong.set({delayTime: delayRate})
    }

    const [feedBack, setFeedBacK] = useState(.4)
    const feedBackHandler = e => {
        setFeedBacK(e.target.value)
        effectContext.pingPong.set({feedBack: feedBack})
        effectContext.pingPong.set({maxDelay: delayRate})
    }

    return (
        <>
        <div className="pong-effect-parameters">
            <div>
                <p>ping params</p>

                {delayRate}
                <input type="range" min="0" max="10" value={delayRate} step=".01"
                    className="slider" id="delayrate"
                    onChange={delayRateHandler} /> 

             
                {feedBack}
                <input type="range" min="0" max="10" value={feedBack} step=".01"
                    className="slider" id="feedback"
                    onChange={feedBackHandler} /> 
            </div>
        </div>
        </>
    )
}

export default PingPongEffectParameters