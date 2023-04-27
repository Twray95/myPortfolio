import React from "react";
import { SocialIcon, socialIcon } from "react-social-icons";

function Footer() {
  return (
    <>
      <div className="d-flex justify-content-around footer align-items-center">
        <SocialIcon
          url="https://www.linkedin.com/in/thomas-wray/"
          bgColor="#FFFFFF"
          style={{ height: 25, width: 25 }}
        />
        <SocialIcon
          url="https://github.com/Twray95"
          bgColor="#FFFFFF"
          style={{ height: 25, width: 25 }}
        />
        <SocialIcon
          url="twray95@gmail.com"
          network="email"
          bgColor="#FFFFFF"
          style={{ height: 25, width: 25 }}
        />
      </div>
    </>
  );
}

export default Footer;
