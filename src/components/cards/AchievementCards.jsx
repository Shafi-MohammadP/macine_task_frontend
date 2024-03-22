import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";

function AchievementCards({ logo, text }) {
  return (
    <>
      <Card
        className="mt-6 md:w-96 md:px-10 bg-[#7067f5]"
        style={{ borderRadius: "33px" }}
      >
        <CardBody className="flex flex-col items-center justify-center">
          <img src={logo} alt="" className="mb-2" />
          <Typography className="text-7xl mb-2 font-semibold text-white">
            183
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex items-center justify-center text-2xl font-semibold  text-white">
          <span>Happy Clients</span>
        </CardFooter>
      </Card>
    </>
  );
}

export default AchievementCards;
