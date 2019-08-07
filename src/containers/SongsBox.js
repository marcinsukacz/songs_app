import React, {Component} from 'react';
import SongList from '../components/SongList';
import Song from '../components/Song';


class SongsBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null

    }

    this.handleSongSelected = this.handleSongSelected.bind(this);

  }


handleSongSelected(index){
  const selectedSong = this.state.songs[index]
  this.setState({selectedSong: selectedSong})
}

componentDidMount(){
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

  fetch(url)
  .then(res => res.json())
  .then(songs => this.setState({songs: songs}))
  .catch(err => console.error())

}




render (){
  return (<div>
      <SongList onSongSelected={this.handleSongSelected} />
      <Song />
  </div>);
}

}


export default SongsBox;
