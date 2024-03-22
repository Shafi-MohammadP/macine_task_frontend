import React from "react";

import vision from "../../assets/svg-styles/vision_new_logo.svg";
function Vision() {
  return (
    <>
      <section className="px-11 md:px-28 py-11 md:py-2">
        <div className="md:flex items-center justify-between">
          <img
            src={vision}
            alt="Vision"
            className="md:w-1/3 md:h-auto max-w-xs md:max-w-none"
          />
          <div className="md:w-full md:text-2xl relative md:left-[-8rem] md:top-11">
            <p className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque ullam error commodi autem, impedit cumque, distinctio
              quam maiores nemo iure itaque exercitationem est facilis, id
              consequuntur vel ducimus quas voluptatem?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vision;
