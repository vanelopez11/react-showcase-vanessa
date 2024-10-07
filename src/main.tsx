import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import App from './components/App/App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
=======
import App from './App'
import './index.css'
// import VideoPlayer from './VideoPlayer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <VideoPlayer url={''} playing={true} volume={5} playbackRate={7} onPause={()=>onpause} onPlay={()=>onplay}/> */}
    <App/>
>>>>>>> 0c92061 (FeedVideo)
  </StrictMode>,
)
