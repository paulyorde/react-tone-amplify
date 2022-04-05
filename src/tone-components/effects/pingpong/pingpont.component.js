import * as Tone from 'tone';

// function PingPongDelayRate(props) {
//   if (props.delayRate) {
//     // const dt = pingPong.delayTime.value
//     pingPong.delayTime.value = props.delayRate
//     return <p>{props.delayRate}</p>
//   }
//   return pingPong.delayTime.value
// }


const PingPong = (props) => {
  const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
  const actxTone = props.actxTone
  const recorder = props.recorder

  const _connectPingPong = () => {
    pingPong.connect(recorder)
    actxTone.connect(pingPong)
    pingPong.toDestination();
  }
  function _disconnectPingPong() {
    actxTone.disconnect(pingPong)
  }

  return <div>
     <button id='button-stop' onClick={_connectPingPong}>ping--pong</button>
     <button id='button-stop' onClick={_disconnectPingPong}>stop--pong</button>

  {/* <PingPongDelayRate
            delayRate={delayRate} /> */}
  </div>
}

export default PingPong