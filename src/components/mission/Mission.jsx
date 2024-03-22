import React from "react";

import missionLogo from "../../assets/svg-styles/missio_full_logo.svg";

function Mission({ missionText }) {
  return (
    <>
      <section>
        <div className="md:flex block md:relative md:py-2 py-11 md:px-28 px-20">
          <div className="w-full relative">
            <img
              src={missionLogo}
              alt="mission logo"
              className="md:w-1/3 md:h-1/3 right-0 block sm:hidden"
            />
            <p className="md:py-28 py-11 w-full md:text-2xl md:ml-20">
              {missionText}
            </p>
          </div>
          <img
            src={missionLogo}
            alt="mission logo"
            className="md:w-1/3 md:h-1/3 right-0 hidden sm:block"
          />
        </div>
      </section>
    </>
  );
}

export default Mission;
