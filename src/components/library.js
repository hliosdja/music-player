import React from 'react';
import LibrarySongs from './lirarySongs';

const Library = ({songs, setCurrentSong, currentSong}) => {
    return(
        <div className="library-song-list">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySongs song={song} setCurrentSong={setCurrentSong}/>
                ))}
            </div>
        </div>
    )
}

export default Library;