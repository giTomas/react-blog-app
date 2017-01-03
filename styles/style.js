import Color from 'color';
import deepFreeze from 'deep-freeze';
import Prefixer from 'inline-style-prefixer';
import {addUnits} from '../helpers/helpers';

// import bg from '../assets/images/bg.jpg'

const padding = 0.5;
const margin = padding;
const sansSerif = "'Questrial', sans-serif";
const specialElite = "'Special Elite', cursive";
const blackTransparent = 'hsla(0, 0%, 0%, 0)';
const black = 'hsla(0, 0%, 0%, 1)';
const orangeTransparent = 'hsla(30, 96%, 52%, 0)';
const orange = 'hsla(30, 96%, 52%, 1)';


let unprefixed = {
  el: {
    lineHeight: 1.5,
    fontFamily: "'Questrial', sans-serif",
  },
  el1: {
    color: "red"
  },
  el2: {
    color: "blue",
  },
  el3: {
    color: "orange",
  },
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  outerContainer1: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  outerContainer: {
    maxWidth: `calc(700px + (2 * ${addUnits(padding, "rem")}))`,
    marginLeft: "auto",
    marginRight: "auto",
    // marginTop: "0.5em",
    // paddingLeft: padding,
    // paddingRight: padding,
    // marginBottom: 0,
    // boxShadow: "0 0 2px orange",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
  innerContainer: {
    padding: addUnits(padding, "rem"),
    flex: 1,
  },
  title: {
    fontSize: "calc(1.5em + 2vw)",
    fontFamily: "sans-serif",
  },
  font: {
    fontSize: "calc(1.5em + 3vw)",
    lineHeight: 1.5,
    fontFamily: sansSerif,
  },
  nav: {
    display: "flex",
    "flexWrap": "wrap",
    listStyle: "none",
    marginBottom: addUnits(margin, "rem"),
  },
  link: {
    marginRight: "0.5em",
  },
  href: {
    // textDecoration: `underline ${orangeTransparent}`,
    textDecoration: "none",
    color: "black",
    fontFamily: sansSerif,
    fontVariant: "small-caps",
    fontWeight: "bold",
    transition: "color 0.22s ease-out, text-decoration 0.44s ease-out",
  },
  activeLink: {
    color: "orange",
    textDecoration: "underline",
    // textDecoration: `underline ${orange}`,
  },
  hoverLink: {
    textDecoration: "underline",
    // textDecoration: `underline ${black}`,
  },
  activeLink2(obj) {
    return {
      ...obj,
      ...{color: "orange"}
    }
  },
  backgroundImage: {
    minWidth: "100%",
    // height: "477px",
    height: "45vh",
    backgroundImage: "url('assets/images/bg.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    // backgroundAttachment: "fixed",
    marginLeft: addUnits(-margin, "rem"),
    marginRight: addUnits(-margin, "rem"),
    // margin: "0 -1rem",
  },
  questrial: {
    fontFamily: sansSerif,
  },
  title: {
    marginTop: addUnits((2*margin), "rem"),
    marginBottom: addUnits(margin, "rem"),
    fontSize: "2rem",
  },
  footer: {
    fontSize: "1em",
    textAlign: "right",
    marginTop: addUnits(margin, "rem"),
    marginBottom: addUnits(margin, "rem"),
  }
};

const prefixer = new Prefixer({ userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Chrome/25.0.1216.0 Safari/537.2'})

const style = prefixer.prefix(unprefixed);

deepFreeze(style);

export default style;
