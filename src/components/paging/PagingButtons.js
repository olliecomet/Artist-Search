import React from 'react';
import PropTypes from 'prop-types';

const PagingButtons = ({ pageUpFunction, pageDownFunction, upDisable, downDisable }) => {
  return (
    <section>
      <button disabled={upDisable} onClick={pageUpFunction}>Page up</button>
      <button disabled={downDisable} onClick={pageDownFunction}>Page down</button>
    </section>
  );
};

PagingButtons.propTypes = {
  pageUpFunction: PropTypes.func.isRequired,
  pageDownFunction: PropTypes.func.isRequired,
  upDisable: PropTypes.bool.isRequired,
  downDisable: PropTypes.bool.isRequired
};

export default PagingButtons;
