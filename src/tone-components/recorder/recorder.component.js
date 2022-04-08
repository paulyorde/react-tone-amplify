import * as Tone from 'tone';
import { IoRadioButtonOn, IoStop } from "react-icons/io5";
import Player from '../player/player.component';
import { useState } from 'react';

const Recorder = (props) => {
 
  const [audioUrl, setAudioUrl] = useState(null)

  const recorder = props.recorder;
  const actxTone = props.actxTone
  const synth = new Tone.MembraneSynth().toDestination();
  let url = null

  const _stopRecording = async () => {
  const recording = await recorder.stop();
  url = URL.createObjectURL(recording);
  setAudioUrl(url)
  const anchor = document.createElement("a");
  anchor.download = "recording.webm";
  anchor.href = url;
  anchor.click();
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
      <button id='button' onClick={_startRecording}>record<IoRadioButtonOn /></button>
      <button id='button-stop' onClick={_stopRecording}>stop<IoStop /></button>
      <Player 
          actxTone={actxTone}
          audioUrl={audioUrl}/>
      </div>
    </>
  )
  
}

export default Recorder