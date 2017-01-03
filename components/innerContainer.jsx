import React from 'react';
import style from '../styles/style'

const InnerContainer = ({children}) => (
  <div className="innerContainer" style={style.innerContainer}>
    {children}
  </div>
);

export default InnerContainer;
