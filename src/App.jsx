import "./App.css";

//Components
import Header from "./components/Landing_page/Header";
import Section1 from "./components/Landing_page/Section1";
import Section2 from "./components/Landing_page/Section2";
import Section3 from "./components/Landing_page/Section3";
import Testimonials from "./components/Landing_page/Testimonials";
import Footer from "./components/Landing_page/Footer";

function App() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
