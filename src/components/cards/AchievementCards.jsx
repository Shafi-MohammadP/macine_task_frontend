import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import trophyLogo from "../../assets/svg-styles/trophy_logo.svg";
import projectLogo from "../../assets/svg-styles/project_logo.svg";
import shakeLogo from "../../assets/svg-styles/shake_hand.svg";
import { BaseUrl } from "../constants/Constants";
import axios from "axios";

function AchievementCards({ id }) {
  const [achievementData, setAchievementData] = useState([]);

  const tokenDataString = localStorage.getItem("authToken");
  const tokenData = JSON.parse(tokenDataString);
  const accessToken = tokenData ? tokenData.access : null;

  useEffect(() => {
    const fetchAchievements = async () => {
      const apiUrl = `${BaseUrl}company/achievement_retrieval/${id}/`;
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const { happy_clients, awards_won, projects_completed } = response.data;

      const combinedAchievements = [
        ...happy_clients.map((achievement) => ({
          type: "Happy Clients",
          number: achievement.number,
        })),
        ...awards_won.map((achievement) => ({
          type: "Awards Won",
          number: achievement.number,
        })),
        ...projects_completed.map((achievement) => ({
          type: "Projects Completed",
          number: achievement.number,
        })),
      ];

      setAchievementData(combinedAchievements);
    };
    fetchAchievements();
  }, []);

  return (
    <>
      {achievementData.map((achievement, index) => (
        <Card
          key={index}
          className="mt-6 md:w-96 md:h-64 bg-[#7067f5]"
          style={{ borderRadius: "33px" }}
        >
          <CardBody className="flex flex-col items-center justify-center py-6">
            <img src={getLogo(achievement.type)} alt="" className="mb-2" />
            <Typography className="text-7xl mb-2 font-semibold text-white">
              {achievement.number}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex items-center justify-center text-2xl font-semibold  text-white">
            <span>{achievement.type}</span>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

function getLogo(type) {
  switch (type) {
    case "Happy Clients":
      return shakeLogo;
    case "Awards Won":
      return trophyLogo;
    case "Projects Completed":
      return projectLogo;
    default:
      return null;
  }
}

export default AchievementCards;
