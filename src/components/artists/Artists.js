import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const Artists = ({ items }) => {
  const artistList = items.map(item => {
    return <li key={item.id}><Artist {...item} /></li>;
  });
  return (
    <ul>
      {artistList}
    </ul>
  );
};

Artists.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string,
    disambiguation: PropTypes.string
  })).isRequired
};

export default Artists;
