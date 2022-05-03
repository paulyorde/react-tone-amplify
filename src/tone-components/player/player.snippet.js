  // useRef(() => {
  //   window.onmessage = async ({ data: { question } }) => {
  //     window.postMessage({
  //       answer: 42,
  //     });
  //   };

  //   console.log('player', window.onmessage)
  // })


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
