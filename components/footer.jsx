import React from "react";
import style from "../styles/style"

const {footer, questrial} = style;

const Footer = () => {
  const year = (new Date()).getFullYear();
  return (
    <footer style={{
                    ...footer,
                    ...questrial
                  }}>
      &#169; {year}
    </footer>
  )

}

export default Footer;
