import './App.css'
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchResults: [{ name: 'Josh1', artist: 'Yoshi1', album: 'Bear1', id: 1 },
        { name: 'Josh2', artist: 'Yoshi2', album: 'Bear2', id: 2 },
        { name: 'Josh3', artist: 'Yoshi3', album: 'Bear3', id: 3 }],
      playlistName: 'Yoshi Playlist',
      playlistTracks: [{ name: 'playlist1', artist: 'playlist artist1', album: 'playlistalbum1', id: 4 },
        { name: 'playlist2', artist: 'playlist artist2', album: 'playlistalbum2', id: 5 },
        { name: 'playlist3', artist: 'playlist artist3', album: 'playlistalbum3', id: 6 }]
    }

    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
  }

  savePlaylist () {
    // return this.state.playlistTracks.map(track => track.uri)
  }

  updatePlaylistName (name) {
    this.setState({ playlistName: name })
  }

  removeTrack (track) {
    const tracks = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id)
    this.setState({ playlistTracks: tracks })
  }

  addTrack (track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return
    }
    this.setState({ playlistTracks: this.state.playlistTracks.concat(track) })
  }

  render () {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} isRemoval={false} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} isRemoval={true} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
        </div>
      </div>
    </div>
    )
  }
}

export default App
