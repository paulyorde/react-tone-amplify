import * as Tone from 'tone';
// import { IoRadioButtonOn, IoStop } from "react-icons/io5";
// import Player from '../player/player.component';

const Recorder = (props) => {
 
  const recorder = props.recorder;
  const actxTone = props.actxTone
  const audioURLOut = props.audioCTX
  const synth = new Tone.MembraneSynth().toDestination();

  const _stopRecording = async () => {
    const recording = await recorder.stop();
    const url = URL.createObjectURL(recording);
    audioURLOut(url)

    // const anchor = document.createElement("a");
    // anchor.download = "recording.webm";
    // anchor.href = url;
    // anchor.click();
  }

  const _startRecording = () => {
    actxTone.connect(recorder)
    synth.volume.value = .1;
    recorder.start()
    synth.triggerAttackRelease("C2", "16n");
  }

  return (
    <>
      <div>
        <button id='button' onClick={_startRecording}>record</button>
        <button id='button-stop' onClick={_stopRecording}>stop</button>
      </div>
    </>
  )
  
}

export default Recorder
