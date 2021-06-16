import React, { useState } from 'react';

// data 
import data from './list.js';

// css
import './styles/app.scss';

// component import
import Song from './components/song';
import Player from './components/player';
import Library from './components/library';


function App() {

  // states
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Song
        cover={currentSong.cover}
        title={currentSong.title}
        artist={currentSong.artist}
      />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} 
      
      // setting this here just to remove compile warnings
      setSongs={setSongs}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} currentSong={currentSong} />
    </div>
  );
}

export default App;
