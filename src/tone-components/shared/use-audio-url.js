import { createContext } from "react";

const useAudioUrl = (url) => {
  const audioUrlCtx = createContext()
  // const [data, setData] = useState(null)
  return audioUrlCtx

  // useEffect(() => {
  //   setData(url)
  // }, [url])
}

export default useAudioUrl

