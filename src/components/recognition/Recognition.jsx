import React from "react";
import recognitionLogo from "../../assets/svg-styles/recognition_full_logo.svg";
function Recognition({ recognitionText }) {
  return (
    <section>
      <div className="md:flex block md:relative md:py-24 py-4 md:px-28 px-20">
        <div className="w-full relative">
          <img
            src={recognitionLogo}
            alt="mission logo"
            className="md:w-1/3 md:h-1/3 right-0 block sm:hidden"
          />
          <p className="md:py-28 py-11 w-full md:text-2xl md:ml-20">
            {recognitionText}
          </p>
        </div>
        <img
          src={recognitionLogo}
          alt="mission logo"
          className="md:w-1/3 md:h-1/3 right-0 hidden sm:block"
        />
      </div>
    </section>
  );
}

export default Recognition;
