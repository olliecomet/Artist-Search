import React from 'react';
import PropTypes from 'prop-types';

const Lyric = ({ title, lyrics }) => {
  return (
    <section>
      <h2>{title}</h2>
      {lyrics ? <pre>{lyrics}</pre> : <p>No lyrics found :,(</p>}
    </section>
  );
};

Lyric.propTypes = {
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string
};

export default Lyric;
