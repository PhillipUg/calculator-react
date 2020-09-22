import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => (
  <button type="button" className="btn" style={{ background: color, width: wide ? '50%' : '25%' }}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

export default Button;
