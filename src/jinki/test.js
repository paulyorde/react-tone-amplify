import { useContext } from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import AudioURLStateContext from '../tone-components/shared/audio-url-state-context'


const MusicPlayer = () => {
    // use audio context 
    const audioCTX = useContext(AudioURLStateContext)
    return (
        <ReactJkMusicPlayer  a/> 
    )
}

export default MusicPlayer
