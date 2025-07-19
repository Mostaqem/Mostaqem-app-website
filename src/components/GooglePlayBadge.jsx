import React from "react";

const GooglePlayBadge = () => {
  return (
    <a 
      href="https://play.google.com/store/apps/details?id=com.mostaqem"
      className="inline-block"
    >
      <img 
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
        alt="Get it on Google Play"
        className="h-[5rem] w-auto"
      />
    </a>
  );
};

export default GooglePlayBadge;