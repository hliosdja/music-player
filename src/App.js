import React from 'react';
import './styles/app.scss';

import Song from './components/song';
import Player from './components/player';


function App() {
  return (
    <div>
      <Song />
      <Player />
    </div>
  );
}

export default App;
