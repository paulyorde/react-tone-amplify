import * as Tone from 'tone';
// import { IoRadioButtonOn, IoStop } from "react-icons/io5";

const Recorder = (props) => {
 
  const recorder = props.recorder;
  const actxTone = props.actxTone;
   /**
     *inject parent component function -Lift State Up- 
     */
  const audioURLOut = props.audioCTX;
  let synth = null

  const openAudioContext = () => {
    actxTone.open().then(() => {
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
    actxTone.connect(recorder)

    recorder.start()
  };

  const _stopRecording = async () => {
    const recording = await recorder.stop();
    const url = URL.createObjectURL(recording);
   
    audioURLOut(url)
  };

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
