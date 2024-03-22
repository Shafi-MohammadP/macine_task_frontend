import React, { useState } from "react";
import trophyLogo from "../../assets/svg-styles/trophy_logo.svg";
import projectLogo from "../../assets/svg-styles/project_logo.svg";
import shakeLogo from "../../assets/svg-styles/shake_hand.svg";
import AchievementCards from "../cards/AchievementCards";
function Achievements() {
  const cardData = [1, 2, 3];
  function getLogo(index) {
    switch (index) {
      case 0:
        return trophyLogo;
      case 1:
        return projectLogo;
      case 2:
        return shakeLogo;
      default:
        return null;
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center md:text-5xl text-2xl font-semibold">
        Achievements
        <hr className="w-24 h-1 bg-[#B224EF] mt-3" />
      </div>
      <div className="flex justify-center">
        <div className="md:flex block gap-11 justify-center w-8/12">
          {cardData.map((item, index) => (
            <AchievementCards
              key={index}
              logo={getLogo(index)}
              text={`Achievement ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Achievements;
