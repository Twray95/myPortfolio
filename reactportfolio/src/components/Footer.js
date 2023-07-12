import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <>
      <div className="d-flex justify-content-around footer align-items-center">
        <SocialIcon
          url="https://www.linkedin.com/in/thomas-wray/"
          bgColor="#FFFFFF"
          style={{ height: 25, width: 25 }}
          target="_blank"
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
          target="_blank"
        />
      </div>
    </>
  );
}

export default Footer;
