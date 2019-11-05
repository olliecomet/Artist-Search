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
    artists: [],
    page: 0
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    getArtists(this.state.searchInput, 0)
      .then(result => this.setState({ artists: result }));
  }

  pageUpFunction = () => {
    this.setState(state => ({
      page: state.page + 1
    }), () => {
      return getArtists(this.state.searchInput, this.state.page)
        .then(result => this.setState({ artists: result }));
    });
  } 

  pageDownFunction = () => {
    this.setState(state => ({
      page: state.page - 1
    }), () => {
      return getArtists(this.state.searchInput, this.state.page)
        .then(result => this.setState({ artists: result }));
    });
  }

  render() {
    return (
      <>
        <Search
          searchInput={this.state.searchInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <PagingButtons 
          pageUpFunction={this.pageUpFunction}
          pageDownFunction={this.pageDownFunction}
        />
        <Artists items={this.state.artists}/>
      </>
    );
  }
}
