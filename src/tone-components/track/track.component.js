import { useState } from "react";
import Player from "../player/player.component";
import Recorder from "../recorder/recorder.component"
import * as Tone from 'tone';
import Reverb from '../../tone-components/effects/reverb/reverb.component';
import PingPong from '../../tone-components/effects/pingpong/pingpont.component';

/**
 * 
 * TODO track can have audioCtx and recorder lifted here similar to audioUrl to handle those states ??? 
 */

const Track = () => {
    // tone component instance - keep track of single intance in state - each track has it's own instance 

    const [_audioURL, set_audioURL] = useState(null)
   
    /**
     * 
     * @param {fetch from Recorder onstop} audioU 
     */
    const fetchAudioURL = (audioU) => {
        set_audioURL(audioU)
    }

    const _recorder = new Tone.Recorder();
    const _audioContext = new Tone.UserMedia()

    return (
        <>
            <div className="track">
            <Recorder
            audioCTX={fetchAudioURL}
            recorder={_recorder}
            actxTone={_audioContext}/>
          
            <Player 
            actxTone={_audioContext}
            audioUrl={_audioURL}/>
          
            <PingPong
            actxTone={_audioContext}
            recorder={_recorder}/>
          
            <Reverb
            actxTone={_audioContext}
            recorder={_recorder}/>
            </div>
        </>

            
    )
}

export default Track