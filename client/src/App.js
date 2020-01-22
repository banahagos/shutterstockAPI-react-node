import React from 'react';
import './App.css';
import Search from './component/Search';
import axios from 'axios';
import Card from './component/Card'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      results: {}
    }
  }

  getResults = async (searchTerm) => {
    try {
      const results = await axios.get(`/api/images/?searchTerm=${searchTerm}`)
      console.log(results.data)
      this.setState({
        isLoading: false,
        results: results.data
      })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div className="App">
        <Search getResults={this.getResults} />
        <div className="search-results">
          {this.state.isLoading === false ? this.state.results.map(e => {
            return (
              <Card
                key={e.id}
                img={e.assets.preview.url}
                alt={this.state.searchTerm}
              />
            )
          }) : ''}
        </div>
      </div>
    );
  }

}

export default App;
