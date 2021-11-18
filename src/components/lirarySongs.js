import React from "react";

const LibrarySongs = ({
  songs,
  song,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying
}) => {
  // event handlers
  const songSelectHandler = async () => {
    await setCurrentSong(song);

    // set the song to active, highlight active song and play active song
    const activeSong = songs.map((track) => {
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
    setIsPlaying(!isPlaying);
    audioRef.current.play();
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
