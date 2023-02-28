import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/navigation";
import LandingPage from "./Components/LandingPage/landing_page";
import ContactUs from "./Components/ContactUs/contact_us";

const App = () => {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
