import React from 'react';
import style from '../styles/style';

const {innerContainer, questrial, title} = style;

export const About = () => (
  <div>
    <h2 style={{...questrial, ...title}}>About</h2>
  </div>
);
