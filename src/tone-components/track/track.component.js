import { useState } from "react";

import * as Tone from 'tone';
import Player from "../player/player.component";
import Recorder from "../recorder/recorder.component"
import Reverb from '../../tone-components/effects/reverb/reverb.component';
import PingPong from '../../tone-components/effects/pingpong/pingpont.component';
import AudioURLStateContext from "../shared/audio-url-state-context";

// import * as p5 from 'node_modules/p5/lib/addons/p5.sound'

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
     * 
     */


    /**
     * p5
     */

    const _p5 = p5
    const _p5_audioIn = new p5.AudioIn();
    const _p5_recorder = new p5.SoundRecorder();


    /**
     * p5 end
     */

















    
    const _recorder = new Tone.Recorder();
    const _audioContext = new Tone.UserMedia()
    const _transport = Tone.Transport

    return (
        <>
            {/* pass state from this component to any compoent with useContext */}
           <AudioURLStateContext.Provider value={{
               axtTone: _audioContext,
               recorder: _recorder,
               transport: _transport,
               p5_audioIn: _p5_audioIn,
               p5_recorder: _p5_recorder,
               _p5: _p5
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