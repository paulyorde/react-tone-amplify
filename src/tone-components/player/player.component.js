import { useContext } from 'react';
import * as Tone from 'tone';
import AudioURLStateContext from '../shared/audio-url-state-context';
// import { IoRadioButtonOn, IoStop } from "react-icons/io5";

const Player = (props) => {
  const trackContext = useContext(AudioURLStateContext)
  const audioU = props.audioUrl
  let player = null
 
  const _play = () => {
    trackContext.transport.start()
     player = new Tone.Player(audioU).toDestination();
     player.autostart = false;
     Tone.loaded().then((v) => {
      player.start()
      console.log('loaded::',v)
      console.log('transport::', trackContext.transport.seconds)
     }).catch((e) => console.log('error loading Tone::',e))
  }

  const _stop = () => {
    player.stop()
  }

  const _ff = () => {
    let time = new Tone.Time(trackContext.transport.getSecondsAtTime())
    trackContext.transport.seconds = time + 50
    console.log('transport::', trackContext.transport.seconds)
  }

  return (
    <>
      <div>
      <button id='button' onClick={_play}>play</button>
      <button id='button-stop' onClick={_stop}>stop</button>
      <br></br>
      </div>
    </>
  )

}

export default Player