import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
// import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import Emoji from "../Emoji/Emoji";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          "Made with <Emoji symbol="❤️" /> by Rahul Mahajan"
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Copyright © 2025 Rahul Mahajan
        </p>
      </div>
    </Fade>
  );
}
