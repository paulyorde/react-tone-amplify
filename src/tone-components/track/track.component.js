import { useEffect, useContext, useState } from "react";
import Player from "../player/player.component";
import Recorder from "../recorder/recorder.component"
import * as Tone from 'tone';
import Reverb from '../../tone-components/effects/reverb/reverb.component';
import PingPong from '../../tone-components/effects/pingpong/pingpont.component';

const Track = () => {

    const [aU, setAU] = useState(null)
   
    const getAU = (audioU) => {
        setAU(audioU)
    }
    
    /**
     * open mic on Track component initializtion 
     */
    useEffect(() => {
        openAudioContext()
    },[]) 

    const recorder = new Tone.Recorder();
    const audioContext = new Tone.UserMedia()

    const openAudioContext = () => {
        audioContext.open().then(() => {
            console.log("mic open");
            }).catch(e => {
            console.log("mic not open", e);
        });
    }

    

    // create service that listens to trackCreated event and builds Recorder,Player,Effects

    return (
        <>
            <Recorder
            audioCTX={getAU}
            recorder={recorder}
            actxTone={audioContext}/>

            <Player 
            actxTone={audioContext}
            audioUrl={aU}/>

            <PingPong
            actxTone={audioContext}
            recorder={recorder}/>

            <Reverb
            actxTone={audioContext}
            recorder={recorder}/>
        </>

            
    )
}

export default Track