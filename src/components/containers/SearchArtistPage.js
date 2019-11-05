import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../searches/Search';
import PagingButtons from '../paging/PagingButtons';
import Artists from '../artists/Artists';
import getArtists from '../services/getArtists';

export default class SearchArtistPage extends Component {
  static propTypes = {

  }

  state = {
    searchInput: '',
    artists: []
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    getArtists(this.state.searchInput, 0)
      .then(result => this.setState({ artists: result }));
  }

  render() {
    return (
      <>
        <Search
          searchInput={this.state.searchInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <PagingButtons />
        <Artists items={this.state.artists}/>
      </>
    );
  }
}
