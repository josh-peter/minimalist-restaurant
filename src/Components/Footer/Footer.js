import React from "react";
import "../Footer/Footer.css";
import {AiFillInstagram, AiFillFacebook, AiFillTwitterCircle, AiFillGithub} from "react-icons/ai"

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://github.com/josh-peter" rel="noopener noreferrer" target="_blank"><AiFillGithub/></a>
        <a href="https://twitter.com/Mectzi_llc" rel="noopener noreferrer" target="_blank"><AiFillTwitterCircle/></a>
        <a href="https://web.facebook.com/joshua.peter.908" rel="noopener noreferrer" target="_blank"><AiFillFacebook/></a>
        <a href="https://www.instagram.com/mectzillc/" rel="noopener noreferrer" target="_blank"><AiFillInstagram/></a>
      </div>
      <p> &copy; 2022 jaydevkitche.com</p>
    </div>
  );
}

export default Footer;
