import * as Tone from 'tone';
// import { IoRadioButtonOn, IoStop } from "react-icons/io5";
import Player from '../player/player.component';
import { useState } from 'react';

const Recorder = (props) => {
 
 
 
  const [audioUrl, setAudioUrl] = useState(null)
  const [audioUrlList, setAudioUrlList] = useState([])

  const urls = []

  const recorder = props.recorder;
  const actxTone = props.actxTone
  const synth = new Tone.MembraneSynth().toDestination();
  let url = null

  const tracker = () => {
    setAudioUrlList(prevUrl => [...prevUrl, 1])
  }

  function AudioTracks(props) {
    // const actxToneTo = props.actxTone
    // const audioUrlTo = props.audioUrl

    // let tracks = null

  //   const tracks = audioUrlList.map(() => {

    // if(audioUrlList instanceof URL) {
    // if(typeof audioUrlList  === 'object') {
      
    //   console.log('bllobed')
    //   tracks = audioUrlList.map(() => {
        
    //         <Player 
    //         actxTone={actxTone}
    //         audioUrl={audioUrl}/>
    //      })
    // }
    
  //  return (tracks)
  }

  const _stopRecording = async () => {
  const recording = await recorder.stop();
  url = URL.createObjectURL(recording);
  setAudioUrl(url)
  // setAudioUrlList(audioUrl)
  tracker()
  // if(audioUrlList) {
  //   console.log('audio list', audioUrlList)
  // }
  console.log('audio list', typeof audioUrlList, audioUrlList)

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
      <button id='button' onClick={_startRecording}>record</button>
      <button id='button-stop' onClick={_stopRecording}>stop</button>
     <br></br>
     {/* TODO place in  AudioTracks - move AudioTracks to Components*/}
     {audioUrlList.map((v,index) => (
        <Player key={index} 
        actxTone={actxTone}
        audioUrl={audioUrl}/>

      ))}
       

      {/* <AudioTracks
         actxTone={actxTone}
         audioUrl={audioUrl} /> */}
      {/* <Player 
          actxTone={actxTone}
          audioUrl={audioUrl}/>  */}
      </div>
    </>
  )
  
}

export default Recorder