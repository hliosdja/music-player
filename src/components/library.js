import React from 'react';
import LibrarySongs from './lirarySongs';

const Library = ({id, songs, setSongs, setCurrentSong, audioRef, isPlaying, libraryStatus}) => {
    return(
        <div className={`library-song-list ${libraryStatus ? 'show-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySongs id={id} songs={songs} song={song} setSongs={setSongs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying}/>
                ))}
            </div>
        </div>
    )
}

export default Library;