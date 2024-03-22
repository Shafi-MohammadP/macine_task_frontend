import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import firstLogo from "../../assets/svg-styles/rocket_logo.svg";

import AchievementCards from "../cards/AchievementCards";
function Achievements({ id }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:text-5xl text-2xl font-semibold">
        Achievements
        <hr className="w-24 h-1 bg-[#B224EF] mt-3" />
      </div>
      <div className="flex justify-center">
        <div className="md:flex block gap-11 justify-center w-8/12">
          <AchievementCards id={id} />
        </div>
      </div>
    </>
  );
}

export default Achievements;
