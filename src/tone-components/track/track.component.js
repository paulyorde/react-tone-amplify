import { useEffect, useContext, useState } from "react";
import Player from "../player/player.component";
import Recorder from "../recorder/recorder.component"
import * as Tone from 'tone';
import Reverb from '../../tone-components/effects/reverb/reverb.component';
import PingPong from '../../tone-components/effects/pingpong/pingpont.component';

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
     * open mic on Track component initializtion 
     */
    useEffect(() => {
        openAudioContext()
    },[]) 

    const _recorder = new Tone.Recorder();
    const _audioContext = new Tone.UserMedia()

    const openAudioContext = () => {
        _audioContext.open().then(() => {
            console.log("mic open");
            }).catch(e => {
            console.log("mic not open", e);
        });
    }

    // create service that listens to trackCreated event and builds Recorder,Player,Effects

    return (
        <>
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
        </>

            
    )
}

export default Track