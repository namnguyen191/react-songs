import React from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

import '../css/SongsList.css';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="song" key={song.title}>
                    <div className="songTitle">
                        {song.title}
                    </div>
                    <button className="selectButton" onClick={() => { this.props.selectSong(song) }}>
                        Select
                    </button>
                </div>    
            );
        });
    }

    render() {
        console.log(this.props);
        return (
            <div className="songsList">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        songs: state.songs
    };
};

export default connect(
    mapStateToProps,
    {
        selectSong: selectSong
    }
)(SongList);