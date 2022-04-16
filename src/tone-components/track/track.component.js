import { useState } from "react";

import Player from "../player/player.component";
import Recorder from "../recorder/recorder.component"
import * as Tone from 'tone';
import Reverb from '../../tone-components/effects/reverb/reverb.component';
import PingPong from '../../tone-components/effects/pingpong/pingpont.component';

import AudioURLStateContext from "../shared/audio-url-state-context";

/**
 * 
 * TODO track can have audioCtx and recorder lifted here similar to audioUrl to handle those states ??? 
 */

const Track = () => {
   
    const [_audioURL, set_audioURL] = useState(null)

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

    return (
        <>
            {/* pass state from this component to any compoent with useContext */}
           <AudioURLStateContext.Provider value={{
               axtTone: _audioContext,
               recorder: _recorder
           }}>
                <div className="track">
                    <Recorder
                    audioCTX={fetchAudioURL} />
                
                    <Player 
                    audioUrl={_audioURL} />
                
                    <PingPong
                    actxTone={_audioContext}
                    recorder={_recorder}/>
                
                    <Reverb
                    actxTone={_audioContext}
                    recorder={_recorder}/>
                </div>
           </AudioURLStateContext.Provider>
        </>
    )
}

export default Track