import React from 'react';
import PropTypes from 'prop-types';
import Recording from './Recording';

const Recordings = ({ items, artist }) => {
  const recordingList = items.map(item => {
    return <li key={item.id}><Recording {...item} artist={artist} /></li>;
  });
  return (
    <ul>
      {recordingList}
    </ul>
  );
};

Recordings.propTypes = {
  artist: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired
};

export default Recordings;
