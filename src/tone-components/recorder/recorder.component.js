import * as Tone from 'tone';

//TODO create recorder service singleton 

const Recorder = (props) => {
  const recorder = props.recorder;
  const actxTone = props.actxTone
  const synth = new Tone.MembraneSynth().toDestination();

  const _stopRecording = async () => {
  const recording = await recorder.stop();
  // download the recording by creating an anchor element and blob url
  const url = URL.createObjectURL(recording);
  const anchor = document.createElement("a");
  anchor.download = "recording.webm";
  anchor.href = url;
  anchor.click();
  }

  function _startRecording() {
    actxTone.connect(recorder)
    recorder.start()
    synth.triggerAttackRelease("C2", "16n");
  }

  return <div>
    <button id='button' onClick={_startRecording}>record</button>
    <button id='button-stop' onClick={_stopRecording}>stop</button>

  </div>
}

export default Recorder