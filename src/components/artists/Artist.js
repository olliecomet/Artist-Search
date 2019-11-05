import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ id, name, country, disambiguation }) => {
  return (
    <section>
      <h3 id={id}>Name: {name}</h3>
      {country && <p>Country: {country}</p>}
      {disambiguation && <p>{disambiguation}</p>}
    </section>
  );
};

Artist.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string,
  disambiguation: PropTypes.string
};

export default Artist;
