import { useContext } from 'react';
import * as Tone from 'tone';
import AudioURLStateContext from '../shared/audio-url-state-context';
import { IoRadioButtonOn, IoStop } from "react-icons/io5";

const Recorder = (props) => {
  const trackConext = useContext(AudioURLStateContext)

   /**
     *inject parent component function -Lift State Up- 
     * @function audioURLOut
     */
  const audioURLOut = props.audioCTX;
  let synth = null

  const openAudioContext = () => {
      trackConext.axtTone.open().then(() => {
      console.log("mic open");
      }).catch(e => {
      console.log("mic not open", e);
    })
  }

  const _startRecording = async () => {
    synth = new Tone.MembraneSynth().toDestination();
    synth.volume.value = .0011;
    synth.triggerAttackRelease("C1", "16n");
   
    openAudioContext()
    await Tone.start()
    trackConext.axtTone.connect(trackConext.recorder)

    trackConext.recorder.start()
  };

  const _stopRecording = async () => {
    const recording = await trackConext.recorder.stop();
    const url = URL.createObjectURL(recording);
   
    audioURLOut(url)
  };

  return (
    <>
      <div>
        <button className='button_record-start tooltip' id='button-start-recording' onClick={_startRecording}><IoRadioButtonOn/><span className='tooltiptext'>start recording</span></button>
        <button className='button_record-stop tooltip' id='button-stop-recording' onClick={_stopRecording}><IoStop/><span className='tooltiptext'>stop recording</span></button>
      </div>
    </>
  )
  
}

export default Recorder
