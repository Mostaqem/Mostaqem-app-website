import React from "react";

const FeatureCard = ({ title, desc, image }) => {
  return (
    <div className="shadow-lg flex flex-col items-start gap-2 bg-[#ffff] rounded-md p-[1rem] border-[#fceedd] border-solid border-[2px]">
      <img src={image} className="rounded" />
      <span className="mt-4 flex flex-col items-start gap-1">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{desc}</p>
      </span>
    </div>
  );
};

export default FeatureCard;
