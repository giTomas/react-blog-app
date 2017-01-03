import React from 'react';
import style from '../styles/style';
import {makeTitle} from '../helpers/helpers';

const {questrial, title} = style;

// console.log(typeof capitalizeFirstLetter);


const Article = ({params}) =>
  <h2 style={{...questrial, ...title}}>{makeTitle(params.articleId)}</h2>;


export default Article;
