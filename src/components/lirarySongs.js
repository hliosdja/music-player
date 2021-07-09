import React from "react";

const LibrarySongs = ({
  id,
  songs,
  song,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  // event handlers
  const songSelectHandler = () => {
    setCurrentSong(song);

    // set the song to active and highlight active song
    const activeSong = songs.map((track) => {
      console.log(track);
      if (track.id === song.id) {
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

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song-container ${song.active ? "active-song" : ""}`}
    >
      <img src={song.cover} alt="" />
      <div className="song-desc">
        <h3>{song.title}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySongs;
