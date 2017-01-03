import React from 'react';

export const NoMatch = ({location}) => (
  <div>
    <h2>Nothing matched {location.pathname}!</h2>
  </div>
);
