import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, operation }) => (
  <div className="display">
    {`${result} ${operation || ''}`}
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  operation: '',
};

export default Display;
