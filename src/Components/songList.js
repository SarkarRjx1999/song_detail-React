import React, { Component } from 'react';
import { connect } from 'react-redux';
import { slectSong } from '../actions';

class songList extends Component {
   renderList = () => {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={()=> this.props.slectSong(song)}>Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };
  render() {
    return <div  className="ui divided list"> {this.renderList()} </div>
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
}
export default connect(mapStateToProps,{ slectSong })(songList);