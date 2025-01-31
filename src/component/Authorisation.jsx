import React from 'react';

const Authorisation = (Wrap) => {
  return ({ isAuth, ...props }) => {
    if (!isAuth) {
      return <p>Access Denied!...</p>;
    }
    return <Wrap {...props} />;
  };
};

export default Authorisation;
