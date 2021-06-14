import React from 'react';

const Song = (currentSong) => {
    return(
        <div className="song-container">
            <img src={currentSong.cover} alt=""></img>
            <h1>{currentSong.title}</h1>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}
export default Song;