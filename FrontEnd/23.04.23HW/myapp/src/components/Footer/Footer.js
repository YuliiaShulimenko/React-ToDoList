import React from "react";
import facebook from "./img/fb.png"
import instagramm from "./img/insta.png"
import twitter from "./img/Vector.png"
import linkedin from "./img/Linkedin.png"
import s from "./Footer.module.css"

function Footer() {
  return (
    <div className={s.footer_title}>
      <div className={s.icons}>
        <img src={facebook}/>
        <img src={instagramm}/>
        <img src={twitter}/>
        <img src={linkedin}/>
      </div>
      <p className={s.footer_p}>Copyright ©2020 All rights reserved </p>
    </div>
  );
}

export default Footer;
