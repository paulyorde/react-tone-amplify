import Player from "../player/player.component";
import Recorder from "../recorder/recorder.component"
import EffectBox from '../../tone-components/effects/effect-box';

import { IoOptionsOutline } from "react-icons/io5";

import { useContext, useState } from "react";


// import * as Tone from 'tone';
// import Reverb from '../../tone-components/effects/reverb/reverb.component';
// import PingPong from '../../tone-components/effects/pingpong/pingpont.component';
// import AudioURLStateContext from "../shared/audio-url-state-context";

const Track = () => {
    // useContext -set audio context provider with 
    // const trackContext = useContext(AudioURLStateContext)

    let [showEffectBox, setShowEffectBox] = useState('')

    const toggleEffects = () => {
        setShowEffectBox(showEffectBox = !showEffectBox)
    }



     // useContext -set audio context provider with 
    // const _recorder = new Tone.Recorder();
    // const _audioContext = new Tone.UserMedia()
    // const _reverb = new Tone.Reverb({"wet": 1,"decay": 1.9,"preDelay": 1.00})
    // const options = {debug: true, delayTime: "4n", feedBack: .04}
    // const _pingPong =  new Tone.PingPongDelay({options})

    return (
        <>
        <div className="track">

            <Recorder />
            
            <button onClick={toggleEffects} className="pong tooltip"><IoOptionsOutline/></button>
            {showEffectBox ? <EffectBox className="effect-box"/> : null}
            
            {/* <Player /> */}

        </div>
        </>
    )
}

export default Track