import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Vision from "./components/vision/Vision";
import Mission from "./components/mission/Mission";
import Achievements from "./components/achievements/Achievements";
import WorksDone from "./components/works-done/WorksDone";
import Footer from "./components/footer-section/Footer";
import Momentum from "./components/momentum/Momentum";
import Recognition from "./components/recognition/Recognition";
import Compliments from "./components/compliments/Compliments";
import { BaseUrl } from "./components/constants/Constants";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Loader } from "./components/Loader/Loader";
import { useLocation, useNavigate } from "react-router";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [companyDetails, setCompanyDetails] = useState(null);
  const details = location.state.companyDetails;

  useEffect(() => {
    if (!details) {
      navigate("/");
    }
    setCompanyDetails(details[0]);
  }, []);

  if (!companyDetails) {
    return <div>Loading...</div>;
  }
  const { address, City, state, postal_code, contact_number } = companyDetails;
  const {
    id,
    company_name,
    vision,
    mission,
    recognition,
    momentum,
    compliment,
    company_logo,
    cover_image,
  } = companyDetails;
  const { social_media } = companyDetails;
  console.log(social_media, "data");

  return (
    <>
      <Navbar companyName={company_name} companyLogo={company_logo} />

      <Banner coverImage={cover_image} />
      <Vision visionText={vision} />
      <Mission missionText={mission} />
      <Achievements id={id} />
      <Momentum momentumText={momentum} />
      <Recognition recognitionText={recognition} />
      <WorksDone />
      <Compliments complimentText={compliment} />
      <Footer
        companyName={company_name}
        address={address}
        city={City}
        state={state}
        postalCode={postal_code}
        contactNumber={contact_number}
        socialMedia={social_media}
      />
    </>
  );
}

export default App;
