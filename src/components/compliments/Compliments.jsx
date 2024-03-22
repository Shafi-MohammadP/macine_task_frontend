import React from "react";
import complimentsLogo from "../../assets/svg-styles/complements_full_logo.svg";
function Compliments({ complimentText }) {
  return (
    <section className="px-11 md:px-28 py-11 md:py-28">
      <div className="md:flex items-center justify-between">
        <img
          src={complimentsLogo}
          alt="Vision"
          className="md:w-1/2 md:h-auto max-w-xs md:max-w-none"
        />
        <div className="md:w-full md:text-2xl relative md:left-[-17rem] md:top-32">
          <p className="w-full">{complimentText}</p>
        </div>
      </div>
    </section>
  );
}

export default Compliments;
