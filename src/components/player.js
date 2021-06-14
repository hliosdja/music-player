import React, {useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong}) => {

    const audioRef = useRef(null);
    const playerHandler = (e) => {
        audioRef.current.play();
    }

    return(
        <div className="player-container">
            <div className="time-control">
                <p>Start time</p>
                <input type="range" name="" id=""/>
                <p>End time</p>
            </div>
            <div className="player-control">
                <FontAwesomeIcon className="previous" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playerHandler} className="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="next" size="2x" icon={faAngleRight}/>
                <audio ref={audioRef} src={currentSong.audio}></audio>
            </div>
        </div>
    )
}

export default Player;