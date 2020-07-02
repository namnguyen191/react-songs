// The name index.js is for webpack to automatically import it without specifying the name

// Action Creator
export const selectSong = (song) => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};