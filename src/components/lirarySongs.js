import React from 'react';

const LibrarySongs = ({song, setCurrentSong, audioRef, isPlaying}) => {

    // event handlers
    const songSelectHandler = () => {
        setCurrentSong(song)
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then(audio => {
                    audioRef.current.play();
                })
            }
        }
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