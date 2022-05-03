import * as Tone from 'tone';

import { IoRadioButtonOn, IoStop } from "react-icons/io5";

import AudioURLStateContext from '../shared/audio-url-state-context';
import { useContext } from 'react';

const Recorder = () => {
  const trackConext = useContext(AudioURLStateContext)

  let synth = null

  const _startRecording = async () => {
    synth = new Tone.MembraneSynth().toDestination();
    synth.volume.value = .0011;
    synth.triggerAttackRelease("C1", "16n");
   
    startDeviceAudioInputStream()
    await Tone.start()
    trackConext.axtTone.connect(trackConext.recorder)

    trackConext.recorder.start()
  };

  const _stopRecording = async () => {
    const recording = await trackConext.recorder.stop();
    const url = URL.createObjectURL(recording);
    trackConext.audioTrackCTX(url)
   
      console.log('disconnect record start')
      await trackConext.axtTone.disconnect(trackConext.recorder)
      await trackConext.recorder.dispose()
      console.log('disconnect record end')
  };
  
  const startDeviceAudioInputStream = () => {
    trackConext.axtTone.open().then(() => {
    console.log("mic open");
    }).catch(e => {
    console.log("mic not open", e);
  })
}

  return (
    <>
      <div>
        <button 
          className='button_record-start tooltip' 
          id='button-start-recording' 
          onClick={_startRecording}><IoRadioButtonOn/>
          <span className='tooltiptext'>start recording</span>
        </button>

        <button 
          className='button_record-stop tooltip' 
          id='button-stop-recording' 
          onClick={_stopRecording}><IoStop/>
          <span className='tooltiptext'>stop recording</span>
        </button>
      </div>
    </>
  )
  
}

export default Recorder
