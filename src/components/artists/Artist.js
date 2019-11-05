import React from 'react';
import PropTypes from 'prop-types';

export const Artist = ({ name, country, disambiguation }) => {
  return (
    <section>
      <h3>Name: {name}</h3>
      {country && <p>Country: {country}</p>}
      {disambiguation && <p>{disambiguation}</p>}
    </section>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string,
  disambiguation: PropTypes.string
};
