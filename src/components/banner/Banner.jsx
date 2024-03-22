import React from "react";
import demoImage from "../../assets/annotate.png";

function Banner({ coverImage }) {
  return (
    <>
      <div className="relative w-full h-[600px]">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={demoImage ? demoImage : coverImage}
          alt=""
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold text-center">
            We are trendy Service Providers &
            <span className="block py-4">Vendors</span>
          </p>
          <p className="text-white text-lg lg:text-lg text-center py-3">
            Turn your work with more minimalist and modern with{" "}
            <span className="block">ease and speed</span>
          </p>
          <button className="explore__btn flex font-semibold h-14 items-center justify-between mt-4 px-6 py-3 bg-blue-500 text-white rounded-md text-base lg:text-lg">
            Explore more{" "}
            <span className="flex flex-row ml-8 items-center justify-center w-11 h-11 bg-blue-500 rounded-full">
              <i className="ri-arrow-down-fill"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
