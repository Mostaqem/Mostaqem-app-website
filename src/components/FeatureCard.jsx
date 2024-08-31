import React from "react";
import { PiConfettiLight } from "react-icons/pi";

const FeatureCard = ({ title, description, image, NewFeature }) => {
  return (
    <div className="relative min-h-[24rem] h-[max-content] max-sm:min-h-[max-content] shadow-md flex flex-col items-start gap-2 bg-[#fffaf5] rounded-md p-[1rem] border-[#fceedd] border-solid border-[2px]">
      <img src={image} className="rounded w-[100%] max-h-[14rem]" />
      <span className="mt-4 flex flex-col items-start gap-1">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
      </span>
      {NewFeature && (
        <p className="flex items-center justify-center gap-1 absolute top-2 left-2 bg-[#A9231F] text-white py-1 px-2 rounded-full text-black text-xs">
          جديد
          <PiConfettiLight />
        </p>
      )}
    </div>
  );
};

export default FeatureCard;
