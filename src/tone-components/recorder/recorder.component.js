import { useContext } from 'react';
import * as Tone from 'tone';
import AudioURLStateContext from '../shared/audio-url-state-context';
// import { IoRadioButtonOn, IoStop } from "react-icons/io5";

const Recorder = (props) => {
  const trackCreateion = useContext(AudioURLStateContext)


  /**
   * p5
   */
  let soundFile = null

  const p5_openAudioIn = () => {
    trackCreateion.p5_audioIn.start().then((v) => console.log('start audio::',v))
    const micLevel = trackCreateion.p5_audioIn.getLevel();
    console.log(micLevel, '::mic level')
    
  }
  
  const _p5_startRecording = async () => {
    p5_openAudioIn()
    trackCreateion.p5.userStartAudio();
    trackCreateion.p5_recorder.setInput(trackCreateion.p5_audioIn);
    soundFile = new trackCreateion._p5.SoundFile();
    trackCreateion.p5_recorder.record(soundFile);
  }

  const _p5_stopRecording = () => {
    trackCreateion.p5_recorder.stop()
  }

  const _p5_play = () => {
    soundFile.play(); // play the result!
    trackCreateion._p5.save(soundFile, 'mySound.wav');
  }



  /**
   * p5 end
   */








   /**
     *inject parent component function -Lift State Up- 
     * @function audioURLOut
     */
  const audioURLOut = props.audioCTX;
  let synth = null

  const openAudioContext = () => {
      trackCreateion.axtTone.open().then(() => {
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
    trackCreateion.axtTone.connect(trackCreateion.recorder)

    trackCreateion.recorder.start()
  };

  const _stopRecording = async () => {
    const recording = await trackCreateion.recorder.stop();
    const url = URL.createObjectURL(recording);
   
    audioURLOut(url)
  };

  return (
    <>
      <div>
        <button id='button' onClick={_startRecording}>record</button>
        <button id='button-stop' onClick={_stopRecording}>stop</button>

        <button id='button-stop' onClick={_p5_startRecording}>record p5</button>
        <button id='button-stop' onClick={_p5_stopRecording}>stop p5</button>

        <button id='button-stop' onClick={_p5_play}>play p5</button>

        

      </div>
    </>
  )
  
}

export default Recorder
