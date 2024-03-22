import React from "react";

import missionLogo from "../../assets/svg-styles/missio_full_logo.svg";

function Mission() {
  return (
    <>
      <section>
        <div className="md:flex block md:relative md:py-2 py-11 md:px-28 px-20">
          <div className="w-full relative">
            <p className="md:py-28 py-11 w-full md:text-2xl md:ml-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque ullam error commodi autem, impedit cumque, distinctio
              quam maiores nemo iure itaque exercitationem est facilis, id
              consequuntur vel ducimus quas voluptatem?
            </p>
          </div>
          <img
            src={missionLogo}
            alt="mission logo"
            className="md:w-1/3 md:h-1/3 right-0"
          />
        </div>
      </section>
    </>
  );
}

export default Mission;
