import React, {PropTypes} from 'react';
import InnerContainer from '../components/innerContainer'
import style from '../styles/style.js';
import {mergeObjects} from '../helpers/helpers.js';

const Title = ({text = "Hello world!", style}) =>
  <h2 style={style} className="title">{text}</h2>;

Title.propTypes = {
  text: PropTypes.string,
  // style: React.propTypes.object,
};
// Title.defaultProps = {text: 'Hello World'};

export class Hello extends React.Component {

  render() {

    const {title, el, el1, el2, el3, font, backgroundImage} = style;
    return (
      <div>
        <div style={backgroundImage}></div>
          <Title style={{...font, ...(true && el2)}} />
          <Title text="Hello someone!" style={mergeObjects(font, el1)} />
          <Title text="Hello everyone!" style={mergeObjects(font, el3)} />
      </div>
    );
  }
};
