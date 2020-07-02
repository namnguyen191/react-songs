// The name index.js is for webpack to automatically import it without specifying the name

import { combineReducers } from 'redux';

// Reducers
const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration: '4:05'
        },
        {
            title: 'All Star',
            duration: '3:15'
        },
        {
            title: 'I want it that way',
            duration: '1:45'
        },
        {
            title: 'Macarena',
            duration: '2:30'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});