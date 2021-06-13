import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faStepForward, faStepBackward} from '@fortawesome/free-solid-svg-icons';

const Player = () => {
    return(
        <div className="player-container">
            <div className="time-control">
                <p>Start time</p>
                <input type="range" name="" id=""/>
                <p>End time</p>
            </div>
            <div className="player-control">
                <FontAwesomeIcon className="previous" size="2x" icon={faStepBackward}/>
                <FontAwesomeIcon className="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="next" size="2x" icon={faStepForward}/>
            </div>
        </div>
    )
}

export default Player;