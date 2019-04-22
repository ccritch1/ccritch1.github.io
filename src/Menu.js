import React from "react";
import Logo_3 from "./logo_3.svg"

export default ({ close }) => (
  <div className="menu">
    <ul>
      <a href="http://www.zolefulfilmandphoto.com"> <li className = "photo" onClick={close}>Photography Portfolio</li></a>
      <li onClick={close}>Resume</li>
      <li onClick={close}>About</li>

      
    </ul>
    <img className="logo3" src = {Logo_3} alt="Logo"></img>
  </div>
);
