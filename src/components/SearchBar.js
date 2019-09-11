import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  handleChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Search</label>
          <input
            type="text"
            name="search"
            value={this.state.term}
            onChange={this.handleChange}
          ></input>
        </div>
      </form>
    );
  }
}

export default SearchBar;
