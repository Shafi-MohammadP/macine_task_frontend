import React, { useEffect } from "react";
import { Container } from "reactstrap";
import AchievementCards from "../cards/AchievementCards";
import WorksDoneCards from "../cards/WorksDoneCards";
import { BaseUrl } from "../constants/Constants";
import axios from "axios";

function WorksDone({ id }) {
  useEffect(() => {
    const apiUrl = `${BaseUrl}company/woks_completed/${id}/`;
    const fetchWorksDone = async () => {
      try {
        const response = await axios.get(apiUrl);
        // console.log(response.data, "--------------->>>");
      } catch (err) {
        console.error(err, "error fetching in works done");
      }
    };
    fetchWorksDone();
  }, []);
  const imageData = [1, 2, 3, 4, 5];
  return (
    <>
      <section>
        <Container>
          <div className="flex flex-col items-center justify-center md:text-5xl text-2xl font-semibold">
            Works Done
            <hr className="w-24 h-1 bg-[#B224EF] mt-3" />
          </div>
          <div className="flex justify-center py-7">
            <div className="flex flex-wrap justify-center gap-11 md:w-8/12 xl:w-full">
              {imageData.map((item, index) => (
                <WorksDoneCards key={index} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default WorksDone;
