import React, { useEffect } from "react";

const MsStoreBadge = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://get.microsoft.com/badge/ms-store-badge.bundled.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-[11rem] h-[2rem]">
      <div className="transform scale-50">
        <ms-store-badge
          productid="9phgb8dphjgg"
          productname="Mostaqem"
          window-mode="direct"
          theme="light"
          language="ar"
          animation="on"
        ></ms-store-badge>
      </div>
    </div>
  );
};

export default MsStoreBadge;
