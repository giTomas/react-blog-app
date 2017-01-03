import React, {PropTypes} from 'react';
import style from '../styles/style';
import { Link } from 'react-router';
import { capitalizeFirstLetter } from '../helpers/helpers';

const { link, href, hoverLink, activeLink } = style;

export const ListItem = ({id, hovered, fn1, fn2}) => (
    <li id={id} style={link}
       onMouseEnter={fn1}
       onMouseLeave={fn2}>
       <Link style={{ ...href, ...(hovered && hoverLink)}}
        activeStyle={activeLink}
        to={`/${id}`}>
        {/* {id} */}
        {capitalizeFirstLetter(id)}
       </Link>
    </li>
  );

export const ListItemRoot = ({id, hovered, fn1, fn2}) => (
  <li id={id} style={link}
    onMouseEnter={fn1}
    onMouseLeave={fn2}>
    <Link style={{ ...href, ...(hovered && hoverLink)}}
     activeOnlyWhenExact activeStyle={activeLink}
     to="/">
     {/* {id} */}
     {capitalizeFirstLetter(id)}
    </Link>
  </li>
);

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  hovered: PropTypes.bool.isRequired,
  fn1: PropTypes.func.isRequired,
  fn2: PropTypes.func.isRequired,
}

ListItemRoot.propTypes = {
  id: PropTypes.string.isRequired,
  hovered: PropTypes.bool.isRequired,
  fn1: PropTypes.func.isRequired,
  fn2: PropTypes.func.isRequired,
}
