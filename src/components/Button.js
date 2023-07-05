import React from 'react';

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

export default Button;
