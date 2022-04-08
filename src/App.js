import './App.css';
import { useReactMediaRecorder } from 'react-media-recorder'

function App() {
  const {status,startRecording,stopRecording,mediaBlobUrl} = useReactMediaRecorder({screen:true})
  return (
    <div id="body">
      <p id="status">{status}</p>
      <video id="video" src={mediaBlobUrl} controls autoPlay loop />
      <br></br>
      <div id="buttons">
        <button id="startRecord" onClick={startRecording}>Start Recording</button>
        <button id="endRecord" onClick={stopRecording}>Stop Recording</button>
      </div>
    </div>
  );
}

export default App;
