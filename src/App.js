import React, {useState} from 'react';
import data from './list.js';
import './styles/app.scss';

import Song from './components/song';
import Player from './components/player';


function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div>
      <Song 
        cover={currentSong.cover}
        title={currentSong.title}
        artist={currentSong.artist}
      />
      <Player currentSong={currentSong} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
