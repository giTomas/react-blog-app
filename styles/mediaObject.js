import Color from 'color';
import deepFreeze from 'deep-freeze';
import Prefixer from 'inline-style-prefixer';
import {addUnits} from '../helpers/helpers';

const unprefixed = {
    transition: {
      transition: "all 0.22s ease-out" ,
    },
    imageMo:{
      width: 150,
      height: 150,
      objectFit:"cover",
    },
    titleMo: {
      fontSize: "2rem",
      marginLeft: '0.5rem',
    },
    date: {

    },
    category: {

    },
    link: {
      display:"flex",
      textDecoration: "none",
      color: "black",
      padding: "1.5rem"
    }
}

const prefixer = new Prefixer({ userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Chrome/25.0.1216.0 Safari/537.2'})

const mediaObject = prefixer.prefix(unprefixed);

deepFreeze(mediaObject);

export default mediaObject;
