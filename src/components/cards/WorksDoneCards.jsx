import React from "react";
import image from "../../assets/annotate.png";
import { Card, CardBody } from "@material-tailwind/react";
import { BaseUrl } from "../constants/Constants";
function WorksDoneCards({ image }) {
  return (
    <>
      <div className="flex justify-center">
        <Card>
          <CardBody className="p-0">
            <img
              src={BaseUrl + image}
              alt=""
              className="w-48 h-52 object-cover"
              style={{ borderRadius: "11px" }}
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default WorksDoneCards;
