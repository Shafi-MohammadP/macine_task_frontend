import React, { useEffect } from "react";
import companyLogo from "../../assets/companyLogo.svg";
import { Input } from "@material-tailwind/react";
import axios from "axios";
import { BaseUrl } from "../constants/Constants";
function Footer({
  companyName,
  address,
  city,
  state,
  postalCode,
  contactNumber,
  socialMedia,
  companyLogo,
}) {
  return (
    <>
      <footer className="bg-blue-950">
        <div className="px-4 md:px-20 py-11 min-h-32 flex flex-col md:flex-row justify-between gap-4 md:gap-20">
          <div className="company__details flex flex-col md:flex-row gap-4 items-center md:text-left mt-[-40px]">
            <div className="flex flex-col">
              <div className="flex  items-center gap-4">
                <img
                  src={BaseUrl + companyLogo}
                  alt=""
                  className="w-12 h-12 md:w-auto md:h-auto"
                />
                <p className="text-center md:text-left text-white">
                  {companyName}
                </p>
              </div>
              <div className="flex gap-4 text-2xl py-4 text-white">
                {socialMedia.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name === "instagram" && (
                      <i className="ri-instagram-fill"></i>
                    )}
                    {item.name === "twitter" && (
                      <i className="ri-twitter-fill"></i>
                    )}
                    {item.name === "facebook" && (
                      <i className="ri-facebook-fill"></i>
                    )}
                    {item.name === "linked in" && (
                      <i className="ri-linkedin-fill"></i>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="address__details md:py-7">
            <h3 className="text-center md:text-left text-white text-2xl">
              Address
            </h3>
            <ul className="mt-4 py-4 md:mt-0">
              {" "}
              <li className="text-center md:text-left text-white mb-2">
                {address}
              </li>{" "}
              <li className="text-center md:text-left text-white mb-2">
                {city} {state}
              </li>{" "}
              <li className="text-center md:text-left text-white mb-2">
                {postalCode}
              </li>{" "}
            </ul>
          </div>

          <div className="contact__section md:py-7">
            <h3 className="text-center md:text-left text-white text-2xl">
              Contact
            </h3>
            <p className="text-center md:text-left text-white py-4">
              {contactNumber}
            </p>
          </div>
          <div className="form__section md:py-7">
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter Your email address"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Enter Your Message"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
