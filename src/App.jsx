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
import { useLocation } from "react-router";

function App() {
  const location = useLocation();
  const [companyDetails, setCompanyDetails] = useState(null);
  const details = location.state.companyDetails;
  console.log(details, "loiuhdasghugsadhhu");

  useEffect(() => {
    setCompanyDetails(details[0]);
  }, []);

  if (!companyDetails) {
    return <div>Loading...</div>;
  }

  const {
    company_name,
    vision,
    mission,
    recognition,
    momentum,
    compliment,
    company_logo,
    cover_image,
  } = companyDetails;
  console.log(company_name);

  return (
    <>
      <Navbar companyName={company_name} coverImage={cover_image} />

      <Banner />
      <Vision />
      <Mission />
      <Achievements />
      <Momentum />
      <Recognition />
      <WorksDone />
      <Compliments />
      <Footer />
    </>
  );
}

export default App;
