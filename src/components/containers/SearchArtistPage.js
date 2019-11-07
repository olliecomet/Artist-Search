import React, { Component } from 'react';
import Search from '../searches/Search';
import PagingButtons from '../paging/PagingButtons';
import Artists from '../artists/Artists';
import getArtists from '../services/getArtists';

export default class SearchArtistPage extends Component {
  state = {
    searchInput: '',
    artists: [],
    page: 0,
    upDisable: true,
    downDisable: true
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    getArtists(this.state.searchInput, 0)
      .then(result => this.setState({ 
        artists: result, 
        upDisable: false, 
      }));
  }

  pageUpFunction = () => {
    this.setState(state => ({
      page: state.page + 1
    }), () => {
      return getArtists(this.state.searchInput, this.state.page)
        .then(result => this.setState({ 
          artists: result,
          downDisable: false
        }));
    });
  } 

  pageDownFunction = () => {
    this.setState(state => ({
      page: state.page - 1
    }), () => {
      return getArtists(this.state.searchInput, this.state.page)
        .then(result => this.setState({ 
          artists: result,
          downDisable: this.state.page === 0 ? true : false
        }));
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
          upDisable={this.state.upDisable}
          downDisable={this.state.downDisable}
        />
        <Artists items={this.state.artists}/>
      </>
    );
  }
}
