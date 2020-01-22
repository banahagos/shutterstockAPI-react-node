import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.getResults(this.state.searchTerm)
  }

  render() {
    return (
      <div className="search-form-container">
        <form onSubmit={this.handleFormSubmit} className="search-form">
          <input name="searchTerm" type="text" value={this.state.searchTerm} onChange={this.handleInputChange} className="input" placeholder="Search for images..." />
          <button className="button is-primary">Search</button>
        </form>
      </div>
    )
  }

}

export default Search;
