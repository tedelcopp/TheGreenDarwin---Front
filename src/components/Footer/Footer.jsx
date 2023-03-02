import React from "react";
import { Link } from "react-router-dom";
import s from "../Footer/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={s.container}>
      <footer>
        <div className={s.logos}>
          <Link to={"https://twitter.com/home"} target="_blank">
            <FontAwesomeIcon className={s.iconred} icon={faTwitter} />
          </Link>

          <Link to={"https://www.facebook.com/"} target="_blank">
            <FontAwesomeIcon className={s.iconred} icon={faFacebook} />
          </Link>

          <Link to={"https://www.instagram.com/"} target="_blank">
            <FontAwesomeIcon className={s.iconred} icon={faInstagram} />
          </Link>

          <Link to={"https://web.whatsapp.com/"} target="_blank">
            <FontAwesomeIcon className={s.iconred} icon={faWhatsapp} />
          </Link>
        </div>
        <p>Copyright © 2020 The Green Darwin</p>
      </footer>
    </div>
  );
}
