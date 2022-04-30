import Player from "../player/player.component";
import Recorder from "../recorder/recorder.component"
import * as Tone from 'tone';
import Reverb from '../../tone-components/effects/reverb/reverb.component';
import PingPong from '../../tone-components/effects/pingpong/pingpont.component';

import { IoOptionsOutline } from "react-icons/io5";

import AudioURLStateContext from "../shared/audio-url-state-context";
import { useState } from "react";

const Track = () => {
   
    const [_audioURL, set_audioURL] = useState(null)
    let [effects, setEffects] = useState(null)
    let [trackKey, setTrackKey] = useState(0)

    /**
     * 
     * @param {fetch from Recorder onstop} audioU 
     */
    const fetchAudioURL = (audioU) => {
        set_audioURL(audioU)
    }

    /**
     * TODO new these on create track -stop audiocntext error ( user action needed )
     * TODO tone component instance - keep track of single intance in state - each track has it's own instance 
     */
    const _recorder = new Tone.Recorder();
    const _audioContext = new Tone.UserMedia()
    const _reverb = new Tone.Reverb({"wet": 1,"decay": 1.9,"preDelay": 1.00})
    const options = {debug: true, delayTime: "4n", feedBack: .04}
    const _pingPong =  new Tone.PingPongDelay({options})


    const openEffects = () => {
        const  keyCounter = trackKey + 1
        setTrackKey(keyCounter)
        setEffects(<PingPong key={keyCounter} />)
      }

    return (
        <>
            {/* pass state from this component to any compoent with useContext */}
           <AudioURLStateContext.Provider value={{
               axtTone: _audioContext,
               recorder: _recorder,
               reverb: _reverb,
               pingPong: _pingPong
           }}>
                <div className="track">
                    <Recorder
                    audioCTX={fetchAudioURL} />

                    <div className="effectSoundBox">
                         {/* <PingPong /> */}
                    {effects}
                
                    </div>
                    <button onClick={openEffects} className='tooltip'><IoOptionsOutline/><span className='tooltiptext'>open effects</span></button>

                    {/* <Reverb />  */}
                
                    <Player 
                    audioUrl={_audioURL} />
                
                  
                </div>
           </AudioURLStateContext.Provider>
        </>
    )
}

export default Track