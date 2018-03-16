import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '.././styles/Library.css';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className="library">
        {
            this.state.albums.map( (album, index) =>
              <Link to={`/album/${album.slug}`} key={index}>
              <section className="album-container">
                <img className="album-cover" src={album.albumCover} alt={album.title} />
                <div id="title">{album.title}</div>
                <div id="artist">{album.artist}</div>
                <div id="song-length">{album.songs.length} songs</div>
              </section>
              </Link>
            )
         }
      </section>
    );
  }
}

export default Library;
