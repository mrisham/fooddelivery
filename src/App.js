import "./App.css";
import AboutUs from "./components/landing/AboutUs";
import Footer from "./components/landing/Footer";
import LandingPage from "./components/landing/LandingPage";
import LatestArticles from "./components/landing/LatestArticles";

function App() {
  return (
    <div>
      <LandingPage />
      <AboutUs />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
