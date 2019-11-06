import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Recording = ({ id, title, artist }) => {
  return (
    <section id={id}>
      <Link to={`/lyrics/${artist}/${title}`}><h3>Title: {title}</h3></Link>
    </section>
  );
};

Recording.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
};

export default Recording;
