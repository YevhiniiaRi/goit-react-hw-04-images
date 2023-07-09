import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, showButton }) => {
  return (
    <>
      {showButton && (
        <button className="Button" onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};


Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  showButton: PropTypes.bool.isRequired,
};

export default Button;
