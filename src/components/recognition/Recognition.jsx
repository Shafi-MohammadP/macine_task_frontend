import React from "react";
import recognitionLogo from "../../assets/svg-styles/recognition_full_logo.svg";
function Recognition() {
  return (
    <section>
      <div className="md:flex block md:relative md:py-24 py-4 md:px-28 px-20">
        <div className="w-full relative">
          <p className="md:py-28 py-4 w-full md:text-2xl md:ml-20 mt-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            ullam error commodi autem, impedit cumque, distinctio quam maiores
            nemo iure itaque exercitationem est facilis, id consequuntur vel
            ducimus quas voluptatem?
          </p>
        </div>
        <img
          src={recognitionLogo}
          alt="mission logo"
          className="md:w-1/2 md:h-1/3 right-0"
        />
      </div>
    </section>
  );
}

export default Recognition;
