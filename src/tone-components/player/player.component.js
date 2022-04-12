import * as Tone from 'tone';
// import { IoRadioButtonOn, IoStop } from "react-icons/io5";

const Player = (props) => {
  const audioU = props.audioUrl

  const player = new Tone.Player(audioU).toDestination();
  player.autostart = false;
 
  const _play = () => {
    player.start()
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