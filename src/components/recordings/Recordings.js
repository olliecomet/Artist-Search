import React from 'react';
import PropTypes from 'prop-types';
import Recording from './Recording';

const Recordings = ({ items }) => {
  const recordingList = items.map(item => {
    return <li key={item.id}><Recording {...item}/></li>;
  });
  return (
    <ul>
      {recordingList}
    </ul>
  );
};

Recordings.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired
};

export default Recordings;
