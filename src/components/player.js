import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  isPlaying,
  songs,
  currentSong,
  setCurrentSong,
  id,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
}) => {
  //event handlers
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const skipSongHandler = (direction) => {
    let currentSongIndex = songs.findIndex(
      (songs) => songs.id === currentSong.id
    );
    if (direction === "previous") {
      if ((currentSongIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }
      setCurrentSong(songs[(currentSongIndex - 1) % songs.length]);
      playHandler();
    } else if (direction === "next") {
      setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
      playHandler();
    }
  };

  const songSeekHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  // format start and end time
  const timeFormat = (time) => {
    return (
      Math.floor(time / 60) + " : " + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{timeFormat(songInfo.currentTime)}</p>
        <input
          onChange={songSeekHandler}
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{timeFormat(songInfo.duration)}</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon
          onClick={() => skipSongHandler("previous")}
          className="previous"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playHandler}
          className="play"
          size="3x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipSongHandler("next")}
          className="next"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
