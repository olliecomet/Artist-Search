import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recordings from '../recordings/Recordings';
import getSongs from '../services/getSongs';

export default class RecordPage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    songs: []
  }

  componentDidMount() {
    return getSongs(this.props.match.params.albumId) 
      .then(result => this.setState({
        songs: result
      }));
  }

  render() {
    return (
      <>
        <Recordings items={this.state.songs} />
      </>
    );
  }
}

