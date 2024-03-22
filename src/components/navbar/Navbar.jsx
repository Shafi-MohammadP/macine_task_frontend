import React from "react";
import logoSvg from "../../assets/companyLogo.svg";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { BaseUrl, imageBaseUrl } from "../constants/Constants";
import { Loader } from "../Loader/Loader";

function Navbar({ companyName, coverImage }) {
  console.log(companyName, "lkiij");
  const navigate = useNavigate();
  const handleLogOut = async () => {
    localStorage.removeItem("authToken");
    toast.success("log out successful");
    navigate("/");
  };
  console.log(imageBaseUrl + coverImage);
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 shadow-md">
        <div className="flex items-center">
          <img
            src={imageBaseUrl + coverImage}
            alt="cover image"
            className="h-8 w-8"
          />
          <span className="ml-2 text-gray-900 font-semibold">
            {companyName}
          </span>
        </div>
        <div className="flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleLogOut()}
          >
            Log out
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
