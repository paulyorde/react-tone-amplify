import React from "react";

const AudioURLStateContext = React.createContext({
    recorder: null,
    axtTone: null,
    transport: null,
    p5_audioIn: null,
    p5_recorder: null,
    _p5: null
})

export default AudioURLStateContext

