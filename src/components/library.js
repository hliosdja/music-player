import React from 'react';
import LibrarySongs from './lirarySongs';

const Library = ({songs, setCurrentSong, audioRef, isPlaying}) => {
    return(
        <div className="library-song-list">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySongs song={song} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying}/>
                ))}
            </div>
        </div>
    )
}

export default Library;