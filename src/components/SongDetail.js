import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (song == null) {
        return (
            <div>
                Please select a song to display its details.
            </div>
        );
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: { song.title }
                <br></br>
                Duration: { song.duration }
            </p>
            
        </div>
    );
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
};

export default connect(
    mapStateToProps
)(SongDetail);