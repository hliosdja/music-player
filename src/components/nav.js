import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return (
        <div className="nav-container">
            <h3>Music</h3>
            <button onClick={()=> setLibraryStatus(!libraryStatus)}>
                <p>Library <FontAwesomeIcon icon={faMusic} /></p>
            </button>
        </div>
    )
}  

export default Nav;