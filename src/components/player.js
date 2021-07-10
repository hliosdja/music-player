import React, { useEffect } from "react";
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
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  setSongs,
}) => {
  //useEffect
  useEffect(() => {
    const activeSong = songs.map((track) => {
      console.log(track);
      if (track.id === currentSong.id) {
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
  }, [currentSong]);

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

  const skipSongHandler = async (direction) => {
    let currentSongIndex = songs.findIndex(
      (songs) => songs.id === currentSong.id
    );
    if (direction === "previous") {
      if ((currentSongIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentSongIndex - 1) % songs.length]);
      if (isPlaying) audioRef.current.play();
    } else if (direction === "next") {
      await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
      if (isPlaying) audioRef.current.play();
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
          max={isPlaying ? songInfo.duration : "0:00"}
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
