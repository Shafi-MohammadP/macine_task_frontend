import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import AchievementCards from "../cards/AchievementCards";
import WorksDoneCards from "../cards/WorksDoneCards";
import { BaseUrl } from "../constants/Constants";
import axios from "axios";

function WorksDone({ id }) {
  const [workCompleted, setWorkCompleted] = useState([]);
  useEffect(() => {
    const apiUrl = `${BaseUrl}company/woks_completed/${id}/`;
    const fetchWorksDone = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          setWorkCompleted(response.data);
        }
      } catch (err) {
        console.error(err, "error fetching in works done");
      }
    };
    fetchWorksDone();
  }, []);

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
              {workCompleted.map((item) => (
                <WorksDoneCards key={item.id} image={item.image} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default WorksDone;
