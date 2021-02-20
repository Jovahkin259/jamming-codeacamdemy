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
        { name: 'Josh3', artist: 'Yoshi3', album: 'Bear3', id: 3 }]
    }
  }

  render () {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
    )
  }
}

export default App
