import React from 'react';
import PropTypes from 'prop-types';

const PagingButtons = ({ pageUpFunction, pageDownFunction }) => {
  return (
    <section>
      <button onClick={pageUpFunction}>Page up</button>
      <button onClick={pageDownFunction}>Page down</button>
    </section>
  );
};

PagingButtons.propTypes = {
  pageUpFunction: PropTypes.func.isRequired,
  pageDownFunction: PropTypes.func.isRequired
};

export default PagingButtons;
