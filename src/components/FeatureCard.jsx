import React from "react";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="min-h-[23rem] h-[max-content] shadow-md flex flex-col items-start gap-2 bg-[#fffaf5] rounded-md p-[1rem] border-[#fceedd] border-solid border-[2px]">
      <img src={image} className="rounded" />
      <span className="mt-4 flex flex-col items-start gap-1">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
      </span>
    </div>
  );
};

export default FeatureCard;
