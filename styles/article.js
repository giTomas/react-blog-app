import Color from 'color';
import deepFreeze from 'deep-freeze';
import Prefixer from 'inline-style-prefixer';
import {addUnits} from '../helpers/helpers';

const unprefixed = {
  backgroundImage: {

  },
  paragraph: {

  },
  figure : {

  },
  figCaption: {

  }
}

const prefixer = new Prefixer({ userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Chrome/25.0.1216.0 Safari/537.2'})

const article = prefixer.prefix(unprefixed);

deepFreeze(article);

export default article;
