import React from 'react';
import PropTypes from 'prop-types';

const Lyric = ({ title, lyrics }) => {
  return (
    <section>
      <h2>{title}</h2>
      <pre>{lyrics}</pre>
    </section>
  );
};

Lyric.propTypes = {
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired
};

export default Lyric;
