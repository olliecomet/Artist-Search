import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchInput, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Artist Name" value={searchInput} onChange={handleChange}></input>
      <button type="submit">Search</button>
    </form>
  );
};

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Search;
