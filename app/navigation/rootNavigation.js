import React from 'react';

export const navigationRef = React.createRef();

const navigate = (...args) => {
  navigationRef.current?.navigate(...args);
};

export default {
  navigate,
};
