import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    const audioRef = useRef(null);
    const songTimeHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration})
    }
    const timeFormat = (time) => {
        return Math.floor(time / 60) + " : " + ("0" + Math.floor(time % 60)).slice(-2)
    }
    const [songInfo, setSongInfo] = useState({
        current: null,
        duration: null
    })
    const playerHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }
    return(
        <div className="player-container">
            <div className="time-control">
                <p>{timeFormat(songInfo.currentTime)}</p>
                <input type="range" name="" id=""/>
                <p>{timeFormat(songInfo.duration)}</p>
            </div>
            <div className="player-control">
                <FontAwesomeIcon className="previous" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playerHandler} className="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="next" size="2x" icon={faAngleRight}/>
                <audio onTimeUpdate={songTimeHandler} ref={audioRef} src={currentSong.audio}></audio>
            </div>
        </div>
    )
}

export default Player;