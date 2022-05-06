import * as Tone from 'tone';

import React, {useState} from "react";

const AudioURLStateContext = React.createContext({
    recorder: null,
    axtTone: null,
    reverb: null,
    pingPong: null,
    audioTrack: null,
    audioTrackCTX: () => {}
})

export const AudioProvider = (props) => {
    const [_audioURL, set_audioURL] = useState(null)
    // const [recorder, setRecorder] = useState(null)

    const fetchAudioURL = (audioU) => {
        set_audioURL(audioU)
    }

    const _recorder = new Tone.Recorder();
    const _audioContext = new Tone.UserMedia()
    const _reverb = new Tone.Reverb({"wet": 1,"decay": 1.9,"preDelay": 1.00})
    const options = {debug: true, delayTime: "4n", feedBack: .04}
    const _pingPong =  new Tone.PingPongDelay({options})

    return (
        <AudioURLStateContext.Provider value={
            {
                audioTrack: _audioURL,
                audioTrackCTX: fetchAudioURL,
                recorder: _recorder,
                axtTone: _audioContext,
                reverb: _reverb,
                pingPong: _pingPong
            
            }}>
            {props.children}
        </AudioURLStateContext.Provider>
    )
}

export default AudioURLStateContext


