import { useContext } from 'react';
import * as Tone from 'tone';
import AudioURLStateContext from '../shared/audio-url-state-context'; 
// import { Transport } from 'tone/Tone/core/clock/Transport';
// import { IoRadioButtonOn, IoStop } from "react-icons/io5";

const Player = () => {
  const ctx = useContext(AudioURLStateContext)
  // const audioU = props.audioUrl
  // let player = null
  // let _transport = null
 
  // const _play = () => {
  //    player = new Tone.Player(ctx.audioTrack).toDestination();
  //    player.autostart = false;
  //    Tone.loaded().then((v) => {
  //     player.start()
     
  //     _transport = Tone.Transport.start()
  //     console.log('transport', _transport)

  //     console.log('loaded::',v)
  //    }).catch((e) => console.log('error loading Tone::',e))
  // }

  // const _stop = () => {
  //   player.stop()
  // }

  // const _ff = () => {
  //   console.log('ticks', _transport.ticks)
  //   console.log('sample time', _transport.sampleTime)
  //   console.log('setconds at time', _transport.getSecondsAtTime(_transport.ticks))
  //   console.log('ticks at time', _transport.getTicksAtTime(_transport.ticks))
    // audio buffer size / duration / sample size 
    // Transport start / pause / stop
    // 
    // player.seek(1, "+.01");
  // }

  return (
    <>
      <div className='tooltip'>
        <span className='tooltiptext'>play</span>
        {/* <audio src={audioU} controls></audio> */}
        <audio src={ctx.audioTrack} controls></audio>
      </div>
    </>
  )

}

export default Player