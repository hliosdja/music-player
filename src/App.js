import React, { useState, useRef } from "react";

// data
import data from "./list.js";

// css
import "./styles/app.scss";

// component import
import Song from "./components/song";
import Player from "./components/player";
import Library from "./components/library";
import Nav from "./components/nav";

function App() {
  // ref
  const audioRef = useRef(null);

  // event handler
  const songTimeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  const activeLibrarySongHandler = (songIndex) => {
    const activeSong = songs.map((track) => {
      if (track.id === songIndex.id) {
        return {
          ...track,
          active: true,
        };
      } else {
        return {
          ...track,
          active: false,
        };
      }
    });
    setSongs(activeSong);
  };

  const autoSkipAfterEnd = async () => {
    let currentSongIndex = songs.findIndex(
      (songs) => songs.id === currentSong.id
    );
    await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
    activeLibrarySongHandler(songs[(currentSongIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  // states
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song
        cover={currentSong.cover}
        title={currentSong.title}
        artist={currentSong.artist}
      />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        id={currentSong.id}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        setSongs={setSongs}
      />
      <Library
        id={currentSong.id}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={songTimeHandler}
        onLoadedMetadata={songTimeHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={autoSkipAfterEnd}
      ></audio>
    </div>
  );
}

export default App;
