import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying}) => {

    //Ref
    const audioRef = useRef(null);

    //event handlers
    const songTimeHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration})
    }
    
    const playHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const songSeekHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    // format start and end time
    const timeFormat = (time) => {
        return Math.floor(time / 60) + " : " + ("0" + Math.floor(time % 60)).slice(-2)
    }

    //state
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })
    return(
        <div className="player-container">
            <div className="time-control">
                <p>{timeFormat(songInfo.currentTime)}</p>
                <input onChange={songSeekHandler} min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" name="" id=""/>
                <p>{timeFormat(songInfo.duration)}</p>
            </div>
            <div className="player-control">
                <FontAwesomeIcon className="previous" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon className="next" size="2x" icon={faAngleRight}/>
                <audio onTimeUpdate={songTimeHandler} onLoadedMetadata={songTimeHandler} ref={audioRef} src={currentSong.audio}></audio>
            </div>
        </div>
    )
}

export default Player;