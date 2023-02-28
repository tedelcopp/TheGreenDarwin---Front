import React from "react";
import s from "./map.module.css";
import MapInteractive from "./MapInteractive";

export default function Map() {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <u>We are located at 534 SE 37th Ave, Portland, Oregon.</u>
      </div>
      <MapInteractive />
      <div className={s.textInv}>Come visit us from 9.00am to 4:30pm</div>
    </div>
  );
}
