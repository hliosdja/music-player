import React from 'react';

const LibrarySongs = ({song, setCurrentSong, currentSong}) => {

    // event handlers
    const songSelectHandler = () => {
        setCurrentSong(song)
    }
    
    return(
        <div onClick={songSelectHandler} className="library-song-container">
            <img src={song.cover} alt=""/>
            <div className="song-desc">
                <h3>{song.title}</h3>            
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySongs;