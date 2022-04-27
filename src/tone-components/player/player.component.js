import * as Tone from 'tone';
// import { Transport } from 'tone/Tone/core/clock/Transport';
// import { IoRadioButtonOn, IoStop } from "react-icons/io5";

const Player = (props) => {
  const audioU = props.audioUrl
  let player = null
  let _transport = null
 
  const _play = () => {
     player = new Tone.Player(audioU).toDestination();
     player.autostart = false;
     Tone.loaded().then((v) => {
      player.start()
     
      _transport = Tone.Transport.start()
      console.log('transport', _transport)

      console.log('loaded::',v)
     }).catch((e) => console.log('error loading Tone::',e))
  }

  const _stop = () => {
    player.stop()
  }

  const _ff = () => {
    console.log('ticks', _transport.ticks)
    console.log('sample time', _transport.sampleTime)
    console.log('setconds at time', _transport.getSecondsAtTime(_transport.ticks))
    console.log('ticks at time', _transport.getTicksAtTime(_transport.ticks))
    // audio buffer size / duration / sample size 
    // Transport start / pause / stop
    // 
    // player.seek(1, "+.01");
  }

  return (
    <>
      <div>
      <button id='button' onClick={_play}>play</button>
      <button id='button-stop' onClick={_stop}>stop</button>
      <button id='button-stop' onClick={_ff}>ff</button>
      </div>
      <br></br>
    </>
  )

}

export default Player