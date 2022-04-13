import * as Tone from 'tone';
// import { IoRadioButtonOn, IoStop } from "react-icons/io5";

const Player = (props) => {
  const audioU = props.audioUrl
  let player = null
 
  const _play = () => {
     player = new Tone.Player(audioU).toDestination();
     player.autostart = false;
     Tone.loaded().then((v) => {
      player.start()
      console.log('loaded::',v)
     }).catch((e) => console.log('error loading Tone::',e))
  }

  const _stop = () => {
    player.stop()
  }

  return (
    <>
      <div>
      <button id='button' onClick={_play}>play</button>
      <button id='button-stop' onClick={_stop}>stop</button>
      </div>
      <br></br>
    </>
  )

}

export default Player