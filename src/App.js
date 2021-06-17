import React, { useState, useRef } from 'react';

// data 
import data from './list.js';

// css
import './styles/app.scss';

// component import
import Song from './components/song';
import Player from './components/player';
import Library from './components/library';


function App() {
  // ref
  const audioRef = useRef(null);


  // event handler
  const songTimeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration})
  }

  // states
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })

  return (
    <div>
      <Song
        cover={currentSong.cover}
        title={currentSong.title}
        artist={currentSong.artist}
      />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} audioRef={audioRef} songInfo={songInfo} setSongInfo={setSongInfo}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying}/>
      <audio onTimeUpdate={songTimeHandler} onLoadedMetadata={songTimeHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
