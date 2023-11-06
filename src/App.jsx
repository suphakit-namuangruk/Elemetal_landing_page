import "./App.css";

//Components
import Navbar from "./components/Navbar";
import Header from "./pages/landing_page/Header";
import Section1 from "./pages/landing_page/Section1";
import Section2 from "./pages/landing_page/Section2";
import Section3 from "./pages/landing_page/Section3";
import Section4 from "./pages/landing_page/Section4";
import Section5 from "./pages/landing_page/Section5";
import Testimonials from "./pages/landing_page/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Testimonials />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;
