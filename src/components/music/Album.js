import React from 'react';
import PropTypes from 'prop-types';

const Album = ({ id, name, cover }) => {
  return (
    <section id={id}>
      <img src={cover}/>
      <h3>Name: {name}</h3>
    </section>
  );
};

Album.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

export default Album;
