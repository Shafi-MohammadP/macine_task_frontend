import React from "react";
import momentumLogo from "../../assets/svg-styles/momentum_full_logo.svg";
function Momentum() {
  return (
    <>
      <section className="px-11 md:px-28 py-7 md:py-11">
        <div className="md:flex items-center justify-between">
          <img
            src={momentumLogo}
            alt="Vision"
            className="md:w-1/2 md:h-auto max-w-xs md:max-w-none"
          />
          <div className="md:w-full lg:max-w-full md:text-2xl relative md:left-[-20rem] md:top-24">
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

export default Momentum;
